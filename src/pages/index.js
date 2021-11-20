import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Account from "./Account.js";
import Advertiser from "./Advertiser.js";
import Billing from "./Billing.js";
import ManageAdvertiser from "./ManageAdvertiser.js";
import ManagePublisher from "./ManagePublisher.js";
import OfferList from "./OfferList.js";
import Offers from "./Offers.js";
import Publisher from "./Publisher.js";
import Settings from "./Settings.js";


const Index = () =>{
return (
<Router>
    <div>
        <Routes>
        <Route path='/account' element={<Account path="account"/>} />
        <Route path='/advertisers' element={<Advertiser/>} />
        <Route path='/billing' element={<Billing/>} />
        <Route path='/publisher' element={<Publisher/>} />
        <Route path='/manage-advertiser' element={<ManageAdvertiser/>} />
        <Route path='/manage-publisher' element={<ManagePublisher/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/offers' element={<Offers/>} />
        <Route path='/offer-list' element={<OfferList/>} />
        </Routes>
    </div>   
</Router>
)
}

export default Index