import React from "react";
import SettingsActionTable from "./SettingsActionTable";

const SettingsAction = () => {
  return (
    <div className="bg-none ml-4 mt-2 shadow overflow-hidden sm:rounded-lg">
      <div className=" flex justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">Settings Action</div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Private:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Require Approval:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Approve Conversions:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Multiple Conversions:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Proxy Traffic:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
        </dl>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className=" mt-4 sm:col-span-1">
            <dt className="text-left font-small text-gray-700">
              Whitelist IPs:
            </dt>
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
          <div className=" mt-4 sm:col-span-1">
            <dt className="text-left font-small text-gray-700">
              Blacklist IPs:
            </dt>
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
          <div className=" mt-4 sm:col-span-1">
            <textarea
              rows="6"
              name="comment"
              id="comment"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 p-2 sm:text-base border border-gray-300 rounded-md"
              placeholder="Fugiat ipsum ipsum deserunt culpa aute
              sint do nostrud anim incididunt cillum
              culpa consequat."
            ></textarea>
          </div>
          <div className=" mt-4 sm:col-span-1">
            <textarea
              rows="6"
              name="comment"
              id="comment"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 p-2 sm:text-base border border-gray-300 rounded-md"
              placeholder="Fugiat ipsum ipsum deserunt culpa aute
              sint do nostrud anim incididunt cillum
              culpa consequat."
            ></textarea>
          </div>
        </dl>
        <div className=" mt-4 sm:col-span-1">
          <dt className="text-left font-small text-gray-700">
            Automation Rules:
          </dt>
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
            <dt className="text-left font-small text-gray-500">Rule:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Conversion Rate</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Threshold:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>100 conversions</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <button
              type="button"
              className="invisible ml-12 inline-flex px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            >
              ADD
            </button>
          </div>
        </dl>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-2 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Operator:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Is less than</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="invisible text-left font-small text-gray-400">
              Event 2 Payout:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="87 %"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
          <dt className="invisible text-left font-small text-gray-500">Threshold:</dt>
            <button
              type="button"
              className="ml-8 inline-flex px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            >
              ADD
            </button>
          </div>
        </dl>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-2 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Apply to:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Variables</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Action:</dt>
            <dd className="mt-1 text-left text-gray-600">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Alert / Warn / block</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <button
              type="button"
              className="invisible ml-12 inline-flex px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            >
              ADD
            </button>
          </div>
        </dl>
        <SettingsActionTable />
      </div>
    </div>
  );
};

export default SettingsAction;
