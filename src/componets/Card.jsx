import { FaCartShopping } from "react-icons/fa6";
import { CarritoDeCompras } from '../context/compras';
import { useContext } from 'react';
import { useEffect,useState } from 'react'
import { MdClear } from "react-icons/md";

export const Card = ({info}) => {

    const {addProduct,dataClear,shopin} = useContext(CarritoDeCompras)
    const [boton, setBoton] = useState(false)

    useEffect(() => {
        if(shopin?.length===0) setBoton(false)
    }, [shopin])
    
    const handleClick = (i)=>{
        setBoton(!boton)
        if(boton===false) addProduct(i,i.cont = 1);
        else dataClear(i);
    }

  return (
    <div 
    className='w-[300px] h-[350px] flex flex-col items-center bg-slate-900 rounded-3xl overflow-hidden'>
        <div className='w-full h-[70%] overflow-hidden'>
          <img className='object-cover w-full h-full' src={info.images[0]} alt="Productos" />  
        </div>
        <div className='w-full h-[30%] flex flex-col justify-around items-center'>
            <h1 className='text-white text-center'>{info.title} - ${info.price}</h1>
            <button
            onClick={()=>handleClick(info)}
            className={`border-2 border-white px-7 py-2 text-white w-[80px] flex justify-center rounded-lg ${boton?'bg-red-400': 'bg-blue-400'}`}>
                {boton?<MdClear />:<FaCartShopping />}
            </button>
        </div>
    </div>  
  )
}
