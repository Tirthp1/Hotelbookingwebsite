import React from 'react';
import './FOOTER.css';
function FOOTER() {
  return (
    <>
    <div class="container_0">
        <div class="container_">
            <div class="item_1" >
                <a href="#" class="l1_a">Home</a><br></br>
                <a href="#" class="l1">About-us</a><br></br>
                <a href="#" class="l1">Service</a><br></br>
                <a href="#" class="l1">Rooms</a><br></br>
                <a href="#" class="l1">refear a friend</a><br></br>
                <a href="#" class="l1">Coustomer Services</a><br></br>
                <a href="#" class="l1">All contacts</a><br></br>
            </div>
            <div class="item_1">
                <a href="#" class="l1_a">HELP</a><br></br>
                <a href="#" class="l1">CONTACT US</a><br></br>
                <a href="#" class="l1">FAQ</a><br></br>
                <a href="#" class="l1">ACCESSIBILITY</a><br></br>
            </div>
            <div class="item_1">
                <a href="#" class="l1_a">ABOUT</a><br></br>
                <a href="#" class="l1">CONTACT US</a><br></br>
                <a href="#" class="l1">FAQ</a><br></br>
                <a href="#" class="l1">ACCESSIBILITY</a><br></br>
            </div>
            <div class="item_">
                <div class="container_1">
                    <div class="item_2">
                        <h1 class='h1b'>Hotel Booking</h1>
                        <p class='p1b'>
                            Sign up to get 15% off your first booking
                        </p>
                    </div>

                    <div class="item2">
                        <div class="container_2">
                            <div class="item_3">
                                <input type="text" placeholder="     Your email address"
                                     class="in"/>
                            </div>
                            <div class="item3">
                                <button
                                    class='btn0'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {/* <div class="item1">
                        <span className="container_3">
                            <i className="fas fa-bars"></i>
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
        <div class="container_4">
            <a class='a_2'>Copyright © 2022-2024 Supermarket Grocery <br></br>Supplies Pvt Ltd</a>
            <a class='a_1'>Terms of Service Privacy Policy</a>
        </div>
    </div>
    </>
  )
}

export default FOOTER;