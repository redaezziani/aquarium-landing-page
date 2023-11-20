import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import NumberThing from "./components/NumberThing"
function App() {
  return (
    <div
    className="w-full  flex relative bg-white  justify-start items-center flex-col min-h-screen"
    >
      <NavBar/>
      <Hero/>
      
      <NumberThing/>
    </div>
  )
}

export default App
