
interface ProductProps {
    name: string;
    image: string;
}

export const Catalog: React.FC<ProductProps> = ({ name, image }): JSX.Element => {
    return (
        <div className=" w-[5rem] h-[5rem]">
            <div>
                <img className="max-h-[15rem] " src={image} alt={name} />
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
        </div>
    )
}


