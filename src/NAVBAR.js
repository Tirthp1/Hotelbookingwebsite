import React from 'react'
import "./NAVBAR.css"
import {useNavigate} from 'react-router-dom';
function NAVBAR() {
    const navigate=useNavigate();
    function signup(){
        alert('you clicked signup button')
        navigate('/signup');
    }
    function signin(){
        alert('you clicked signin button')
        navigate('/login');
    }
    function home(e){
        navigate('/');
    }
    return (
        <>
            <nav className='nav'>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars">|||</i>
                </label>
                <label className="logo1" onClick={home}>Hotel Booking</label>
                <ul className='ula'>
                    <li><a className="active1" onClick={signin}>SIGNIN</a></li>
                    <li><a onClick={signup} className='active1'>Register</a></li>
                </ul>
            </nav>
            <section></section>
        </>
    )
}

export default NAVBAR