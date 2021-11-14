import React from "react";
import BillingInvoice from "../components/BillingInvoice";
import BillingSubscription from "../components/BillingSubscription";
import AdvertiserUserTable from "../components/AdvertiserUserTable"
import PageBar from "../components/PageBar";

const Billing = () => {
 return <div class="min-h-full">
     <PageBar />
     <div className=" grid grid-cols-2 px-4 py-4 gap-4 bg-white shadow">
         <div className="flex flex-col">
         <BillingSubscription />
         <BillingInvoice />
         </div>     
         <AdvertiserUserTable />     
     </div>
 </div>
}

export default Billing