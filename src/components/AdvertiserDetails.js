import React from "react";

const AdvertiserDetails = () =>{
return <div className="bg-none max-w-2xl h-3/5 min-w-1/2 shadow overflow-hidden sm:rounded-lg">
<div className=" flex justify-between px-4 py-5 sm:px-6">
  <div className="text-left text-xl text-gray-800">
    Details
  </div>
  <div>
  <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg>
    Edit
  </button>
  </div>
</div>
<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
    <div className="text-left font-small text-gray-400">
        Address:
    </div>
    <div className="mt-1 text-left text-gray-600">
    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
    Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea
    </div>
    <div className="text-left font-small text-gray-400">
        Address:
    </div>
    <div className="mt-1 text-left text-gray-600">
    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
    Excepteur
    </div>
  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-400">
        Company:
      </dt>
      <dd className="mt-1 text-left text-gray-600">
        ATM
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Network ID:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        atm
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Display Name:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        AdTrust Media
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Account ID:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        ABCD12345
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Phone:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        +1 9999-999-999
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Address:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
      Street 1, Route 1, USA
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Timezone:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        EST
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Display Language:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        English
      </dd>
    </div>
  </dl>
</div>
</div>
}

export default AdvertiserDetails