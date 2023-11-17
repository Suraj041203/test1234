import React from 'react';
import './Vote.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Vote() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('./thanks');
    };
  return (
    <div>
      
    <div class="wrapper">
        <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>
        <div class="form-box login">
            <h2 style={{fontFamily: 'Times New Roman'}}>Kindly choose one</h2><br/>
    <label>
        <input type="radio" name="options" value="option1"/><b>AAP</b> 
    </label><br></br>
    <label>
        <input type="radio" name="options" value="option2"/><b>ACP</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option3"/><b>BSP</b> 
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option1"/><b>RJD</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option2"/><b>RJP</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option3"/><b>JLD</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option1"/><b>CNP</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option2"/><b>MDC</b> 
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option3"/><b>BJP</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option1"/><b>NTC</b>
    </label>
    <br></br>
    <label>
        <input type="radio" name="options" value="option2"/><b>TMC</b>
    </label>
    <Link to="/thanks"><button type="submit" class="btn" id="redirectButton2">Vote!</button></Link>      
        </div>
        <script type="module" src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"></script>

    </div></div>
  );
}

export default Vote;
