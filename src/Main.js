import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom'; // Remove if not used

function Main() {
    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>
                <div className="form-box login">
                    <h2 style={{fontFamily: 'Times New Roman'}} >Login</h2>
                    <form>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                                <input type="text" required placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                <input type="Password" required placeholder="Password" />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#"> Forgot Password?</a>
                        </div>
                        <Link to="/vote">
                        <button type="submit" className="btn" id="redirectButton3" >Login</button></Link>
                        <div className="Register-Link">
                            <p>don't Have an account?<a href="#" className="Register-Link">Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <h2 style={{fontFamily: 'Times New Roman'}}>Registration</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                            <label htmlFor=""><input type="Email" required /></label>
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <label htmlFor=""><input type="Email" required placeholder='Password' /></label>
                            
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <label><input type="Password" required placeholder='Password' /></label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />I Agree</label>
                        </div>
                        <button type="submit" className="btn" id="redirectButton1" >Register</button>
                        <div className="login-register">
                            <p>Already have an account?<a href="#"
                                className="login-link" > Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
            {/* <script type="module" src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"></script> */}
        </div>
    );
}

export default Main;
