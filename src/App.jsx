import React, { useRef, useState } from 'react'

const App = () => {

  const [show,setShow] = useState(false)
  let handleShow = () => {
    setShow(!show)
    console.log(show);
    
  }

  let showRef = useRef(null)
  let handleShowRef = () => {
    if(showRef.current.style.display === "none"){
      showRef.current.style.display = "block"
    }else{
      showRef.current.style.display = "none"
    }
  }



  console.log("Rendering");
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300 p-10">

  <div className="w-[800px] backdrop-blur-lg bg-white/40 shadow-2xl rounded-2xl p-8 flex justify-between gap-8 border border-white/30">

    {/* LEFT - useState toggle */}
    <div className="w-1/2 border-r border-white/40 pr-6 text-center">
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">useState Toggle</h2>

      <button 
        onClick={handleShow}
        className="bg-gradient-to-r from-amber-500 to-orange-500 
        hover:scale-105 transform transition-all duration-300
        text-white font-semibold px-6 py-2 rounded-full shadow-lg"
      >
        Show Menu
      </button>

      <ul className={`mt-6 space-y-1 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <li className="hover:bg-white/60 p-2 rounded-lg transition">
          <a href="#" className="font-medium text-gray-700">🚀 Service</a>
        </li>
        <li className="hover:bg-white/60 p-2 rounded-lg transition">
          <a href="#" className="font-medium text-gray-700">📝 Blog</a>
        </li>
        <li className="hover:bg-white/60 p-2 rounded-lg transition">
          <a href="#" className="font-medium text-gray-700">📞 Contact</a>
        </li>
      </ul>

    </div>

    {/* RIGHT - useRef toggle */}
    <div className="w-1/2 text-center pl-6">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">useRef Toggle</h2>

      <button 
        onClick={handleShowRef}
        className="bg-gradient-to-r from-orange-500 to-red-500 
        hover:scale-105 transform transition-all duration-300
        text-white font-semibold px-6 py-2 rounded-full shadow-lg"
      >
        Show Menu
      </button>

      <ul ref={showRef} style={{ display:"none" }}
        className="mt-6 space-y-1 transition-all duration-500"
      >
        <li className="hover:bg-white/60 p-2 rounded-lg transition">
          <a href="#" className="font-medium text-gray-700">🚀 Service</a>
        </li>
        <li className="hover:bg-white/60 p-2 rounded-lg transition">
          <a href="#" className="font-medium text-gray-700">📝 Blog</a>
        </li>
        <li className="hover:bg-white/60 p-2 rounded-lg transition">
          <a href="#" className="font-medium text-gray-700">📞 Contact</a>
        </li>
      </ul>

    </div>

  </div>

</div>
    </>
  )
}

export default App
