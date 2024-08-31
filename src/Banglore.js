import React from 'react'
import { useNavigate } from 'react-router-dom';
function Banglore() {
  const navigate=useNavigate();
  function chpost1(e) {
    var a=2700;
    var name='Bangolre'
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
    var name='BANGLORE'
    navigate('/post',{state:{price:a,name:name}})
  }
  return (
    <>
    <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/223496641.webp?k=ac8ff3baec098184e1870425150360e8d026253b59205bc4b2ba85138c629765&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Banglore</h1>
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/55666481.webp?k=0331bdec86bf62b8737524fe20dd2fd4e4d488afea2c7d8a48b555eb6f715e3e&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/451552244.webp?k=d75391b467fe6debcf584babf95b4eb216406312fba33a97c5a334dbe4c28600&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/482124163.webp?k=03b117a97bafb47b9aec68a3d75a49293c012b6885e762d8332be12f7145853e&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/456197000.webp?k=f734b60348a184f7ac04ec6cfe1e65e17472c74a1c876b5cea5fab926ab8bea5&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/490221597.webp?k=1d715986c81c1b26bd8a9df620ae40ac15f494ef59db545b8f2be4a2f9e71efe&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">BANGLORE</h1>
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

export default Banglore