import "./searchItem.css";
import { useNavigate } from "react-router-dom";
const Kolkata = () => {
  const navigate=useNavigate();
  function chpost1(e) {
    var a=2700;
    var name='Kolkata'
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/476429479.webp?k=72d7827086b3810027f44f35bd1d5a439d453a9c89cef88b618aff7e4bae1756&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">KOLKATA</h1>
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/477689225.webp?k=71e194ccb5e3866d1c1cf1ee7c15ebeb832fec647006a85b7456d747a8f99078&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/465554643.webp?k=5949e00e4bc73dc18b5f96352f2012a50fdc5d7dc12bc2c57f3c32c1f7403826&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/491214104.webp?k=030e440433a3a6c0d3334bfe7405ab7c852bd715d937505fed5d7f2b90b4f418&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/375983712.webp?k=0c35bb1b9b9e2c3622ac25b5df6d74dd391cee1522ce5e9cd795616a93738090&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/356560361.webp?k=fe201618ff17c7ac4cae7f695e87e063237a35775e335d0a3c7ac6839394ab69&o="
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
  );
};

export default Kolkata;
