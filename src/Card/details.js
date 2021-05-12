import React, { useState, useEffect } from 'react';
import '../assets/css/card.css';
import { ReactComponent as More } from '../assets/icons/More.svg';
import { ReactComponent as Hide } from '../assets/icons/Hide.svg';

function Details () {
    const [showDetails, setShowDetails] = useState(false);
 
    const hideDetails = {
        display : !showDetails ? 'none' : 'block' 
    }

    return(
        <div >
            <div className="details-section" style={hideDetails}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="show-hide-details-btn">
                <span onClick={()=>setShowDetails(!showDetails)} >
                    <label className="card-btn-text">{showDetails? "Hide" : "More"} Details</label>
                    { showDetails ? (
                        <Hide className="show-hide-icon" />
                    ) : (
                        <More className="show-hide-icon"/>
                    )}
                </span>
            </div>
        </div>
    );
}

export default Details;