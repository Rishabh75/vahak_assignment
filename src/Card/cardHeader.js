import React, { useState, useEffect } from 'react';
import '../assets/css/card.css';

function CardHeader (props) {
    return(
        <div className="card-header">
            <label className = "car-name-text" >Honda City</label>
            <label className = "posted-date-text">Posted at 1 Nov, 9.30 AM</label>
        </div>
    )
}

export default CardHeader;