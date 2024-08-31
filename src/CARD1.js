import React from 'react'
import './CARD1.css'
// import IMG from './f1.png'
import M from './m1.jpg'
import D from './d1.jpg'
import A from './a1.jpg'
import { useNavigate } from 'react-router-dom'

function CARD1() {
  const navigate=useNavigate();
  function mumbai(props){
        
        navigate('/mumbai');
    }
    function delhi(props){
      
      navigate('/delhi');
  }
    function ahmedabad(props){
      
      navigate('/ahmedabad');
  }
  return (
    <>
    <div class="container_c1z">
        <div class="item_c1az" onClick={mumbai}>
            <img src={M} alt="error" class="f1_c1z"/>
            <div class="centered_c1az">MUMBAI</div>
        </div>
        <div class="item_c1az" onClick={delhi}>
            <img src={D} alt="error" class="f1_c1z"/>
            <div class="centered_c1az">DELHI</div>
        </div>
        <div class="item_c1az" onClick={ahmedabad}>
            <img src={A} alt="error" class="f1_c1z"/>
            <div class="centered_c1az">AHMEDABAD</div>
        </div>
    </div>
    </>
  )
}

export default CARD1