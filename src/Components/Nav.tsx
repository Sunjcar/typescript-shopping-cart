import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="flex items-center justify-around text-white min-h-10 bg-neutral-800">
      <div className="flex items-center gap-4 pl-8">
        <img src="https://img.icons8.com/clouds/100/null/store-front.png" alt="store"/>
        <h1 className="text-3xl font-press-start">E-STORE</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link to='/' >
          <h1 className="hover:-translate-y-1 hover:scale-110">Home</h1>
        </Link>
        <Link to='catalog'>
          <h1 className=" hover:-translate-y-1 hover:scale-110">Products</h1>
        </Link>
        <Link to='shopping-cart'>
          <AiOutlineShoppingCart className="text-3xl"/>
        </Link>
      </div>
    </div>
  )
}

export default Nav
