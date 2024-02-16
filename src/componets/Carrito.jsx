import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import { CarritoDeCompras } from '../context/compras';
import { useContext } from 'react';
import { CiTrash } from "react-icons/ci";

export const Carrito = () => {

    const [control, setControl] = useState(0)
    const {shopin,clearShopin,aunmentar} = useContext(CarritoDeCompras)

    const handleCkick =()=>{
        setControl(!control)
    }

    const handleCkick2 = (i)=>{
        console.log(i)
        aunmentar(i)
    }

  return (
    <>
    <button 
    onClick={handleCkick}
    className='absolute top-0 right-0 bg-gray-200 p-4 rounded-full m-3'>
    <FaBasketShopping />
    </button>
    <div className={`w-[30%] h-[80%] top-0 right-0 bg-slate-300 fixed flex-col items-center p-3 rounded-bl-3xl ${control?'flex':'hidden'} overflow-y-scroll`}>
            {
                shopin?.map((i)=>{
                    return(
                        <div
                        className='flex flex-col items-center border-2 border-slate-500 bg-slate-500 p-3 rounded-lg my-2 w-[70%]'
                        key={i.id}>
                            <img  
                            className='w-[100px] h-[100px] rounded-lg'
                            src={i.thumbnail} alt='Image' />
                            <p>{i.title} - ${i.price}</p>
                            <button 
                            onClick={()=>handleCkick2(i.id)}
                            className='flex content-center items-center justify-center bg-slate-200 rounded-2xl px-2'>
                            <FaCartShopping /> <p>{i.cont}</p> +
                            </button>
                        </div>
                        )
                    })  
                }
        <article className='w-full flex gap-2 justify-center '>
            <button
            onClick={clearShopin}>
                <CiTrash size={30}/>
            </button>
            <button 
            onClick={handleCkick}
            className='bottom-0'>
                <MdCancel size={30}/>
            </button>
        </article>
    </div>
    </> 
    
  )
}
