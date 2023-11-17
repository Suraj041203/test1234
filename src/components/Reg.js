import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Reg() {
    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>
                <div className="form-box ">
                    <h2 style={{fontFamily: 'Times New Roman'}}>Registration</h2>
                    <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <label><input type="Email" required></input>
                    Username</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <label><input type="Email" required></input>
                    Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <label><input type="Password" required></input>
                    Password</label>
                    
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox"/> I accept to the terms & conditions</label>
                </div>
                <button type="submit" class="btn" id="redirectButton1">Register</button>
                <div class="login-register">
                    <p>Already have an account?<a href="#"
                     class="login-link">Login</a></p>
                </div>
            </form>
                </div>
            </div>
            <script type="module" src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"></script>
        </div>
    );
}

export default Reg;