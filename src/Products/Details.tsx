

import { AiFillStar } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { PageProps, ProductInterface } from "../Interfaces/globalTypes"
import { Button } from "../Utilities/Button"



export const Details: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
    const { title } = useParams()
    const { products } = state
    const product: ProductInterface = products.find(index => index.title.trim() === title?.trim()) as ProductInterface

    return (

        <div className="flex flex-1">
            <img className="p-8 w-[30rem] h-[30rem]" src={product.image} alt={product.title} />
            <div className="flex flex-col gap-8 p-4">
                <h1 className="font-extrabold ">{title}</h1>
                <div>${product.price}</div>
                <div className="flex items-center gap-2">
                    <span> {product.rating.rate}</span>
                    <AiFillStar />
                    <hr></hr>
                </div>
                <div>{product.description}</div>
                <Button
                    ProductId={product.id}
                    dispatch={dispatch}
                    added={product.added}
                />
            </div>
        </div>
    )
}