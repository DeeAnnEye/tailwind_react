import React from "react";

const DistributionAction = () => {
    return  <div className="bg-none ml-4 mt-2 shadow overflow-hidden sm:rounded-lg">
    <div className=" flex justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">Distribution Action</div>
      <div>
        <button
          type="button"
          name="Save"
          className="inline-flex items-center w-20 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Save
        </button>
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
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
    </div>
    </div>
}

export default DistributionAction