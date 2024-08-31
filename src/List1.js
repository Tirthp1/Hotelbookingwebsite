import "./list.css";
import Navbar2A from "./NAVBAR2A";
import Header from "./HEADER";
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./SearchItem";
import Mumbai from "./Mumbai";
import Delhi from "./Delhi";
import Ahmedabad from "./Ahmedabad";
import Kolkata from "./Kolkata";
import Banglore from "./Banglore";
import Hyderabad from "./Hyderabad";


const List1 = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const list1a=['MUMBAI','mumbai','delhi','ahmedabad','kolkata','banglore','hyderabad','DELHI','AHMEDABAD','KOLKATA','BANGLORE','HYDERABAD','']

  const handleSearch = () => {
    navigate("/hotels1", { state: { destination, date, options } });
  };

  return (
    <div>
      <Navbar2A/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" onChange={(e) => setDestination(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch} className="btn_a1">Search</button>
          </div>
          <div className="listResult">
           {
            list1a.map((k)=>{
              if(location.state.destination===k || location.state.destination===k){
                if(location.state.destination==='mumbai' || location.state.destination==='MUMBAI'){
                  return(
                    <Mumbai></Mumbai>
                  )
                }
                else if(location.state.destination==='ahmedabad' || location.state.destination==='AHMEDABAD'){
                  return(<>
                    <Ahmedabad></Ahmedabad>
                    </>
                  )
                }
                else if(location.state.destination==='delhi' || location.state.destination==='DELHI'){
                  return(
                    <Delhi></Delhi>
                  )
                }
                else if(location.state.destination==='kolkata' || location.state.destination==='KOLKATA'){
                  return(
                    <Kolkata></Kolkata>
                  )
                }
                else if(location.state.destination==='hyderabad' || location.state.destination==='HYDERABAD'){
                  return(
                    <Hyderabad></Hyderabad>
                  )
                }
                else if(location.state.destination==='banglore' || location.state.destination==='BANGLORE'){
                  return(
                    <Banglore></Banglore>
                  )
                }
                else{
                  return(
                    <SearchItem></SearchItem>
                  )
                }
              }
            })
          } 
          
          
          
            {/* <SearchItem /> */}
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List1;
