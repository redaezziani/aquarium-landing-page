import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


type Array = {
  name: string;
  link: string;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoved, setIsMoved] = useState(false);

  const getHScreen = () => {
    const hScreen = window.innerHeight;
    return hScreen;
  }

  useEffect(() => {
    const hScreen = getHScreen();
    if (hScreen < 768) {
      setIsMoved(true);
    }
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

  }
  ,[])
  const data: Array[] = [
    {
      name: "For Sale",
      link: "/sale",
    },
    {
      name: "For Rent",
      link: "/rent",
    },
    {
      name: "Sell",
      link: "/sale",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <AnimatePresence>
      <div className={`fixed z-40 bg-black/50 backdrop-blur-sm  w-full h-screen overflow-hidden ${isOpen?"flex ":"hidden"} `}></div>
      {
        isMoved ? (
          <AnimatePresence>
          <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100}}
          transition={{ duration: .5 }}

          className={`w-full overflow-hidden  md:w-[74%] flex-wrap  flex z-50   top-0 justify-between items-center  fixed bg-black/50 py-2 px-4 rounded-md ${isOpen?" ":""}`}>
          <div className="nav-left-side order-1 flex justify-center items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
                fill="#FA2646"
              />
            </svg>
            <Link
            to={"/"}

            >
            <p className={` text-lg text-white font-semibold`}>FrazProp.</p>
            </Link>
          </div>
          {
            isOpen ? (
              <div
              className={`Links ${isOpen?"flex flex-col w-full mt-5 justify-start items-start ":"hidden"} gap-6 order-3  `}
              >
               <AnimatePresence>
               {data.map((item, index) => {
                 return (
                  <motion.div
                  initial={{ x: -100, filter: "blur(10px)" }}
                  animate={{ x: 0, filter: "blur(0px)" }}
                  exit={{ x: -100, filter: "blur(10px)" }}
                  transition={{ duration: .5 , type: "spring", stiffness: 260, damping: 20 , delay: index/10}}
                  
                   key={index}
                  >
                    
                   <Link
                     
                     to={item.link}
                     className={` text-sm hover:text-red-600   cursor-pointer  text-white`}
                     key={index}
                   >
                     {item.name}
                   </Link>
                   </motion.div>
                 );
               })}
               </AnimatePresence>
             </div>
            ):""
          }

          
          <div className={` gap-3 justify-center items-center lg:order-3  hidden lg:flex  `}>
         <Link
         to={"/login"}
         >
         <button className=" bg-red-500 text-white rounded-[10px] px-4 py-2 text-sm font-semibold">
            Login
          </button>
         </Link>
          <Link
          to={"/signup"}
          >
          <button className=" border-2 border-red-500 text-red-500 rounded-[10px] px-4 py-1.5 text-sm font-semibold">
            SignUp
          </button></Link>
          </div>
          <motion.svg
          className={`flex order-2 lg:hidden  text-red-500  w-9 h-9 cursor-pointer ${isOpen? " border border-white/50 rounded-md p-2":""}	`}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: .5 , type: "spring", stiffness: 260, damping: 20 }}
          onAuxClick={toggle}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          onClick={toggle}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </motion.svg>
    
        </motion.nav>
        </AnimatePresence>
        )
        :(
          
          <motion.nav className={`w-full  md:w-[74%] py-3 flex z-50   top-0 justify-between items-center absolute}`}>
          <div className="nav-left-side flex justify-center items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
                fill="#FA2646"
              />
            </svg>
            <Link
            to={"/"}
            >
            <p className={` text-lg  
                    text-slate-800
                  font-semibold`}>FrazProp.</p>
            </Link>
          </div>
          <div className="Links flex gap-6 justify-center items-center">
            {data.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className={`text-slate-500 text-sm hover:text-red-600  cursor-pointer 
                    
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          <div className={` gap-3 justify-center items-center hidden lg:flex  `}>
          <button className=" bg-red-500 text-white rounded-[10px] px-4 py-2 text-sm font-semibold">
            Login
          </button>
          <button className=" border-2 border-red-500 text-red-500 rounded-[10px] px-4 py-1.5 text-sm font-semibold">
            SignUp
          </button>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" flex lg:hidden  text-red-500  w-5 h-5 cursor-pointer	" onClick={toggle}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
    
        </motion.nav>
        )
      }
    </AnimatePresence>
  );
};

export default NavBar;
