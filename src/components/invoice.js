import React from 'react'
import './invoice.css'
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import Invoice1 from './invoice1';
import Invoice2 from './invoice2';
import Invoice3 from './invoice3';
import Create from './create';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {

const navigate = useNavigate() 
   
return(
    <div>
        <button onClick={()=> navigate('/create') }>Add new</button>
        <table>
            <tr className="row">
              <th >Invoices</th>
            </tr>
            <tr>
              <td>
              <Link  to={{pathname: '/invoice1'}}>Invoice1</Link>
              </td>
            </tr>
            <tr>
             <td>
             <Link  to={{pathname: '/invoice2'}}>Invoice2</Link>
             </td>
            </tr>
            <tr>
             <td>
             <Link  to={{pathname: '/invoice3'}}>Invoice3</Link>
             </td>
            </tr>
        </table>
    </div>
)
}
export default Invoice