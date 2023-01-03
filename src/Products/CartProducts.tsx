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
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id: id, quantity: Number(e.target.value) }
    })
  }

  return (
    <div className="flex items-center w-full gap-4">
      <div className="flex gap-4 md:w-[30rem]">
        <img className='flex w-[10rem] h-[10rem] rounded-xl' src={img} alt={title} />
      </div>

        <div>
          <h2 className='flex-wrap w-[5rem] md:flex-nowrap md:w-[30rem]' >{title}</h2>
          <div className='flex w-2 gap-2'>
            <p>{quantity}</p>
          </div>
        </div>
        <p className='flex justify-end'>${price * quantity}</p>
        <select defaultValue={quantity} onChange={(e) => handleChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
 
      <button onClick={() => dispatch({ type: "REMOVE", payload: id })}><FaTrash /></button>
    </div>
  )
}