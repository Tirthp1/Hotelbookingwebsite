import React from 'react'
import './CARD2.css'
import H from './hotel.jpg'
import A from './apartments.png'
import C from './cabins.jpg'
import R from './resorts.jpg'
import V from './villa.jpg'
import H1 from './h1.webp'
import H2 from './h2.webp'
import H3 from './h3.webp'
import H4 from './h4.webp'
import { useNavigate } from 'react-router-dom';

function CARD2() {
    const navigate = useNavigate();
    function open() {
        navigate('/ahmedabad');
    }
        return (
            <>
                <div class="card2_p1">
                    <h1 class="h1a_p1">
                        Browse by property type
                    </h1>
                </div>
                <div class="container_p1">
                    <div class="item_p1" onClick={open}>
                        <img src={H} alt="error" class="f1_p1gb" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>HOTELS</h1>
                            <p style={{textAlign:'center'}}>233 HOTELS</p>
                        </div>
                    </div>
                    <div class="item_p1" onClick={open}>
                        <img src={A} alt="error" class="f1_p1gb" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>APARTMENTS</h1>
                            <p style={{textAlign:'center'}}>233 HOTELS</p>
                        </div>
                    </div>
                    <div class="item_p1" onClick={open}>
                        <img src={R} alt="error" class="f1_p1gb" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>RESORTS</h1>
                            <p style={{textAlign:'center'}}>233 HOTELS</p>
                        </div>
                    </div>
                    <div class="item_p1">
                        <img src={V} alt="error" class="f1_p1gb" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>VILLAS</h1>
                            <p style={{textAlign:'center'}}>233 HOTELS</p>
                        </div>
                    </div>
                    <div class="item_p1" onClick={open}>
                        <img src={C} alt="error" class="f1_p1gb" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>CABINS</h1>
                            <p style={{textAlign:'center'}}>233 HOTELS</p>
                        </div>
                    </div>
                </div>
                <div class="card2_p1">
                    <h1 class="h1a_p1">
                        Homes guests love
                    </h1>
                </div>
                <div class="container_p1">
                    <div class="item1_p1" onClick={open}>
                        <img src={H1} alt="error" class="f2_p1" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>Aparthotel Stare Miasto</h1>
                            <h3 style={{textAlign:'center'}}>Old Town, Poland, Kraków</h3>
                            <h4 style={{textAlign:'center'}}>₹ 13,861</h4>
                            <p class="p1_p1" style={{textAlign:'center'}}>8.4</p>
                            <p style={{textAlign:'center'}}>2,428 reviews</p>
                            <button class="btn1_p1">click here</button>
                        </div>
                    </div>
                    <div class="item1_p1" onClick={open}>
                        <img src={H2} alt="error" class="f2_p1" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>7Seasons Apartments</h1>
                            <h3 style={{textAlign:'center'}}>06. Terézváros, Hungary, Budapest</h3>
                            <h4 style={{textAlign:'center'}}>₹ 8,651</h4>
                            <p class="p1_p1" style={{textAlign:'center'}}>8.4</p>
                            <p style={{textAlign:'center'}}>8,876 reviews</p>
                            <button class="btn1_p1">click here</button>
                        </div>
                    </div>
                    <div class="item1_p1" onClick={open}>
                        <img src={H3} alt="error" class="f2_p1" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>Rue du Château</h1>
                            <h3 style={{textAlign:'center'}}>France, Tarascon</h3>
                            <h4 style={{textAlign:'center'}}>₹ 12,078</h4>
                            <p class="p1_p1" style={{textAlign:'center'}}>8.4</p>
                            <p style={{textAlign:'center'}}>365 reviews</p>
                            <button class="btn1_p1">click here</button>
                        </div>
                    </div>
                    <div class="item1_p1" onClick={open}>
                        <img src={H4} alt="error" class="f2_p1" />
                        <div class="centered_p1">
                            <h1 style={{textAlign:'center'}}>Il Castello di Campello</h1>
                            <h3 style={{textAlign:'center'}}>Italy, Campello Alto</h3>
                            <h4 style={{textAlign:'center'}}>₹ 9,186</h4>
                            <p class="p1_p1" style={{textAlign:'center'}}>8.4</p>
                            <p style={{textAlign:'center'}}>198 reviews</p>
                            <button class="btn1_p1">click here</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default CARD2;