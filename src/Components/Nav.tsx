import { Link } from "react-router-dom"
import { BsCartFill } from "react-icons/bs"
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import {  ctx } from "../Interfaces/globalTypes";



const Nav = () => {

const state = useContext(ctx)
let {shoppingCart, searching} = state

const searchDesktopRef = useRef<HTMLInputElement>(null)

useEffect(() => {
  if(searching && searchDesktopRef.current){
    searchDesktopRef.current.focus()
  } 
}, [searching])

  return (
    <div className="flex flex-wrap items-center justify-around w-[100vw] text-white min-h-10 bg-neutral-800">
      <div className="flex items-center justify-center gap-4 pl-2 ">
        <img src="https://img.icons8.com/clouds/100/null/store-front.png" alt="store" />
        <h1 className="text-3xl font-press-start">E-STORE</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to='/' >
          <h1 className="hover:-translate-y-1 hover:scale-110">Home</h1>
        </Link>
        <Link to='catalog'>
          <h1 className=" hover:-translate-y-1 hover:scale-110">Products</h1>
        </Link>
        <Link to='about'>
          <h1 className=" hover:-translate-y-1 hover:scale-110">About</h1>
        </Link>
      </div>
      <Link to='shopping-cart'>
          <div className='relative flex items-center justify-around w-20 gap-4 list-none cursor-pointer hover:-translate-y-1 hover:scale-110'>
            <li className='flex items-center justify-center p-4 font-bold text-black bg-white rounded-3xl '><BsCartFill/> 
            </li>
            {shoppingCart.length > 0 &&
              <span className='flex justify-center items-center
                    absolute left-0 bottom-0 
                    rounded-full w-1.2 h-1 
                    text-xs text-black font-bold bg-cyan-400 p-[.4rem]
                    '>
                {shoppingCart.length}
              </span>
            }
          </div>
        </Link>
    </div>
  )
}

export default Nav
