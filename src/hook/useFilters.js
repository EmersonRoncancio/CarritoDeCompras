import { useState } from "react"
import {products} from '../mocks/prducts.json'

export const useFilters = () => {

    const [rango, setRango] = useState(0)
    const [filter, setFilter] = useState('')

    const info = products.filter(i =>{
        if(filter==='') return i && i.price > rango;
        else if(filter===i.category) return i.category === filter && i.price > rango
    })

    return {info, setFilter, setRango,rango}
}
