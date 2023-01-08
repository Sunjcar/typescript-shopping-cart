import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { CartProps } from "./types";

export const CartProduct = ({
  title,
  price,
  quantity,
  img,
  dispatch,
  id,
}: CartProps): JSX.Element => {

  const handleAddToCart = () => {
    dispatch({
      type: "CHANGE_QUANTITY",
    payload:{id: id, quantity: quantity + 1}})
  }

  const handleRemoveFromCart = () => {
    if (quantity === 1) {
      dispatch({ type: "REMOVE", payload: id })
    } else {
      dispatch({
        type: "CHANGE_QUANTITY",
        payload: { id: id, quantity: quantity - 1 }
      })
    }
  }

  return (
    <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between flex-1 gap-4">
      <div className="flex gap-4 md:w-[30rem]">
        <img className='flex w-[5rem] h-[10rem] lg:w-[10rem] rounded-xl' src={img} alt={title} />
      </div>

      <div className="flex">
        <h2 className='flex-wrap w-[2rem] md:flex-nowrap md:w-[15rem]' >{title}</h2>
      </div>
      <button defaultValue={quantity} onClick={handleAddToCart} className='ml-2'>
        <AiOutlinePlus />
      </button>
      <h2 className="font-extrabold "> {quantity}</h2>
      <button defaultValue={quantity} onClick={handleRemoveFromCart}>
        <AiOutlineMinus />
      </button>
      <p className='flex justify-end'>${Math.round(price * quantity * 100)/100}</p>

      <button onClick={() => dispatch({ type: "REMOVE", payload: id })}><FaTrash /></button>
    </div>
     <hr></hr>
     </div>
    
  )
}