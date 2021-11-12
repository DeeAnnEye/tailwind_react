import React from "react";

const BillingSubscription = () => {
return (
    <div class="bg-white w-2/4 shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
  <h6 class="text-left leading-6 text-lg text-gray-700">
   Subscription Information
  </h6>
  </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-400">
        Date of agreement:
      </dt>
      <dd class="mt-1 text-left text-gray-600">
        DD-MM-YYYY
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Billing Access:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        Yes
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
       Current Subscription:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        Custom
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-blue-600">
        Platform Usage
      </dt>
      <dd class="mt-1 text-left text-blue-600">
      View Billing Information and Account Details
      </dd>
      <dd class="mt-1 text-left text-blue-600">
      View Invoice Details
      </dd>
    </div>
  </dl>
    </div>
    </div>
);
}

export default BillingSubscription