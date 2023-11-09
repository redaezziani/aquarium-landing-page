import BolbEffects from "./components/BolbEffects"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div
    className="w-full  flex relative bg-white  justify-start items-center flex-col min-h-screen"
    >
      <NavBar/>
      <BolbEffects/>
    </div>
  )
}

export default App
