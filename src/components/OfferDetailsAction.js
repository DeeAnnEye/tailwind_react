import React from "react";

const OfferDetailsAction = () => {
  return (
    <div className="bg-none ml-4 mt-2 shadow overflow-hidden sm:rounded-lg">
      <div className=" flex justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">Details Action</div>
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
        <div className="text-left font-small text-gray-500">Description:</div>
        <div className="mt-1">
          <div>
            <textarea
              id="about"
              name="about"
              rows="3"
              placeholder="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
              consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md"
            ></textarea>
          </div>
        </div>
        <div className="text-left mt-2 font-small text-gray-500">Terms:</div>
        <div className="mt-1">
          <input
            id="website"
            name="website"
            type="text"
            autocomplete="text"
            placeholder="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillu"
            class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md"
          />
        </div>
        <div className="text-left mt-1 font-small text-gray-500">
          Restrictions:
        </div>
        <div className="mt-2">
          <input
            id="notes"
            name="notes"
            type="text"
            autocomplete="text"
            placeholder="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillu"
            class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md"
          />
        </div>
        <div className="text-left mt-1 font-small text-gray-500">
          Links:
          <button
            type="button"
            class="ml-1 inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>
        <div className="mt-2">
          <input
            id="notes"
            name="notes"
            type="text"
            autocomplete="text"
            placeholder="Offer URL: https://tracking.com/offerid1?variable1={affiliate_id}&variable2={transaction_id}"
            class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md"
          />
        </div>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 mt-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
              Status:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Active</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Conversion Type:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Email, Submit</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Vertical: 
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Insurance</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Conversion Point:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Margot Fostor</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Incentive:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Non-incent</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Channel:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Desktop, Mobile</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Group:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Group Name</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Tag:
            </dt>
            <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-64 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Tag Name</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
            </dd>
          </div>
         
        </dl>
      </div>
    </div>
  );
};

export default OfferDetailsAction;
