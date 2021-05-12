import React, { useState, useEffect } from 'react';
import '../assets/css/form.css';

function BidderDetails (props) {

    const [focusedMobile, setFocusedMobile] = React.useState(false);
    const [focusedName, setFocusedName] = React.useState(false);
    const [focusedRemarks, setFocusedRemarks] = React.useState(false);

    const validiteMobileNumber = (value) => {
        if(value.length <= 4){
            props.setMobile('+91-');
        }else if(value.length <= 14 ){
            const regex = /^[0-9]+$/;
            const extractNumber = value.substring(4,14);
            const validate = regex.test(extractNumber);
            if(validate){
                props.setMobile(value);
            }
        }  
    }

    const validateName = (value) => {
        if(value == ""){
            props.setName('');
        }else{
            props.setName(value)
        } 
    }

    const hideLabel = {
        display : 'none'
    }

    return(
        <>
            <hr className="form-seprator"/>

            <div className="detail-field">
                <input type="text" className="field-input" placeholder="Enter your mobile number"
                       onChange={(evt)=>validiteMobileNumber(evt.target.value)}
                       value = {props.mobile}
                       onFocus={()=>setFocusedMobile(true)} 
                       onBlur={()=>setFocusedMobile(false)} /> <br/>
                <label className="field-label" style={!focusedMobile ? hideLabel : null} >Enter your mobile number*</label>
            </div>

            <div className="detail-field">
                <input type="text" className="field-input" placeholder="Enter your name" 
                       onChange={(evt)=>validateName(evt.target.value)}
                       value={props.name}
                       onFocus={()=>setFocusedName(true)} 
                       onBlur={()=>setFocusedName(false)} /> <br/>
                <label className="field-label" style={!focusedName ? hideLabel : null}>Enter your name*</label>
            </div>

            <div className="detail-field">
                <input type="text" className="field-input" placeholder="Enter Remarks (optional)"
                       onChange={(evt)=>props.setRemarks(evt.target.value)} 
                       value = {props.remarks}
                       onFocus={()=>setFocusedRemarks(true)} 
                       onBlur={()=>setFocusedRemarks(false)} /> <br/>
                <label className="field-label" style={!focusedRemarks ? hideLabel : null} >Enter Remarks (optional)</label>
            </div>
        </>
        
    )
}

export default BidderDetails;