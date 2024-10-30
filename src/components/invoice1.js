import React from "react";
import {useState} from 'react'
function Invoice1(){
    const[id,setId] = useState("")
    return(
        <div>
        <form>
            <label>Id</label>
            <input className="id" value=" " ></input>
            <br></br>
            <label>Date</label>
            <input className="date"></input>
            <br></br>
            <label>CustomerName</label>
            <input className="name"></input>
            <br></br>
            <label>BillingAddress</label>
            <input className="billing"></input>
            <br></br>
            <label>Shipping Address</label>
            <input className="shipping"></input>
            <br></br>
            <label>GSTIN</label>
            <input className="gstin"></input>
            <br></br>
            <label>Items</label>
            <input className="items"></input>
            <br></br>
            <label>BillSundry</label>
            <input className="bill"></input>
            <br></br>
            <label>Total Amount</label>
            <br></br>
            <input className="amount"></input>
            
        </form>
        </div>
    )
}

export default Invoice1;
