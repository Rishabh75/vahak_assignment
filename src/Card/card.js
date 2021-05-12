import React, { useState, useEffect } from 'react';
import '../assets/css/card.css';
import CardHeader from './cardHeader';
import Specification from './specification';
import Details from './details';
import OwnerInfo from './ownerInfo';

function Card() {

    return(
        <>
            <div className="card-container">
                <CardHeader />
                <Specification />
                <Details />
                <OwnerInfo />
            </div>
        </>
    )
}

export default Card;