import React from "react";

const SuppressionFilesOptions = () => {
    return <div className="mx-8 mt-2">
    <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-5">
         <div className="sm:col-span-1">
         <dt class="text-left font-small text-gray-500">List Name:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <input
                type="text"
                name="currency"
                id="currency"
                placeholder="List name"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
            </div>
          </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-left font-small text-gray-400">Unsubscribe Link:</dt>
            <dd className="mt-1 text-left text-gray-600">https://tracking.com/offerid1?variable1=affiliate_id&variable2=transaction_id</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-left font-small text-gray-400">Download URL:</dt>
            <dd className="mt-1 text-left text-gray-600">https://tracking.com/offerid1?variable1=affiliate_id&variable2=transaction_id</dd>
          </div>
          <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-400">Status:</dt>
          <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Active</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div className="sm:col-span-1 self-center">
          <dt className="invisible text-left font-small text-gray-400">Add</dt>
          <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
              <button
                type="button"
                className="inline-flex mx-4 px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
              >
                ADD
              </button>
            </div>
          </dd>
        </div>
        </dl>
        </div>
}

export default SuppressionFilesOptions