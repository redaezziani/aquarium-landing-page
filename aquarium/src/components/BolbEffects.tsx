import { useEffect, useState } from "react"

import {motion} from "framer-motion"


const BolbEffects = () => {
    const [posX, setPosX]=useState(0)
    const [posY, setPosY]=useState(0)

    const addBorderToTheTargetElement=(e)=>{
        e.target.style.border="1.5px solid black"
        e.target.style.padding=".5rem"
        e.target.style.borderRadius="5px"
        e.target.style.cursor="pointer"
        // add a dashed border to the target element
        e.target.style.borderStyle="dashed"
    }
    
    const getPosition=(e)=>{
        setPosX(e.clientX)
        setPosY(e.clientY)
    }

    useEffect(()=>{
    
    },[posX,posY])
  return (
    <motion.div
    drag={true}
    dragElastic={0.5}
    dragConstraints={{left:0,right:0,top:0,bottom:0}}
    // lets get the postion of the x 
    onDrag={(e)=>{
        setPosX(e.clientX)
        setPosY(e.clientY)
    }}
    onClick={(e)=>addBorderToTheTargetElement(e)}
    className="flex border-red-500 text-slate-800 mt-32 justify-start items-center flex-col gap-4 text-lg"
    >
        <motion.h2
        drag={true}
        dragElastic={0.5}
        dragConstraints={{left:0,right:0,top:0,bottom:0}}
        className=" text-3xl font-bold text-slate-900 capitalize"
        >
        pegasus is the best builder web site 
        </motion.h2>
        <motion.p
        drag={true}
        dragElastic={0.5}
        dragConstraints={{left:0,right:0,top:0,bottom:0}}
        className=" text-slate-500 text-sm"
        >
            drag and drop all the element in this web site just try it, just have fun 
        </motion.p>
        <div
        className=" mt-60 fixed"
        >
        {posX} {posY}
        </div>
    </motion.div>
  )
}

export default BolbEffects