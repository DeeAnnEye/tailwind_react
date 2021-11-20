import React from "react";

const OfferConversionPixel = () => {
    return <div className="py-8 bg-none shadow overflow-hidden sm:rounded-lg">
    <div className=" flex border border-t-0 border-b-gray justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">Conversion Pixels</div>
    </div>
    <dl className="mt-4 mx-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
    <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Select Pixel Type for Advertiser:</dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Global Postback / Offer Postback</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Add Publisher Pixel:</dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Publisher Name / Offer / Global</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">URL for Advertiser:</dt>
            <dd className="mt-1 text-left text-gray-600">link.com/?s=123&s2=234</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Add Publisher URL:</dt>
            <dd className="text-left text-gray-400">
            <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="link.com/?s=123&s2=234"
                  />
                </div>
              </div>
            </dd>
          </div>
          </dl>
    </div>
}

export default OfferConversionPixel