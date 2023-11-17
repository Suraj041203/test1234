import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';


function Thanks() {
  return (
    <div>
      <div class="wrapper">
        <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>
        <div class="form-box login">
          <h2>Thank you for your valuable vote !</h2>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

export default Thanks;
