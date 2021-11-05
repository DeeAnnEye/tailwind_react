import React from "react";

const DetailsTable = () =>{
return<div class="bg-white min-w-1/2 shadow overflow-hidden sm:rounded-lg">
<div class="px-4 py-5 sm:px-6">
  <h6 class="text-left leading-6 font-medium text-gray-800">
    Details
  </h6>
</div>
<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-400">
        Company:
      </dt>
      <dd class="mt-1 text-left text-gray-600">
        ATM
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Network ID:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        atm
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Display Name:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        AdTrust Media
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Account ID:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        ABCD12345
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Phone:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        +1 9999-999-999
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Address:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
      Street 1, Route 1, USA
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Timezone:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        EST
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
        Display Language:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
        English
      </dd>
    </div>
  </dl>
</div>
</div>
}

export default DetailsTable