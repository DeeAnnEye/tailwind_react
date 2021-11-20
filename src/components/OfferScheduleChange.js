import React from "react";
import ScheduleChangeTable from "./ScheduleChangeTable";

const OfferScheduleChange = () => {
  return (
    <div className="mt-2 bg-none shadow overflow-hidden sm:rounded-lg">
      <div className=" flex border border-t-0 border-b-gray justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">Schedule Change</div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-24 gap-y-4 mt-2 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
              Offer Status:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Select</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-left font-small text-gray-500">
              Time/Timezone:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                  <div className="flex flex-row">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Select</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
                <button
                  type="button"
                  className="ml-12 inline-flex px-2  border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                >
                  ADD
                </button>
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
              Asset Status:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Active</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-left font-small text-gray-500">
              Time/Timezone:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                  <div className="flex flex-row">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>3:59 pm/EST</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
                <button
                  type="button"
                  className="ml-12 inline-flex px-2  border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                >
                  ADD
                </button>
                </div>
              </div>
            </dd>
          </div>
        </dl>
        <dl className="grid grid-cols-1 gap-x-10 gap-y-4 mt-2 sm:grid-cols-4">
        <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Revenue / Payout:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Payout</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="mt-1 sm:col-span-1">
            <dt className="invisible font-small">
              Revenue
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-40 text-gray-700 h-9 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md"
                    placeholder="$ 22.3"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-left font-small text-gray-500">
              Time/Timezone:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                  <div className="flex flex-row">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-36 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>3:59pm/EST</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
                <button
                  type="button"
                  className="ml-12 inline-flex px-2  border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                >
                  ADD
                </button>
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Offer Caps:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-40  pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Conversion Cap</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
          <dt class="invisible text-left font-small text-gray-500">Year</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1 relative rounded-md border border-gray-300 w-40 pl-3 pr-10 py-2 shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="123"
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
          <div className="sm:col-span-2">
            <dt className="text-left font-small text-gray-500">
              Time/Timezone:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                  <div className="flex flex-row">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-36 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>3:59pm/EST</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
                <button
                  type="button"
                  className="ml-12 inline-flex px-2  border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                >
                  ADD
                </button>
                </div>
              </div>
            </dd>
          </div>
        </dl>
        <ScheduleChangeTable />
      </div>
    </div>
  );
};

export default OfferScheduleChange;
