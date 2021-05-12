import React, { useState, useEffect } from 'react';
import '../assets/css/card.css';
import { ReactComponent as Group } from '../assets/icons/Group.svg';
import { ReactComponent as Path } from '../assets/icons/Path.svg';
import { ReactComponent as Payment } from '../assets/icons/payment.svg';

function Specification() {
    return(
        <div className="specification-conatainer">

            <div className="specification">
                <Group className="specification-icon"/>
                <label className="specification-text">Specification 01</label>
            </div>

            <div className="specification">
                <Path className="specification-icon"/>
                <label className="specification-text">Specification 02</label>
            </div>

            <div className="specification">
                <Payment className="specification-icon"/>
                <label className="specification-text">Specification 03</label>
            </div>

        </div>
    )
}

export default Specification;