//client1/pixi/src/Authentication/api.js 
import axios from "axios";

const api =axios.create({
    baseURL : 'https://pixicon-backend.onrender.com/auth'
})

export const googleAuth =(code)=> api.get(`/google?code=${code}`)     
