import React, { useState, useEffect } from 'react';
import '../assets/css/form.css';
import BidAmount from '../Form/bidAmount';
import BidderDetails from '../Form/bidderDetails';

function Form () {
    const [bidAmount, setBidAmount] = useState(0);
    const [negotiable, setNegotiable] = useState(null);
    const [mobile, setMobile] = useState('+91-');
    const [name, setName] = useState('');
    const [remarks, setRemarks] = useState('');

    const [showFormFields, setShowFormFields] = useState(false);
    const [disableBidBtn, setDisableBidBtn] = useState(true);

    const disableBtn = {
        backgroundColor: '#EDF0F7',
        opacity: '1',
        boxShadow: '0px 0px 0px'
    }

    const disableBtnTxt = {
        color: '#2355FC',
        opacity: '50%'
    }

    useEffect(()=>{
        if((mobile != '+91-') && (mobile.length == 14) && name != ''){
            setDisableBidBtn(false);
        }else{
            setDisableBidBtn(true);
        }
    })

    return(
        <div >
            <div className="field-container" >
                <BidAmount setShowFormFields={setShowFormFields}/>
                {showFormFields ? (
                    <BidderDetails setMobile={setMobile} setName={setName} setRemarks={setRemarks} 
                                   mobile={mobile} name={name} remarks={remarks}/>
                ) : null}
            </div>
            <div className="bid-btn" style={disableBidBtn ? disableBtn : null} >
                <label className="btn-text" style={disableBidBtn ? disableBtnTxt : null}>Bid Now</label>
            </div>
        </div>
    )
}

export default Form;