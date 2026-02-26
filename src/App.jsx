import React, { useRef, useState } from 'react'

const App = () => {

  const [show,setShow] = useState(false)
  let handleShow = () => {
    setShow(!show)
    console.log(show);
    
  }

  let showRef = useRef(false)
  let handleShowRef = () => {
    if(showRef.current.style.display == "block"){
      showRef.current.style.display = "none"
    }else{
      showRef.current.style.display = "block"
    }
  }



  console.log("Rendering");
  
  return (
    <>
    {/* <div className="container py-3 bg-[#ddd] mt-20 flex justify-between h-40">
    
        <div className="left  w-[50%] border-r-2 text-center border-amber-300">
          <button className='bg-amber-500 font-semibold text-white px-4 py-2 rounded-md' onClick={handleShow}>ShowMenu</button>
          <ul className={show 
             ?
             "block" 
             : 
             "hidden"}>
            <li><a href="">Service</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="right text-center  w-[50%]">
          <button className='bg-amber-500 text-white px-4 py-2 rounded-md' onClick={handleShowRef}>ShowMenu</button>
          <ul ref={showRef} style={{ display:"none" }}>
            <li><a href="">Service</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
    </div> */}
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

      <ul className={`mt-6 space-y-3 transition-all duration-500 ${
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
        className="mt-6 space-y-3 opacity-0 transition-all duration-500"
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
