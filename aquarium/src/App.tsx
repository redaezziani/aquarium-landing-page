import NavBar from "./components/NavBar"

import { Route, Routes } from "react-router-dom"
// the real pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
function App() {
  return (
    <div
    className="w-full  flex relative bg-white  justify-start items-center flex-col min-h-screen"
    >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        
      </Routes>
    </div>
  )
}

export default App
