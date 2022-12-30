import { useNavigate } from "react-router-dom";
import { ActionInterface, ProductProps } from "../Interfaces/globalTypes";


export const Catalog = ({ title, price, image }: ProductProps) => {

    const navigate = useNavigate()

    const handleClick = () => navigate(`/products/${title.trim()}`)

    return (
        <div className="flex flex-col items-center h-full rounded-xl ">
            <div onClick={handleClick} className="h-[20rem] p-12 m-auto">
                <img className="block w-full h-[10rem] hover:-translate-y-1 hover:scale-40 cursor-pointer " src={image} alt={title} />
            </div>
            <hr className="w-full"></hr>
            <div className="flex flex-col justify-between w-full h-full gap-2 p-4">
                <h2 className="text-xs font-bold ">{title}</h2>
                <span> ${price} </span>
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


