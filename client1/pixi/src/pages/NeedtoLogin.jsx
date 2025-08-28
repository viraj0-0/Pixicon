// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// export default function NeedtoLogin() {
//     const navigate =useNavigate();
//   return (
//     <div className='text-3xl font-bold underline bg-amber-50 text-cyan-800'>NeedtoLogin
//         <button className='text-white border-2' onClick={()=>navigate('/login')}>
//             login
//         </button>
//     </div>
//   )
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

export default function NeedtoLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-black/30 backdrop-blur-xl shadow-2xl p-6 sm:p-8 text-white flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
            <Lock size={20} />
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold">Login required</h1>
        </div>

        <p className="text-white/70 mb-6 text-center">
          Please sign in to save icons, sync your favorites, and access your
          workspace across devices.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={() => navigate("/login")}
            className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3
                       bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400
                       shadow-lg shadow-purple-500/30 transition-colors font-semibold"
          >
            Login
          </button>

          <button
            onClick={() => navigate(-2)}
            className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3
                       bg-white/10 hover:bg-white/20 border border-white/10
                       transition-colors"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
