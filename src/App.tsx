import Nav from "./Components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import {Catalog} from "./Components/Catalog"
import { Product } from "./Products"


const App = (): JSX.Element => {

  return (
      <div className="flex flex-col h-[100vh]">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Product/>} />
          </Routes>
        <Footer />
      </div>
  )
}

export default App
