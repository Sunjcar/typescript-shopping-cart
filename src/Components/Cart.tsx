
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ActionInterface, PageProps } from "../Interfaces/globalTypes";
import { CartProduct } from "../Products/CartProducts";
import { ITotalAmount, totalAmountInitial } from "../Products/types";
import { Button } from "../Utilities/Button";




export const Cart = ({ state, dispatch }: PageProps) => {
    const { shoppingCart } = state
    const [totalAmount, setTotalAmount] = useState<ITotalAmount>(totalAmountInitial)

    useEffect(() => {

        if (shoppingCart.length) {
            let total = 0;

            shoppingCart.forEach(product => {
                total += product.price * (product.quantity as number)
            })

            setTotalAmount({
                total: Math.round(total)
            })
        }
    }, [shoppingCart])

    return (
        <section className="Cart">
            {shoppingCart.length ? (
                <section className="flex flex-col">
                    <article className="Cart__products">
                        {shoppingCart.map(product => (
                            <CartProduct
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                quantity={product.quantity as number}
                                img={product.image}
                                dispatch={dispatch as React.Dispatch<ActionInterface>}
                                id={product.id}
                            />
                        ))}
                    </article>

                    <article className="Cart__info">
                        <div className="Cart__total">
                            <div className="flex flex-col gap-8 items-end pr-[15.5rem]">
                                <h2>Total: ${totalAmount.total}</h2>
                                <button className="relative flex items-center justify-start p-4 mb-4 overflow-hidden transition-all bg-[#1da1f2] hover:bg-white group">
                                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="z-10 w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                                        Check-Out
                                    </span>
                                </button>
                            </div>
                        </div>
                    </article>
                </section>
            ) : (
                <span className="Cart__msg">The cart is empty</span>
            )}
        </section>
    )
}