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
                  placeholder="ABCDEFGH"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">Card Number:</dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="55255128552"
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
                  placeholder="Address"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">Expiry:</dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="--/--"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small mb-8 text-gray-500"></dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <button
                  type="button"
                  class="inline-flex items-center px-5 py-4 border border-gray-300 shadow-sm text-lg leading-4 font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  ADD
                </button>
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-500">CVV:</dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="234"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md"
                />
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <div class="shadow w-11/12 mx-8 mb-4 overflow-hidden border border-gray-200 sm:rounded-lg">
        <table class=" w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                CARD <br />
                NUMBER
              </th>
              <th
                scope="col"
                class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                NAME
              </th>
              <th
                scope="col"
                class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                EXPIRY
              </th>
              <th
                scope="col"
                class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                APPLY TO
              </th>
              <th
                scope="col"
                class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ACTION
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0">235</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">ABC</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">--/--</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Set as Default
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                  Edit <br />
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0">875</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">RVD</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">--/--</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Set as Default
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                  Edit <br />
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0">688</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">RCS</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">--/--</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Set as Default
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                  Edit <br />
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0">335</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">QWF</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">--/--</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Set as Default
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                  Edit <br />
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingAction;
