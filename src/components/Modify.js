import React from 'react';
import './Modify.css';

function Modify() {
    return (
        <div>
             <div class="wrapper">
        <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>
        <div class="form-box login">
            <h2>Select one :</h2>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Party Name</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>AAP</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>ACP</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>BSP</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>RJD</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>RJP</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>JLD</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>CNP</td>
                        <td><button class="delete-btn">Modify</button></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default Modify;
