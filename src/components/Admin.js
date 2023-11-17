import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

function Admin() {
    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>
                <div className="form-box login">
                    <h2>Admin Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <label>
                                <input type="email"  placeholder="Email" />
                            </label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <label>
                                <input type="password"  placeholder="Password" />
                            </label>
                        </div>
                        <button type="submit" className="btn"> <Link to="/adminmain">Login</Link></button>
                    </form>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"></script>
        </div>
    );
}

export default Admin;
