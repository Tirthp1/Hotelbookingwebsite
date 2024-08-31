import React from 'react'
import "./NAVBAR2.css"
import {useNavigate} from 'react-router-dom';
import IMG from './avatar.png';
function NAVBAR2(props) {
    const navigate=useNavigate();
    function signout(){
        alert('you clicked signout button')
        navigate('/');
    }
    // function signin(props){
    //     alert('you clicked signin button')
    //     navigate('/login');
    // }

    function account(){
        const ab={
            name:props.info.name,
            email:props.info.email,
        }
        
        alert('you clicked acoount ')
        navigate('/account',{state : { email: ab.email,name : ab.name }});
    }

    
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars">III</i>
                </label>
                <label class="logo">Hotel Booking</label>
                <ul>
                    {/* <li><a class="active">{props.info.name}</a></li> */}
                    <li><img src={IMG} className='i1' onClick={account}></img></li>
                    <li><a class="active" onClick={signout}>Logout</a></li>
                </ul>
            </nav>
            <section></section>
        </>
    )
}

export default NAVBAR2;