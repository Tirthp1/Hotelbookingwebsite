import React from 'react'
import './HEADER2.css'
import { useNavigate } from 'react-router-dom'

function HEADER2() {
  const navigate=useNavigate();
  function signin(){
    alert('you clicked signin button')
    navigate('/login');
  }
  return (
    <>
    <div className="hecon1">
        <div className="i1a1">
            <h1 className="h11">A lifetime of discounts? It's Genius.</h1>
        </div>
        <div className="i1b1">
            <h4 className="h41">Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account</h4>
        </div>
        <div className="i1c1">
            <button className="btn_1" onClick={signin}>SIGNIN/REGISTER</button>
        </div>
    </div>
    </>
  )
}

export default HEADER2;