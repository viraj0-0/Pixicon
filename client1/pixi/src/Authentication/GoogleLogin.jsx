
// client1/pixi/src/Authentication/GoogleLogin.jsx
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { _id, email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { userId: _id, email, name, image, token };
        localStorage.setItem("user-info", JSON.stringify(obj));

        console.log("result.data.user --- ", result.data.user);
        console.log(token);

        navigate("/");
      }
    } catch (err) {
      console.error("error while requesting google code :  ", err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Sign in to Pixi
        </h2>
        <button
          onClick={googleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-lg bg-white text-gray-800 font-medium shadow hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

