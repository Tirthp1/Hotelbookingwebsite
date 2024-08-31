import React from 'react'
import './Account.css'
import { useLocation,useNavigate } from 'react-router-dom'
import IMG from './avatar.png'

function Account() {
    const location=useLocation()
    const navigate=useNavigate()

    function chsub(){
        navigate('/')
    }
  return (
    <>
      <div class="container_b">
        <div class="item_b">
            <h1 class="h1_b">MY Account</h1>
        </div>
        <div class="container_b1">
            <div class="item_b1">
                <h1 class="h1_b0">{location.state.name}</h1>
            </div>
            <div class="item_b1">
                <img src={IMG} alt="" class="im_b"/>
            </div>
        </div>
        <div class="item_b">
            <h1 class="h1_b1">EMAIL : {location.state.email}</h1>
        </div>
        <div class="item_b">
            <h1 class="h1_b2" onClick={chsub}>SignOUT</h1>
        </div>
        <div class='item_b3'></div>
    </div>
    </>
  )
}

export default Account


