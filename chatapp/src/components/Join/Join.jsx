import React, { useState } from 'react'
import "./join.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

let username;
export default function Join() {
    const sendUser = () => {
        username = document.getElementById("joinInput").value;
        document.getElementById("joinInput").value = '';
    }
    const [name,setName] = useState('');
    return (
        <div className='joinpage'>
            <div className="joincontainer">
                <img src={logo} alt="" />
                <h1>Chatly</h1>
                <div>
                    <input onChange={(e) => setName(e.target.value)} autoFocus type="text" id="joinInput" placeholder='Enter your name here: ' required/>
                    <Link to={'/chat'} onClick={(e) => !name ? e.preventDefault() : null}><button onClick={sendUser} id="joinBtn" type='submit' >Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export {username};