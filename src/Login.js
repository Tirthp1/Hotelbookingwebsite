import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'
import IMG from './background.jpg'


function Login() {

    const history = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/login", {
                name, email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home1", { state: { id: email, n: name } })
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <>

           
            <img src={IMG} alt="error" className="im1" />
            <div className="itema2">


                <form action="POST" className="forma1">
                    <h1 className="ha1">Login</h1>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="    Username" className='com1'/>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="   Email" className='com1'/>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="   Password" className='com1'/>
                    <input type="submit" onClick={submit} className='com_1'/>
                    <br />
                    <p className="pa1">OR</p>
                    <br />

                    <Link to="/signup" className="la1">Signup Page</Link>
                </form>


            </div>

        
        </>
    )
}

export default Login;