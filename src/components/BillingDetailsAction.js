import React from "react";

const BillingDetailsAction = () => {
    return <div class="bg-white mt-4 h-5/6 shadow w-full mr-2 overflow-hidden sm:rounded-lg">
    <div class="px-4 border border-b-gray border-t-0 sm:px-6">
    <div className=" flex justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">
        Billing Details Action
      </div>
      <button type="button" name="Save" className="inline-flex items-center w-20 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          Save
      </button>
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-400">Invoice Frequency:</dt>
          <dd className="mt-1 text-left text-gray-600">
          <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
              >
                <option>Monthly</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">Payment Method:</dt>
          <dd className="mt-1 text-left text-gray-900">
          <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
              >
                <option>Check</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">
            Payable To:
          </dt>
          <dd className="mt-1 text-left text-gray-900">
          <input
                type="text"
                name="currency"
                id="currency"
                placeholder="Company Name"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">Currency:</dt>
          <dd className="mt-1 text-left text-gray-900">
          <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
              >
                <option>USD</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">Account Number:</dt>
          <dd className="mt-1 text-left text-gray-900">
          <input
                type="text"
                name="currency"
                id="currency"
                placeholder="35212323"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">Bank Name:</dt>
          <dd className="mt-1 text-left text-gray-900">
          <input
                type="text"
                name="currency"
                id="currency"
                placeholder="HDFC"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">Routing/Swift/ABA/IBAN:</dt>
          <dd className="mt-1 text-left text-gray-900">
          <input
                type="text"
                name="currency"
                id="currency"
                placeholder="12324"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">Other Details:</dt>
          <dd className="mt-1 text-left text-gray-900">
          <input
                type="text"
                name="currency"
                id="currency"
                placeholder="Details"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
          </dd>
        </div>
      </dl>
    </div>
  </div>
}

export default BillingDetailsAction