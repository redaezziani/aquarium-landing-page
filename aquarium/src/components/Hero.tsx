import base from '../assets/base.png'
const Hero = () => {
  return (
    <div
    className="w-full  overflow-hidden relative bg-[#F1F1F1] min-h-[86vh] flex justify-center items-center"
    >
        <img src={base}
        className="w-[51.263rem] -z-1  absolute right-0 bottom-0 "
        alt="base" />
        <div className=" w-[74%] z-10 flex justify-start items-start gap-3 flex-col">
          <h1
          className='text-[#1D1D1D] w-96 font-bold text-4xl '
          >
          Turning Your <i>Dreams </i> Into Reality.
          </h1>
          <p
          className=' text-slate-800 w-96 font-normal'
          >
          Committed to Crafting Your Homeownership Dreams
          Into Vibrant, Lasting Realities Through Unwavering
          Dedication and Expertise.
          </p>
          <div className="flex mt-7 flex-col justify-start items-start">
            <div className="flex">
              <button
              className='bg-[#FA2646] text-white rounded-tl-xl px-3 py-2  text-sm font-normal'
              >
                Buy
              </button>
              <button
              className='text-[#FA2646] bg-white rounded-tr-xl px-3 py-2  text-sm font-normal'
              >
                Rent
              </button>
            </div>
            <div className="flex p-2 rounded-md  justify-start items-center gap-2 w-72  bg-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27" fill="none">
             <path d="M8.99664 25.8335C1.4085 15.0445 0 13.9372 0 9.97212C0 4.54077 4.48928 0.137817 10.0271 0.137817C15.565 0.137817 20.0543 4.54077 20.0543 9.97212C20.0543 13.9372 18.6458 15.0445 11.0576 25.8335C10.5597 26.539 9.49455 26.539 8.99664 25.8335ZM10.0271 14.0697C12.3346 14.0697 14.2051 12.2352 14.2051 9.97212C14.2051 7.70905 12.3346 5.87449 10.0271 5.87449C7.71969 5.87449 5.84916 7.70905 5.84916 9.97212C5.84916 12.2352 7.71969 14.0697 10.0271 14.0697Z" fill="#FA2646"/>
             </svg>
              <input
              className='w-full h-10 text-slate-600 focus:outline-none  text-sm font-normal'
              placeholder='Enter your email address'
              />
              <button
              className='bg-[#FA2646] shadow-sm shadow-red-500 rounded-[10px] text-white px-3 py-2  text-sm font-normal'
              >
                Search
              </button>

            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Hero