import React from "react";

const TrackingOffer = () =>{
    return <div className="py-8 bg-none shadow overflow-hidden sm:rounded-lg">
    <div className=" flex border border-t-0 border-b-gray justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">Tracking</div>
      <div>
        <button
          type="button"
          className="inline-flex mx-4 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="gray"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit
        </button>
      </div>
    </div>
    <dl className="mt-4 mx-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
    <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-700">Publisher:</dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Select Publisher</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-700">Tracking Domain:</dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>ExampleTracking.com</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-700">Publisher Tracking Link:</dt>
            <dd className="mt-1 text-left text-gray-600">link.com/?s=123&s2=234</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-700">Direct Links:</dt>
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
            <dt className="text-left font-small text-gray-700">Click Session Life span:</dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>1 Day</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-700">Custom Variable:</dt>
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
    </div>
}

export default TrackingOffer