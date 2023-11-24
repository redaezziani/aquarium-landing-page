import  { motion} from "framer-motion"
import { useState, useEffect } from "react";
interface PopularResidenceProps {
    image: string;
    name: string;
    price: string;
    desc: string;
    rate: number;
    _id: string;
}

const PopularResidence = () => {
     const [data, setData] = useState<PopularResidenceProps[]>([]);


     const getResidence= async () => {
          const response = await fetch("http://localhost:8080/residences")
          const data = await response.json()
          setData(data)
      }
    const [Super , setSuper] = useState(0)

    const getTheSuper = () => {
      const max = Math.max.apply(
        Math,
        data.map(function (o) {
          return o.rate;
        })
      );
      const index = data.findIndex((item) => item.rate === max);
      setSuper(index)

    }
    
    useEffect(() => {
      getTheSuper()
      getResidence()
    }
    , [])

  return (
    <div className=" mt-24 p-2 w-[75%] flex flex-col justify-start items-start z-30">
      <h1 className="text-xl font-bold text-gray-800">Popular Residences</h1>
      <div
      
      className="grid mt-9  col-span-1 sm:col-span-2  md:grid-cols-4 gap-5 w-full">
        {data.map((item:any, index:number) => (
          <motion.div
            initial={{y:60, scale:0.8}}
            animate={{y:0, scale:1}}
            transition={{duration:0.5, delay:index * 0.1}}
            key={item._id}
            className="col-span-1 w-full flex flex-col gap-3 overflow-hidden "
          >
            <div className="relative w-full overflow-hidden rounded-lg ">
              <span
              className="absolute top-2 right-2 text-xs bg-white rounded-md  px-2 py-1 flex gap-1 items-center">
                <svg
                
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.45736 1.41109L6.1498 2.80741C6.24422 3.00179 6.49602 3.18823 6.70847 3.22393L7.96352 3.43418C8.76612 3.56905 8.95497 4.15614 8.37663 4.7353L7.40091 5.71908C7.23567 5.88568 7.14518 6.207 7.19633 6.43707L7.47567 7.6549C7.69599 8.61884 7.18846 8.99172 6.34258 8.48793L5.16622 7.7858C4.95376 7.65886 4.60361 7.65886 4.38722 7.7858L3.21085 8.48793C2.3689 8.99172 1.85744 8.61487 2.07776 7.6549L2.3571 6.43707C2.40824 6.207 2.31776 5.88568 2.15251 5.71908L1.1768 4.7353C0.60239 4.15614 0.787303 3.56905 1.58991 3.43418L2.84495 3.22393C3.05347 3.18823 3.30527 3.00179 3.39969 2.80741L4.09215 1.41109C4.46984 0.653418 5.0836 0.653418 5.45736 1.41109Z"
                    fill="#FFC107"

                  />
                </svg>
                <p
                className="text-xs  text-gray-400"
                >{item.rate}</p>
              </span>
              <img
                className="w-full aspect-square object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col px-4 gap-2">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <h4 className="text-sm font-medium line-clamp-1 text-gray-500">{item.desc}</h4>
              <div className="w-full flex justify-between items-center">
                <p className="text-sm font-bold text-gray-800 flex gap-1 items-center">
                  <span className="text-sm font-bold text-[#FA2646]">$</span>
                  {item.price}
                </p>
                <svg
                  className="cursor-pointer"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 15.5C31 6.944 24.056 -3.03532e-07 15.5 -6.77527e-07C6.944 -1.05152e-06 -3.03532e-07 6.944 -6.77527e-07 15.5C-1.05152e-06 24.056 6.944 31 15.5 31C24.056 31 31 24.056 31 15.5ZM15.4535 20.9715C15.221 20.739 15.1125 20.4445 15.1125 20.15C15.1125 19.8555 15.221 19.561 15.4535 19.3285L18.1195 16.6625L10.075 16.6625C9.4395 16.6625 8.9125 16.1355 8.9125 15.5C8.9125 14.8645 9.4395 14.3375 10.075 14.3375L18.1195 14.3375L15.4535 11.6715C15.004 11.222 15.004 10.478 15.4535 10.0285C15.903 9.579 16.647 9.579 17.0965 10.0285L21.7465 14.6785C22.196 15.128 22.196 15.872 21.7465 16.3215L17.0965 20.9715C16.647 21.421 15.903 21.421 15.4535 20.9715Z"
                    fill="#FA2646"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PopularResidence