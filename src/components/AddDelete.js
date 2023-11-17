import React from 'react';
import './AddDelete.css';

function AddDelete() {
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>AAP</td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>ACP</td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>BSP</td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>RJD</td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                    
                    
                </tbody>
            </table>
       
        <div class="new-entry">
            <label for="newOption" class="add">New Entry:</label>
            <input type="text" id="newOption" name="newOption"/>
            <button onclick="addNewEntry()" class="btn">Add</button>
        </div>
        
      </div>
    </div>
        </div>
    );
}

export default AddDelete;