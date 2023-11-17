import React from 'react';
import './AdminMain.css';
import { Link } from 'react-router-dom';

function AdminMain() {
    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>
                <div className="form-box login">
                    <h2>Select one :</h2>
                    <button type="submit" className="btn" id="redirectButton1"> <Link to="/adddelete">Add/Delete</Link> </button>
                    <button type="submit" className="btn" id="redirectButton2"><Link to="/modify">Modify</Link></button>
                    <div className="box">
                        <button className="btn">Live Voting</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMain;
