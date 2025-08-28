// client1/pixi/src/pages/NotFound.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate =useNavigate();
  return (
      <>
      <h1 className='text-white'> 404 NotFound</h1>
      <button className='text-white border-2' onClick={()=>navigate('/')}>go to home page</button>
      </>
    )
}