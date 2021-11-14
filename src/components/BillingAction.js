import React from "react";

const BillingAction = () => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h6 class="text-left leading-6 text-lg text-gray-700">
          View Billing Information Action
        </h6>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-400">Billing Address:</dt>
            <dd class="mt-1 text-left text-gray-600">
              Name: WWEE <br />
              Address: wdnbwef ncnbernj
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">Account Info:</dt>
            <dd class="mt-1 text-left text-gray-900">
              Card / Wallet Info <br />
              <a href="/payment" class="text-blue-500">
                Add Payment Method
              </a>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">Card Type:</dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>MasterCard</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">
              Card Holder Name:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="USD"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">Card Name:</dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="USD"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">
              Card Holder Address:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="USD"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default BillingAction;
