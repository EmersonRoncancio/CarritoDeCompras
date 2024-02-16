import {products} from './mocks/prducts.json'
import { Targert } from './componets/Targert';
import { ayuda } from './helpers/filtro.js';
import { Filtros } from './componets/Filtros.jsx';
import { Carrito } from './componets/Carrito.jsx';
 
export const AppContext = () => {

    const hola = ayuda(products)
    // const {info, setFilter, setRango,rango} =useFilters()

  return (
    <>
        <Carrito/>
        <header className='w-full h-20 bg-slate-800 flex justify-around items-center'>
            <Filtros hola={hola}/>
        </header>
        <main className='w-full flex justify-center'>
            <article className='w-[80%] responsive justify-center items-center m-3'>
                <Targert/>
            </article>
        </main> 
    </>
  )
}
