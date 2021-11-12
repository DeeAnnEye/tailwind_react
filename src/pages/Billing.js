import React from "react";
import BillingSubscription from "../components/BillingSubscription";
import PageBar from "../components/PageBar";

const Billing = () => {
 return <div class="min-h-full">
     <PageBar />
     <div className=" flex flex-col px-4 gap-4 py-4 flex-wrap bg-white shadow">
     <BillingSubscription />
     </div>
 </div>
}

export default Billing