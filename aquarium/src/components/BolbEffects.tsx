import { useEffect, useState } from "react"

import {motion} from "framer-motion"


const BolbEffects = () => {
    const [posX, setPosX]=useState(0)
    const [posY, setPosY]=useState(0)
    const color=[{
        bg:"bg-red-500",
        text:"text-red-500"
    },
    {
        bg:"bg-blue-500",
        text:"text-blue-500"
    },
    {
        bg:"bg-green-500",
        text:"text-green-500"
    },
    {
        bg:"bg-yellow-500",
        text:"text-yellow-500"
    },
    {
        bg:"bg-indigo-500",
        text:"text-indigo-500"
    },
    {
        bg:"bg-pink-500",
        text:"text-pink-500"
    },
    {
        bg:"bg-purple-500",
        text:"text-purple-500"
    },
    {
        bg:"bg-gray-500",
        text:"text-gray-500"
    },
    {
        bg:"bg-slate-500",
        text:"text-slate-500"
    },
    {
        bg:"bg-cyan-500",
        text:"text-cyan-500"
    },
    {
        bg:"bg-emerald-500",
        text:"text-emerald-500"
    },
    {
        bg:"bg-lime-500",
        text:"text-lime-500"
    },
    {
        bg:"bg-rose-500",
        text:"text-rose-500"
    },
    {
        bg:"bg-amber-500",
        text:"text-amber-500"
    },
    {
        bg:"bg-orange-500",
        text:"text-orange-500"
    },
    {
        bg:"bg-teal-500",
        text:"text-teal-500"
    },
    {
        bg:"bg-cyan-500",
        text:"text-cyan-500"
    },
    {
        bg:"bg-fuchsia-500",
        text:"text-fuchsia-500"
    },
    {
        bg:"bg-violet-500",
        text:"text-violet-500"
    },
    {
        bg:"bg-lightBlue-500",
        text:"text-lightBlue-500"
    }
] 

const color2=[
    "text-red-500/40",
    "text-blue-500/40",
    "text-green-500/40",
    "text-yellow-500/40",
    "text-indigo-500/40",
    "text-pink-500/40",
    "text-purple-500/40",
    "text-gray-500/40",
    "text-slate-500/40",
    "text-cyan-500/40",
    "text-emerald-500/40",
    "text-lime-500/40",
    "text-rose-500/40",
    "text-amber-500/40",
    "text-orange-500/40",
    "text-teal-500/40",
    "text-cyan-500/40",
    "text-fuchsia-500/40",
    "text-violet-500/40",
    "text-lightBlue-500/40"
]

    const addBorderToTheTargetElement=(e)=>{
        e.target.style.border="1.5px solid black"
        e.target.style.padding=".5rem"
        e.target.style.borderRadius="5px"
        e.target.style.cursor="pointer"
        e.target.style.borderStyle="dashed"
    }
    

    const [colorIndex, setColorIndex]=useState(0)
    const [colorIndex2, setColorIndex2]=useState(0)
    const changeColor=()=>{
        if(colorIndex===color.length-1){
            setColorIndex(0)
        }else{
            setColorIndex(colorIndex+1)
        }
    }

    const changeColor2=()=>{
        if(colorIndex2===color2.length-1){
            setColorIndex2(0)
        }else{
            setColorIndex2(colorIndex2+1)
        }
    }

    setTimeout(() => {
        changeColor2()
    }, 2000);


    setTimeout(() => {
        changeColor()
    }, 2000);

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
    className={`flex   mt-32 justify-start items-center flex-col gap-4 text-lg font-bold   ${color[colorIndex].text} p-4 rounded-xl`}
    >
        <motion.h2
        drag={true}
        dragElastic={0.5}
        dragConstraints={{left:0,right:0,top:0,bottom:0}}
        className=" text-3xl font-bold  capitalize"
        >
        pegasus is the best builder web site 
        </motion.h2>
        <motion.p
        drag={true}
        dragElastic={0.5}
        dragConstraints={{left:0,right:0,top:0,bottom:0}}
        className={` text-slate-500 text-sm font-bold  ${color2[colorIndex2]} p-4 rounded-xl`}
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