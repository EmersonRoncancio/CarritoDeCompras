
export const ayuda = (products)=>{
    const aux1 = []
    products.forEach(i=>{
        aux1.push(i.category)
    })
    let sinRepetidos = [...new Set(aux1)];
    return sinRepetidos
}
