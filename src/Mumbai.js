import React from 'react'
import { useNavigate } from 'react-router-dom';
function Mumbai() {
  const navigate=useNavigate();
  function chpost1(e) {
    var a=2700;
    var name='MUMBAI'
    navigate('/post',{state:{price:a,name:name}})
  }
  function chpost2(e) {
    var a=18450;
    var name='Fairfield by Marriott AhmedabadOpens in new window'
    navigate('/post',{state:{price:a,name:name}})
  }
  function chpost3(e) {
    var a=2200;
    var name='Surya Villas'
    navigate('/post',{state:{price:a,name:name}})
  }
  function chpost4(e) {
    var a=23300
    var name='Four Points by Sheraton Ahmedabad'
    navigate('/post',{state:{price:a,name:name}})
  }
  function chpost5(e) {
    var a=20628
    var name='ARTILLA INN'
    navigate('/post',{state:{price:a,name:name}})
  }
  function chpost6(e) {
    var a=3512
    var name='ABC'
    navigate('/post',{state:{price:a,name:name}})
  }
  return (
    <>
    <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/472130995.webp?k=de5b44fa81b7ea481c425d89b22624f384c154698fab585708ea8538623338ea&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Mumbai</h1>
          <span className="siDistance">3.9km from center</span>
          <span className="siTaxiOp">Travel Sustainable Level 2</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Deluxe Room - 1 large double bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>VERY GOOD</span>
            <button>8.4</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹2700</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={chpost1} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/476599358.webp?k=69249131424afb4dc643ab585dd28929b00120118efddf54ae7d15d0df3090c7&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Fairfield by Marriott AhmedabadOpens in new window</h1>
          <span className="siDistance">3.5km from center</span>
          <span className="siTaxiOp">Travel Sustainable Level 2</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
          Superior Room,1 Queen Bed, Guest room, 1 Queen, City view
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>GOOD</span>
            <button>7.0</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹18450</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={chpost2} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/19026033.webp?k=56f3d6228314b1df928c4a16ad59d4d99f3776cae6642001fc7b753dcc0ce424&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Surya Villas</h1>
          <span className="siDistance">3.6km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
           Budget Double Room
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>GOOD</span>
            <button>6.5</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹2200</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={chpost3} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/449946773.webp?k=d34550dc378bacdd44c483905ae7653cf58baf00254ed6e5722974e42de1343a&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Four Points by Sheraton Ahmedabad</h1>
          <span className="siDistance">1.2km from center</span>
          <span className="siTaxiOp">Travel Sustainable Level 2</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
          Superior King Room 1 extra-large double bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>VERY GOOD</span>
            <button>8.2</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹23300</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={chpost4} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/361061113.webp?k=3332d82055beea44a9fd401095ac7548b1edf637c68a68aacb4c87096f89fe8f&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">ARTILLA INN</h1>
          <span className="siDistance">0.8km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
          King Room with Balcony 1 extra-large double bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>VERY GOOD</span>
            <button>8.2</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹20628</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={chpost5} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/234812576.webp?k=4609253ac52bd24975e2cd2291e7475ac3c1fb5a277190e9f25135aacf33abb3&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Collection O Hotel Previliege ViewOpens in new window</h1>
          <span className="siDistance">8.1km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
           Classic Triple Room 1 large double bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Exceptional</span>
            <button>10</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹3512</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={chpost6} >See availability</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mumbai