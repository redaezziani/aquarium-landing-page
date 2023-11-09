
type Array = {
    name:string,
    link:string
}




const NavBar = () => {
    const data:Array[] = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Contact",
            link:"/contact"
        },
    ]
    
  return (
    <nav
    className="w-full md:w-[70%] py-3 flex fixed bg-white top-0 justify-between items-center"
    >
        <div className="nav-left-side">
            <p className=" text-lg text-slate-800 font-semibold">pegasus</p>
        </div>
        <div className="Links flex gap-2 justify-center items-center">
            {
                data.map((item,index)=>{
                    return(
                        <a
                        href={item.link}
                        className="text-slate-500 text-sm "
                        key={index}
                        >
                            {item.name}
                        </a>
                    )
                })
            }
        </div>
    </nav>
  )
}

export default NavBar