//client1/pixi/src/App.jsx
import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
import { Route, Routes, Navigate} from 'react-router-dom';
import Browse from "./pages/Browse";
import Home from "./Pages/Home";
import Docs from "./pages/Docs";
import Create from "./pages/Create";
import Featured from "./pages/Featured";
import GoogleLogin from "./Authentication/GoogleLogin";
import NotFound from "./pages/NotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import NeedtoLogin from "./pages/NeedtoLogin";
import RefreshHandler from "./Authentication/RefrshHandler";
import { Toaster } from "react-hot-toast";
function App() {

  //login logout
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="845929867974-set726qkqtnhlc6083sog41uvo2b8aoj.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  };

  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/needtologin" />
  }

  return (
    <>


      <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/docs" element={<Docs />} />  d
        <Route path="/create" element={<PrivateRoute element={<Create/>}/>} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/needtologin" element={<NeedtoLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Toaster
        position="bottom-right"
        toastOptions={{
          className:
            "bg-white text-gray-900 text-lg px-6 py-4 rounded-xl shadow-lg min-w-[260px] flex items-center gap-3",
          success: {
            iconTheme: {
              primary: "#22c55e", // Tailwind green-500
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // Tailwind red-500
              secondary: "white",
            },
          },
        }}
      />
      {/* Other content can go here */}
    </>
  );
}

export default App;






