import React, { useState, useEffect, usePrevious } from 'react';
import '../assets/css/form.css';
import '../App.css';
import rupee from '../assets/icons/rupee.png';
import { ReactComponent as Rupee } from  '../assets/icons/rupee.svg';

function convertIndianRupeeSystem (amount) {
    var x=amount ?? 0;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
} 

function BidAmount (props) {
    const [amount, setAmount] = useState(null);
    const [amountValue, setAmountValue] = useState(0);
    const [activeBtn, setActiveButton] = useState(null);
    const [width, setWidth] = useState({width:'50px'});

    const handleAmountChange = (value) => {
        if(value == ""){
            setWidth({width:'50px'});
            setAmount(null);
            setAmountValue(0);
        }else{
            const regex = /^[0-9,]+$/;
        const validate = regex.test(value);

        if(validate){

            const amountValue = value.replace(/,/g,"");

            const amountInINR = convertIndianRupeeSystem(amountValue);

            const length = amountInINR.length;
            const widthValue = 50 + ((length - 1) * 40);
            const width = {
                width: widthValue + 'px'
            }

            setWidth(width);
            setAmount(amountInINR);
            setAmountValue(amountValue);
        }
        }
        

    }

    const activebtnstyle = {
        border: '1px solid #3054D6',
        color: '#3054D6',
        opacity: '1'
    }

    useEffect(()=>{
        
        if(eval(amountValue) && activeBtn){
            props.setShowFormFields(true);
        }else{
            props.setShowFormFields(false); 
        }
    })

    return(
        <>

            <div className="bid-amount-header">
                <h4>Place your Load Bid</h4>
            </div>

            <hr className="heading-seprator"/>

            <div className="amount-field">
                
                <img src={rupee} width="25" />
                <input type="text" className="amount-input-field"  placeholder="0" style={width}
                       value={amount} 
                       onChange={(evt)=>handleAmountChange(evt.target.value)}/>
                    
            </div>

            <div className="amount-field-btn-grp">
                <button className="amount-field-btns" 
                        onClick={()=>setActiveButton('fixed')} 
                        style={(activeBtn=='fixed')? activebtnstyle : null}>
                            Fixed Price
                </button>
                <button className="amount-field-btns" 
                        onClick={()=>setActiveButton('negotiable')} 
                        style={(activeBtn=='negotiable')? activebtnstyle : null}>
                            Rate Negotiable
                </button>
            </div>
        </>
    )

}

export default BidAmount;