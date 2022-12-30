import Nav from "./Components/Nav"
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import { Product } from "./Products"
import { Details } from "./Products/Details"
import { useEffect, useReducer } from "react"
import { initialState, reducerFn } from "./Reducer"
import { ctx } from "./Interfaces/globalTypes"


const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducerFn, initialState)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch({ type: "ADD_PRODUCTS", payload: data }))
  }, [])
  return (
    <ctx.Provider value={state}>
      <div className="flex flex-col h-[100vh]">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Product />} />
          <Route path='products/:title' element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </ctx.Provider>
  )
}

export default App
