import { useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ctx } from "../Interfaces/globalTypes";
import { ButtonCategoryProps, ButtonProps, ButtonSmallProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    ProductId,
    dispatch,
    added,
    content,
    onclick
}): JSX.Element => {
    const handleClick = () => {
        if (onclick) onclick()

        const action: string = added ? "REMOVE" : "ADD_TO_CART";
        dispatch && dispatch({ type: action, payload: ProductId })
    } 

    return (
        <button onClick={handleClick} className=" relative flex items-center justify-start p-4 overflow-hidden transition-all bg-[#1da1f2] hover:bg-white group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="z-10 w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                {
                    content ? content
                        :
                        added ? `Remove` : `Add to Cart`
                }
            </span>
        </button>
    )
}

export const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    content,
    dispatch,
    to
}): JSX.Element => {
    const navigate: NavigateFunction = useNavigate()
    const state = useContext(ctx)
    const { filterAt, searching } = state
    const handleClick = () => {
        if (to) navigate(to)
        dispatch({ type: "FILTER", payload: content })
    }

    const styles: string = `Button-category ${((filterAt === content && !searching) && !to) && "chosen"}`

    return (
        <button className={styles} onClick={handleClick}>
            {content}
        </button>
    )
}

export const ButtonSmall: React.FC<ButtonSmallProps> = ({
    source,
    to,
    from,
    onclick,
    dependencies,
    isCTA,
    dispatch
}): JSX.Element => {

    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onclick) onclick(e)
        if (to) {
            dispatch && dispatch({
                type: "MOVING",
                payload: { current: to as string, history: from as string }
            })
            navigate(to)
        }
    }

    return (
        <button onClick={handleClick} className={`Button-small ${isCTA && "cta"}`}>
            {dependencies ? (
                <>
                    {dependencies > 0 && (
                        <span className="Button-small__notification"></span>
                    )}
                </>
            ) : (
                null
            )}
            <img src={source} alt="" />
        </button>
    )
}