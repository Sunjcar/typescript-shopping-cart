import { NavigateFunction, useNavigate } from "react-router-dom"
import { ProductProps } from "../Products/types"
import { Button } from "../Utilities/Button"


export const Catalog = ({ id,
    name,
    category,
    price,
    rate,
    image,
    dispatch,
    added,

}: ProductProps) => {
    const navigate: NavigateFunction = useNavigate()


    const handleNavigate = () => {
        dispatch({
            type: "MOVING",
            payload: { current: `/products/${name}`, history: window.location.pathname }
        })
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0)
        navigate(`/products/${name}`)
    }


    return (
        <div className="flex flex-col items-center h-full rounded-xl ">
            <div onClick={handleNavigate} className="h-[20rem] p-12 m-auto">
                <img className="block w-full h-[10rem] hover:-translate-y-1 hover:scale-40 cursor-pointer " src={image} alt={name} />
            </div>
            <hr className="w-full"></hr>
            <div className="flex flex-col justify-between w-full h-full gap-2 p-4">
                <h2 className="text-xs font-bold ">{name}</h2>
                <span> ${price} </span>
                <Button ProductId={id} dispatch={dispatch} added={added} />
            </div>
        </div>
    )
}


