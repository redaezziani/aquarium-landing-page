function App() {
  return (
    <div
    className="w-full flex relative  justify-start items-center flex-col min-h-screen"
    >
      <nav
      className="w-full flex justify-between items-center text-white px-4 py-3"
      >
        <div className="logo">
          <p
          className='text-2xl font-bold'
          >
          Aquarium
          </p>
        </div>

        <div className="btns">
          <button
          className="min-w-[7rem] bg-emerald-500 text-white px-4 py-2 rounded-full"
          >
            Login 
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
