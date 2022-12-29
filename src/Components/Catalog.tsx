
interface ProductProps {
    title: string;
    image: string;
    price: number
}

export const Catalog: React.FC<ProductProps> = ({ title, image, price }): JSX.Element => {
    console.log(title)
    return (
        <div className="flex flex-col items-center h-full rounded-xl ">
            <div className="h-[20rem] p-12 m-auto">
                <img className="block w-full h-[10rem] " src={image} alt={title} />
            </div>
            <hr className="w-full"></hr>
            <div className="flex flex-col justify-between w-full h-full gap-8 p-4">
                <h2 className="text-xs font-bold ">{title}</h2>
                <span> ${price} </span>
                <button className="flex items-center justify-center p-4 text-white bg-[#1da1f2] rounded-full  hover:-translate-y-1 hover:scale-110"> Add To Cart </button>
            </div>
        </div>
    )
}


