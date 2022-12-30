import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ctx, ProductInterface, ProductProps } from "../Interfaces/globalTypes"
import { AiFillStar } from "react-icons/ai";


export const Details = () => {
    const state = useContext(ctx)
    const { title } = useParams()

    const product: ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    return (
        <div className="flex flex-1">
            <img className="p-8" src={product.image} />
            <div className="flex flex-col gap-8 p-4">
                <h1 className="font-extrabold ">{title}</h1>
                <div>${product.price}</div>
                <div className="flex items-center gap-2"> {product.rating.rate}<AiFillStar/> /  5 <AiFillStar/></div>
                <div></div>
                <div>{product.description}</div>
                <button className="relative flex items-center justify-start p-4 overflow-hidden transition-all bg-[#1da1f2] hover:bg-white group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="z-10 w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        Add to Cart
                    </span>
                </button>
            </div>
        </div>
    )
}