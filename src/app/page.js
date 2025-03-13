"use client"

export default function Home() {

  const handleClick = ()=>{
    alert(`Clicked the button!`)
  }
  
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen bg-black text-white">
      <h2 className="text-sm text-gray-300 mb-5">Hola!</h2>

      <div className="relative flex items-center justify-center bg-[#2F1A6199] w-[200px] h-[200px] rounded-full">
        <div className="absolute w-32 h-32 rounded-full border border-purple-500 animate-ping"></div>
        <div className="absolute w-40 h-40 rounded-full border border-purple-700 animate-ping delay-200"></div>
        <div className="absolute w-48 h-48 rounded-full border border-purple-800 animate-ping delay-400"></div>

        {/* Bell Icon */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0"
            />
          </svg>
        </div>
      </div>

   
      <div className="text-center mt-8">
        <h1 className="text-xl font-bold">Lorem Ipsum...</h1>
        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet.</p>
      </div>

    
      <button
      onClick={handleClick}
        className="mt-6 px-6 py-3 border border-[#6434CE] bg-[#1D103A] rounded-lg transition cursor-pointer text-white z-50"
      >
        Send Notification
      </button>
    </div>
  );
}
