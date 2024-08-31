import "./searchItem.css";
import { useNavigate } from "react-router-dom";
const Delhi = () => {
  const navigate=useNavigate();
  function chpost1(e) {
    var a=2700;
    var name='DELHI'
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/466434204.webp?k=70bb935686d8f85c2ef2c900753026eb894154a51876119a649e87f177a525c7&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">DELHI</h1>
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
            <button className="siCheckButton" onClick={chpost1}>See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/491253763.webp?k=aff1ceeba56e2f396a07cd4e38e9aecdd8035cf086c6fe7c94fe3e7158a1d47e&o="
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
            <button className="siCheckButton" onClick={chpost2}>See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/419007718.webp?k=6a31039ffba3f2004c7efaf764ba06de6a304372eb74ac2364616cc8e7959784&o="
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
            <button className="siCheckButton" onClick={chpost3}>See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/455197765.webp?k=292dae71f9d31b32fae157790cf41a1899dc21dfa2ff3a316fdac43d8bd5245b&o="
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
            <button className="siCheckButton" onClick={chpost4}>See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/407883319.webp?k=df48da30d18a12184b505b3573d6d594c08d6cd7ac28898e2e38756970db0733&o="
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
            <button className="siCheckButton" onClick={chpost5}>See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/443266379.webp?k=ac86bad28b33e3f30b3219afc1ac690cb86e32e6a6bf33eac5462d2d6d65475a&o="
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
            <button className="siCheckButton" onClick={chpost6}>See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delhi;
