import { createContext, useReducer } from "react";

export const CarritoDeCompras = createContext();

const inicialstate = []
const reducer = (state,action)=>{
    const {
        type: actionType,
        payload: actionLoad
    } = action
    switch(actionType){
        case 'AGREGAR PRODUCTO':{
            const newState = [...state,actionLoad]
            return newState
        }
        case 'ELIMINAR PRODUCTO':{
            return state.filter(data=>{
                return data.id !== actionLoad.id
            })
        }
        case 'VACIAR CARRITO':{
            return inicialstate}
        case 'AUNMENTAR PRODUCTO':{
            return state.map(element=>{
                if(element.id===actionLoad){
                    return{
                        ...element,
                        cont: element.cont + 1
                    }
                }
                return element
            })
        }
    }
    return state
}

export const ContextoProvedor = ({children})=>{

    const [state, dispatch] = useReducer(reducer, inicialstate)

    const addProduct = (i)=>{
        dispatch({
            type: 'AGREGAR PRODUCTO',
            payload: i
        })
    }

    const dataClear = (i)=>{
        dispatch({
            type: 'ELIMINAR PRODUCTO',
            payload: i
        })
    }

    const clearShopin = ()=>{
         dispatch({
            type: 'VACIAR CARRITO'
        })
    }

    const aunmentar = (i)=>{
         dispatch({
            type: 'AUNMENTAR PRODUCTO',
            payload: i
        })
    }

    // const [shopin, setShopin] = useState([])
    
    // const addProduct = (i)=>{
    //     // setShopin(prevShopin => [...new Set([...prevShopin, i])]);
    //     setShopin([...shopin,i])
    //     console.log(shopin)
    // }

    // const dataClear = (i)=>{
    //     setShopin(prevShopin => prevShopin.filter(data=>{
    //         return data.id !== i.id
    //     }))
    // }

    // const clearShopin = ()=>{
    //     setShopin([])
    // }

    // const aunmentar = (i) =>{
    //     const aux = shopin.map(element=>{
    //             if(element.id===i){
    //                 return{
    //                     ...element,
    //                     cont: element.cont += 1
    //                 }
    //             }
    //             return element
    //         })
    //     setShopin(aux)
    // }
    
    return(
        <CarritoDeCompras.Provider value={{
            addProduct,shopin: state,clearShopin,dataClear,aunmentar
        }}>
            {children}
        </CarritoDeCompras.Provider>
    )
}