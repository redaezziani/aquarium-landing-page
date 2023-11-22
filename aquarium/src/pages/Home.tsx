import Hero from "../components/Hero"
import NumberThing from "../components/NumberThing"
import PropertyType from "../components/PropertyType"
import PopularResidence from "../components/PopularResidence"
const Home = () => {
  return (
    <div
    className="w-full  flex relative bg-white  justify-start items-center flex-col gap-2"
    >
      <Hero/>
      <NumberThing/>
      <PropertyType/>
      <PopularResidence/>
    </div>
  )
}

export default Home