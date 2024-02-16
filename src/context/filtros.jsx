import { createContext } from "react";
import { useState } from "react";
import {products} from '../mocks/prducts.json'

export const ContextoDeFiltros = createContext()

export const ProvedorDefiltros = ({children})=>{

    const [rango, setRango] = useState(0)
    const [filter, setFilter] = useState('')

    const info = products.filter(i =>{
        if(filter==='') return i && i.price > rango;
        else if(filter===i.category) return i.category === filter && i.price > rango
    })

    return(
        <ContextoDeFiltros.Provider value={{
            rango,setRango,filter,info,setFilter
        }}>
            {children}
        </ContextoDeFiltros.Provider>
    )
}