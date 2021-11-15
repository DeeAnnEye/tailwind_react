import React from "react";

const BillingInvoicePublisher = () => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 border border-t-0 border-b-gray sm:px-6">
        <h6 class="text-left leading-6 text-lg text-gray-700">Invoices</h6>
      </div>
      <div class="flex flex-row mt-4 gap-4">
        <div class="bg-white w-2/4 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h6 class="text-left leading-6 text-lg text-gray-700">
              Publishers
            </h6>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-400">Publisher:</dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Publisher-name</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">Currency:</dt>
                <dd class="mt-1 text-left text-gray-900">
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
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">Offer:</dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Offer1, Offer2</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">Date Range:</dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Date</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">
                  Publisher Account:
                </dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Account Selection</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">
                  Payment Account:
                </dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Account Selection</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <button
                      type="button"
                      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Generate Invoice
                    </button>
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
                    PUBLISHER
                  </th>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AMOUNT
                  </th>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DATE RANGE
                  </th>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Publisher 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Publisher 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Publisher 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Publisher 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Publisher 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Publisher 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="bg-white w-2/4 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h6 class="text-left leading-6 text-lg text-gray-700">
              Advertisers
            </h6>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-400">Advertiser:</dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Advertiser-name</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">Currency:</dt>
                <dd class="mt-1 text-left text-gray-900">
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
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">Offer:</dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Offer1, Offer2</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">Date Range:</dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Date</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-left font-small text-gray-500">
                  Payment Account:
                </dt>
                <dd class="mt-1 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <select
                      id="card"
                      name="mastercard"
                      autocomplete="card-name"
                      class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                    >
                      <option>Account Selection</option>
                      <option>card 2</option>
                      <option>card 3</option>
                    </select>
                  </div>
                </dd>
              </div>
            </dl>
            <div class="sm:col-span-1">
                <dd class="mt-8 text-left text-gray-900">
                  <div class="sm:col-span-2">
                    <button
                      type="button"
                      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Generate Invoice
                    </button>
                  </div>
                </dd>
              </div>
          </div>
          <div class="shadow w-11/12 mx-8 mb-4 overflow-hidden border border-gray-200 sm:rounded-lg">
            <table class=" w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ADVERTISER
                  </th>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AMOUNT
                  </th>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DATE RANGE
                  </th>
                  <th
                    scope="col"
                    class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Advertiser 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Advertiser 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Advertiser 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Advertiser 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Advertiser 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">Advertiser 1</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">233</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">1st Jun - 2nd Jul</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a
                      href="/edit"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Payment <br />
                      Download PDF
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInvoicePublisher;
