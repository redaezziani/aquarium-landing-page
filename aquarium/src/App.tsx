import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import NumberThing from "./components/NumberThing"
import PropertyType from "./components/PropertyType"
import PopularResidence from "./components/PopularResidence"
function App() {
  return (
    <div
    className="w-full  flex relative bg-white  justify-start items-center flex-col min-h-screen"
    >
      <NavBar/>
      <Hero/>
      <NumberThing/>
      <PropertyType/>
      <PopularResidence/>
    </div>
  )
}

export default App
