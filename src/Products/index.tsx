import { Fragment, useEffect, useReducer } from "react"
import { Catalog } from "../Components/Catalog"
import { ctx } from "../Interfaces/globalTypes"
import { initialState, reducerFn } from "../Reducer"

export const Product= () : JSX.Element => {
    const [state, dispatch] = useReducer(reducerFn, initialState)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch({ type: "ADD_PRODUCTS", payload: data }))
    }, [])
    return (
        <ctx.Provider value={state}>
            <div className="grid items-center flex-1 gap-[4rem] mt-[4rem ] md:grid-cols-4 p-12 mx-auto">
                {
                state.products.length ? (
                    <>
                    {state.products.map( product => (
                    <Catalog key={product.id} image={product.image} title={product.title} price={product.price} /> 
                    ))}
                    </>
                ) : (
                    <h2>Loading ... </h2>
                )
                }
            </div>
        </ctx.Provider>
    )
}