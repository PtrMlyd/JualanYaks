import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { saveShipping } from '../actions/cartAction'
import Checkout from '../components/checkout';

function ShippingScreen (props){

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipcode] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(saveShipping({address,city,zipCode,country}))
        props.history.push('/payment')
    }

    return <div>
        <Checkout step1 step2 ></Checkout>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>
                            Shipping
                        </h2>
                    </li>
                    <li>
                        <label htmlFor="Adress">
                            Adress
                        </label>
                        <input type="text" name="address" id="address" onChange={ (e)=> setAddress(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="city">
                            City
                        </label>
                        <input type="text" name="city" id="city" onChange={ (e)=> setCity(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="zipCode">
                            Postal Code
                        </label>
                        <input type="number" name="zipCode" id="zipCode" onChange={ (e)=> setZipcode(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="country">
                            Country
                        </label>
                        <input type="text" name="country" id="country" onChange={ (e)=> setCountry(e.target.value)} />
                    </li>
                                                                                                                
                    <li>
                        <button type="submit" className="button primary"> Continue </button>
                    </li>

                </ul>
            </form>
        </div>  
    </div>
    
}

export default ShippingScreen