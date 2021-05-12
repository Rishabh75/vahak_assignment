import React, { useState, useEffect } from 'react';
import '../assets/css/card.css';
import profileImage from '../assets/image/ProfileTop.png';

function OwnerInfo() {
    return(
        <div className="info-container">
            <img src={profileImage} alt="Profile Picture" className="info-profile-picture"/>
            <label className="owner-name">Rohan Sharma</label>
            <label className="owner-location">Bengaluru, Karnatka</label>
        </div>
    )
}

export default OwnerInfo;