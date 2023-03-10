import Nav from "./Components/Nav"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import { Product } from "./Products"
import { Details } from "./Products/Details"
import { useEffect, useReducer, useState } from "react"
import { initialState, reducer } from "./Reducer"
import { ctx, StateInterface } from "./Interfaces/globalTypes"
import { Cart } from "./Components/Cart"
import { About } from "./Components/About"

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState())


  useEffect(() => {
    fetchProducts()
  }, [])


  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    dispatch({ type: "DISPLAY_PRODUCTS", payload: data })
  }

  return (
    <ctx.Provider value={state}>
      <div className="flex flex-col flex-1 min-h-[100vh]">
        <Nav />
        <Routes>
          <Route path="/typescript-shopping-cart" element={<Home />} />
          <Route path="catalog" element={<Product state={state as StateInterface}
            dispatch={dispatch}
            ctx={ctx} />} />
          <Route path='products/:title' element={<Details  
            state={state as StateInterface}
            dispatch={dispatch} />} />
          <Route path="/shopping-cart" element={<Cart state={state as StateInterface} dispatch={dispatch} />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </ctx.Provider>
  )
}

export default App
