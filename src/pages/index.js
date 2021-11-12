import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Account from "./Account.js";
import Advertiser from "./Advertiser.js";
import Billing from "./Billing.js";


const Index = () =>{
return (
<Router>
    <div>
        <Routes>
        <Route path='/account' element={<Account path="account"/>} />
        <Route path='/advertisers' element={<Advertiser/>} />
        <Route path='/billing' element={<Billing/>} />
        </Routes>
    </div>   
</Router>
)
}

export default Index