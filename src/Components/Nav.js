import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="h-[15vh] flex items-center bg-slate-200 justify-around">
      <div className="flex items-center gap-4 pl-8">
        <img src="https://img.icons8.com/clouds/100/null/store-front.png" />
        <h1 className="text-3xl font-press-start">E-STORE</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link >
          <h1>Home</h1>
        </Link>
        <Link>
          <h1>Products</h1>
        </Link>
        <Link>
          <AiOutlineShoppingCart className="text-3xl"/>
        </Link>
      </div>
    </div>
  )
}

export default Nav
