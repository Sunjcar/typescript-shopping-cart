import Nav from "./Components/Nav"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
     <Router>
      <Nav/>
     </Router>
    </div>
  )
}

export default App
