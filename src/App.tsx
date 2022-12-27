import Nav from "./Components/Nav"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home  from "./Components/Home"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="flex flex-col h-[100vh]">
     <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
     <Footer/>
    </div>
  )
}

export default App
