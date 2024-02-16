import { useContext } from 'react';
import { ContextoDeFiltros } from '../context/filtros';
import { Card } from './Card';

export const Targert = () => {

    const {info} = useContext(ContextoDeFiltros)
    
  return (
    <>
        {
            info?.map((i)=>{
                return(
                    <Card key={i.id} info={{...i}}/>
                )
            })
        }
    </>
  )
}
