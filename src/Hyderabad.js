import "./searchItem.css";
import { useNavigate } from "react-router-dom";
const Hyderabad = () => {

  const navigate=useNavigate();
  function chpost1(e) {
    var a=2700;
    var name='Hyderabad'
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/494037909.webp?k=e75a3ca99f9d47b0015bb324f4b60de4499d6d547203a7eed0016c3d6017d29e&o="
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">HYDERABAD</h1>
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
            <button className="siCheckButton"onClick={chpost1} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/465969919.webp?k=9df9d8f3fa4e8116bd96609463f7ab5a8faee727ea409ff7b249b945ce72577a&o="
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
            <button className="siCheckButton"onClick={chpost2} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/452343898.webp?k=6a2637cc0a23bb8502f408ff57cafd49d91950397522d3566a757e98b788fb4e&o="
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
            <button className="siCheckButton"onClick={chpost3} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/427057195.webp?k=7a68e757792194f5fb05105bd1f0d94b0c1e76465a622f8036b8c3e59501008f&o="
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
            <button className="siCheckButton"onClick={chpost4} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/495488455.webp?k=7ed93401ec71bb5d6457614f79ab166612aebea7baf1ff5527467169a7e49882&o="
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
            <button className="siCheckButton"onClick={chpost5} >See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/43310573.webp?k=f6d4385105d402982874a0173ac3a3564b891647a85ade66947eeb9812272a2f&o="
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
            <button className="siCheckButton"onClick={chpost6} >See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hyderabad;
