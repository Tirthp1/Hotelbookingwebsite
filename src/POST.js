import React, { useState } from 'react'
import './POST.css'
import I1 from './i1.jpg';
import I2 from './i2.jpg';
import I3 from './i3.jpg';
import I4 from './i4.jpg';
import I5 from './i5.webp';
import I6 from './i6.jpg';
import N from './NAVBAR2A';
import { useLocation, useNavigate } from 'react-router-dom';
function POST() {
  const location = useLocation();
  const navigate = useNavigate();
  const a = location.state.price;

  const p = ['show']

  const [h, seth] = useState(0);
  const [s, sets] = useState('hide');

  function chnhand(e) {
    if (e.target.value == 'hide') {
      sets('hide');
    }
    else {
      seth(e.target.value);
      sets('show')
    }

  }


  function post2() {
    navigate('/post1', { state: { 'h': h } })
  }
  return (
    <>
      <N></N>
      <div class="container_ba1">
        <h2 className='h1_ba1'>{location.state.name}</h2>
        <div class="container_ba12">
          <div class="item_ba12">
            <img src={I1} alt="error" class="f1" />
          </div>
          <div class="item_ba12">
            <img src={I2} alt="error" class="f1" />
          </div>
          <div class="item _ba12">
            <img src={I3} alt="error" class="f1" />
          </div>
          <div class="item _ba12">
          </div>
        </div>
        <div class="container_ba12">
          <div class="item_ba12">
            <img src={I4} alt="error" class="f1" />
          </div>
          <div class="item_ba12">
            <img src={I5} alt="error" class="f1" />
          </div>
          <div class="item _ba12">
            <img src={I6} alt="error" class="f1" />
          </div>
          <div class="item _ba12">
          </div>
        </div>

        <div class="container_ba2">
          <div class="container_ba3">
            <p class="p_b1">You're eligible for a Genius discount at ARTILLA INN! To save at this property, all you
              have to do is sign in.

              Set in Ahmedabad, 5.6 km from IIM, ARTILLA INN offers accommodation with a garden, free private
              parking, a terrace and a restaurant. This 4-star hotel offers an ATM and a business centre. The
              accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi
              throughout the property.

              The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a
              minibar, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At ARTILLA INN
              all rooms have bed linen and towels.

              A vegetarian breakfast is available every morning at the accommodation.

              Popular points of interest near ARTILLA INN include British Council Library, Nehru Bridge and Manek
              Chowk. The nearest airport is Sardar Vallabhbhai Patel International Airport, 9 km from the hotel.

              Solo travellers particularly like the location — they rated it 8.8 for a one-person stay.</p>

            <h3 class="h_b1">ARTILLA INN has been welcoming Booking.com guests since 31 Aug 2019.</h3>
            <h3 class="h_b2">Most popular facilities</h3>
            <div class="container_ba4">
              <div class="item_b2">= Room Service</div>
              <div class="item_b2">= Concierge service</div>
              <div class="item_b2">= Garden</div>
              <div class="item_b2">= 24-hour front desk</div>
              <div class="item_b2">= Laundry</div>
              <div class="item_b2">= Business centre</div>
              <div class="item_b2">= Non-smoking rooms</div>
              <div class="item_b2">= 24-hour security</div>
              <div class="item_b2">= Airport shuttle</div>
              <div class="item_b2">= Lockers</div>
            </div>

          </div>
          <div class="container_ba5">
            <h2 class="h_b3">Property highlights</h2>
            <h3 class="h_b4">Perfect for a 3-night stay!</h3>
            <p class="p_b2">Top location: Highly rated by recent guests (8.8)</p>
            <p class="p_b3">Popular with solo travellers</p>
            <h3 class="h_b5">Breakfast info</h3>
            <p class="p_b4">Vegetarian</p>
            <h3 class="h_b6">Rooms with:</h3>
            <p class="p_b5">City view</p>
            <p class="p_b6">River view</p>
            <p class="p_b7">Free private parking available at the hotel</p>
            <button class='btn__p1' onClick={post2}>Reserve</button>

          </div>
        </div>
        <div class="container_ba6">
          <h2 className='h1_ba1'>Availability</h2>
          <table class="table" border="4">
            <tr>
              <th>RoomType</th>
              <th>Sleeps</th>
              <th>PriceFor10Nights</th>
              <th>YourChoices</th>
              <th>Select Rooms</th>
              <th></th>
            </tr>
            <tr>
              <td rowspan="2"></td>
              <td>2</td>
              <td><b>₹ {a}</b><br></br>+₹ 2,011 taxes and charges</td>
              <td>Breakfast ₹ 150 (optional)<br></br>
                <b>Free cancellation</b> before 18:00 on 9 October 2023<br></br>
                <b>No prepayment needed</b> – pay at the property
              </td>
              <td>
                <select class="sb_1" onChange={chnhand}>
                  <option value="hide">0</option>
                  <option value={a + 2011}>1 (₹ {a + 2011})</option>
                  <option value={(a * 2) + 2011}>2 (₹ {(a * 2) + 2011})</option>
                  <option value={(a * 3) + 2011}>3 (₹ {(a * 3) + 2011})</option>
                  <option value={(a * 4) + 2011}>4 (₹ {(a * 4) + 2011})</option>
                  <option value={(a * 5) + 2011}>5 (₹ {(a * 5) + 2011})</option>
                  <option value={(a * 6) + 2011}>6 (₹ {(a * 6) + 2011})</option>
                </select>
              </td>
              <td rowspan='2'>
                {
                  p.map((a) => {
                    if (s === 'hide') {
                      return (<></>)
                    }
                    else {
                      return (<>
                        <h1 style={{ textAlign: 'center' }}>Total Amount &nbsp; </h1>
                        <h3 style={{ textAlign: 'center' }}>{h}</h3>
                        <button style={{ marginLeft: '105px', marginTop: '20px' }} onClick={post2}>Reserve</button>
                      </>)
                    }
                  })
                }
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td><b>₹ {a + 2000}</b><br></br>+₹ 7,283 taxes and charges</td>
              <td>Breakfast ₹ 150 (optional)<br></br>
                <b>Free cancellation</b> before 18:00 on 9 October 2023<br></br>
                <b>No prepayment needed</b> – pay at the property
              </td>
              <td>
                <select class="sb_1" onChange={chnhand}>
                  <option value="hide" >0</option>
                  <option value={((a + 2000) * 1) + 7283}>1 (₹ {((a + 2000) * 1) + 7283})</option>
                  <option value={((a + 2000) * 2) + 7283}>2 (₹ {((a + 2000) * 2) + 7283})</option>
                  <option value={((a + 2000) * 3) + 7283}>3 (₹ {((a + 2000) * 3) + 7283})</option>
                  <option value={((a + 2000) * 4) + 7283}>4 (₹ {((a + 2000) * 4) + 7283})</option>
                  <option value={((a + 2000) * 5) + 7283}>5 (₹ {((a + 2000) * 5) + 7283})</option>
                  <option value={((a + 2000) * 6) + 7283}>6 (₹ {((a + 2000) * 6) + 7283})</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div class="container_ba7">
          <h3 className='h3_s1'><b>Limited supply in Ahmedabad for your dates :</b> 3 three-star hotels like this are already
            unavailable on our site</h3>
          <h3 className='h3_s2'><b>No credit card needed to book.</b> We'll send you an email confirming your reservation.</h3>
        </div>

        <h1 class="h1_ba1">Hotel surroundings *</h1>
        <div class="container_ba8">
          <div class="item_b3s">
            <h3 className='h3as'>What's nearby</h3>
            <p className='p1d_a'>AUDA garden &nbsp; 250 m</p>
            <p className='p1d_a'>Uday park &nbsp 450 m</p>
            <p className='p1d_a'>Adventure park &nbsp 650 m</p>
            <p className='p1d_a'>GMDC Ground &nbsp 700 m</p>
            <p className='p1d_a'>Jalsa Party Plot &nbsp 1.6 km</p>
            <p className='p1d_a'>Lion Sharad Mehta Garden &nbsp 1.7 km</p>
            <p className='p1d_a'>vikram park &nbsp 2.1 km</p>
            <p className='p1d_a'>AUDA Garden &nbsp 2.1 km</p>
            <p className='p1d_a'>Prahladbhai Patel joggers park &nbsp 2.4 km</p>
            <p className='p1d_a'>Samarpan Paltry Plots &nbsp 2.5 km</p>
          </div>
          <div class="item_b3s">
            <h3 className='h3as'>Restaurants & cafes</h3>
            <p className='p1d_a'>Restaurant Subway &nbsp; 200 m</p>
            <p className='p1d_a'>RestaurantBarbeque Nation &nbsp; 500 m</p>
            <p className='p1d_a'>Cafe/barUpper crust cafe &nbsp;550 m</p>
            <h3 className='h3as'>Top attractions</h3>
            <p className='p1d_a'>Nehru Bridge &nbsp 5 km</p>
            <p className='p1d_a'>Sabarmati Riverfront &nbsp 5 km</p>
            <p className='p1d_a'>Manek Chowk $nbsp 6 km</p>
          </div>
          <div class="item_b3s">
            <h3 className='h3as'>Public transport</h3>
            <p className='p1d_a'>Chandlodiya &nbsp; 3.6 km</p>
            <p className='p1d_a'>TrainAmbli Road &nbsp; 4 km</p>
          </div>
        </div>
        <h1 class="h1_ba1">Facilities of Hotel Royal Villa</h1>
        <div class="container_ba10">
          <p className='p1d_as'>Airport shuttle (free)</p>
          <p className='p1d_as'>Non-smoking rooms</p>
          <p className='p1d_as'>Room service</p>
          <p className='p1d_as'>Free parking</p>
          <p className='p1d_as'>Free WiFi</p>
          <p className='p1d_as'>Family rooms</p>
          <p className='p1d_as'>24-hour front desk</p>
          <p className='p1d_as'>Breakfast</p>
        </div>
        <div class="container_ba9">
          <div class="item_b4">
            <h3 className='h3as'>Bathroom</h3>
            <p className='p1d_a'>Toilet paper</p>
            <p className='p1d_a'>Towels</p>
            <p className='p1d_a'>Towels/sheets (extra fee)</p>
            <p className='p1d_a'>Private bathroom</p>
            <p className='p1d_a'>Toilet</p>
            <p className='p1d_a'>Free toiletries</p>
            <p className='p1d_a'>Bathrobe</p>
            <p className='p1d_a'>Shower</p>
            <h3 className='h3as'>Bedroom</h3>
            <p className='p1d_a'>Linen</p>
            <p className='p1d_a'>Wardrobe or closet</p>
            <h3 className='h3as'>Outdoors</h3>
            <p className='p1d_a'>Balcony</p>
            <h3 className='h3as'>Room Amenities</h3>
            <p className='p1d_a'>Clothes rack</p>
          </div>
          <div class="item_b4">
            <h3 className='h3as'>Living Area</h3>
            <p className='p1d_a'>Desk</p>
            <h3 className='h3as'>Media & Technology</h3>
            <p className='p1d_a'>Flat-screen TV</p>
            <h3 className='h3as'>Internet</h3>
            <p className='p1d_a'>WiFi is available in all areas and is free of charge.</p>
            <h3 className='h3as'>Parking</h3>
            <p className='p1d_a'>Free private parking is possible on site (reservation is not needed).<br></br>Electric vehicle
              charging station</p>
            <h3 className='h3as'>Services</h3>
            <p className='p1d_a'>Wake-up service</p>
            <p className='p1d_a'>Airport shuttle</p>
            <p className='p1d_a'>24-hour front desk</p>
            <p className='p1d_a'>Room service</p>
          </div>
          <div class="item_b4">
            <h3 className='h3as'>Safety & security</h3>
            <p className='p1d_a'>Safety deposit box</p>
            <h3 className='h3as'>General</h3>
            <p className='p1d_a'>Air conditioning</p>
            <p className='p1d_a'>Non-smoking throughout</p>
            <p className='p1d_a'>Heating</p>
            <p className='p1d_a'>Fan</p>
            <p className='p1d_a'>Family rooms</p>
            <p className='p1d_a'>Non-smoking rooms</p>
            <h3 className='h3as'>Languages spoken</h3>
            <p className='p1d_a'>English</p>
            <p className='p1d_a'>Hindi</p>
          </div>
        </div>
      </div>
      <div className='fk'></div>


    </>
  )
}

export default POST