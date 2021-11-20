import React from "react";
import CommissionsTable from "./CommissionsTable";

const OfferCommissionsTable = () => {
  return (
    <div className="bg-none shadow overflow-hidden sm:rounded-lg">
      <div className=" flex border border-t-0 border-b-gray justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">
          Commissions Action
        </div>
        <div>
          <button
            type="button"
            className="inline-flex mx-4 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            Customize
          </button>
          <button
            type="button"
            className="inline-flex mx-4 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            Save
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-2 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Revenue:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>$100</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Payout:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>$80</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Profit:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>$90</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Currency:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>USD</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
        </dl>
        <div className=" ml-1 mt-4 sm:col-span-1">
          <dt className="text-left font-small text-gray-700">Event:</dt>
          <dd className="text-left text-gray-400">
            Enabled
            <button
              type="button"
              class=" ml-28 bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              role="switch"
              aria-checked="false"
            >
              <span class="sr-only">Use setting</span>

              <span
                aria-hidden="true"
                class="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              ></span>
            </button>
          </dd>
        </div>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-2 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Event Name:</dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="Name"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Event Revenue:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Event Payout:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
              Select Publisher:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Select</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="mt-1 sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Custom Revenue:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Custom Payout:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
        </dl>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-2 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Event 1 Revenue:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-40 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Event 1 Payout:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-40 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Event 2 Revenue:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-40 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Event 2 Payout:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-40 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
        </dl>
        <div className="mt-2 flex justify-end">
        <button
          type="button"
          className="ml-12 inline-flex px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
        >
          ADD
        </button>
        </div>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-2 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Click Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1 relative rounded-md border border-gray-300 w-52 pl-3 pr-10 py-2 shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="123/Total"
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <select
                  id="currency"
                  name="currency"
                  class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>Year</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Conversion Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1 relative rounded-md border border-gray-300 w-52 pl-3 pr-10 py-2 shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="123/Total"
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <select
                  id="currency"
                  name="currency"
                  class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>Year</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Revenue Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1 relative rounded-md border border-gray-300 w-52 pl-3 pr-10 py-2 shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="$ 11.3 / Total "
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <select
                  id="currency"
                  name="currency"
                  class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>Year</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Payout Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1 relative rounded-md border border-gray-300 w-52 pl-3 pr-10 py-2 shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="$ 11.3 / Total "
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <select
                  id="currency"
                  name="currency"
                  class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>Year</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        </dl>
        <CommissionsTable />
      </div>
    </div>
  );
};

export default OfferCommissionsTable;
