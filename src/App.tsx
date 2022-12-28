import Nav from "./Components/Nav"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home  from "./Components/Home"
import Footer from "./Components/Footer"
import { useEffect} from "react"
import { Product } from "./Products"


const App = (): JSX.Element => {


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="flex flex-col h-[100vh]">
     <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="catalog" element={<Product/>}/>
      </Routes>
     </Router>
     <Footer/>
    </div>
  )
}

export default App
