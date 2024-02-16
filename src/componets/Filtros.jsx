import { ContextoDeFiltros } from '../context/filtros.jsx';
import { useContext } from 'react'

export const Filtros = ({hola}) => {

    const {setFilter, setRango, rango} = useContext(ContextoDeFiltros)

    const handleCkik = (e)=>{
        setRango(e.target.value)
    }

    const handleCkik2 = (e)=>{
        console.log(e.target.value)
        setFilter(e.target.value)
    }

  return (
   <>
        <div className='flex items-center  gap-2'>
            <label htmlFor='price'></label>
            <input 
            id='price'
            type="range"
            min='0'
            max='1500'
            value={rango}
            onChange={handleCkik}
            /> 
            <span className='text-white'>{rango}</span>
        </div>
        <select
        className='rounded-md outline-none'
        onChange={handleCkik2} name="categoria" id="">
            <option value="">Todos</option>
            {
                hola.map((i,index)=>{
                    return(
                        <>
                            <option key={index} value={i}>{i}</option>
                        </>
                    )
                })
            }
        </select>
   </> 
  )
}
