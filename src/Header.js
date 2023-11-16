import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function header(){
    return(
        <div>
            <header>
                <h2 class="OnlineVoting" style={{color: '#d2b200', fontFamily: 'Times New Roman'}}>Online Voting</h2>
                <nav class="navigation">
                    <a href="/">Home</a>
                    <a href="/">News</a>
                    <a href="/">Contact</a>
                    <a href="/">About</a>
                    <Link to="/main"  class="btnlogin-popup">Login</Link>
                    <Link to="/admin"  class="btnlogin-popup" id="redirectButton" onClick={"/admin"}>Admin</Link>
                </nav>
            </header>
        </div>
    )
}