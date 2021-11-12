import React from "react";

const AdvertiserDetailsEdit = () => {
    return <div className="bg-none ml-4 mt-2 max-w-2xl h-3/5 min-w-1/2 shadow overflow-hidden sm:rounded-lg">
    <div className=" flex justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">
        Details
      </div>
      <div>
      <button type="button" name="Save" className="inline-flex items-center w-20 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          Save
      </button>
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="text-left font-small text-gray-500">
            Address:
        </div>
        <div className="mt-1">
        <div>
            <textarea id="about" name="about" rows="3" placeholder="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
    Excepteur" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md"></textarea>
          </div>
        </div>
        <div className="text-left mt-2 font-small text-gray-500">
           Website:
        </div>
        <div className="mt-1">
        <input id="website" name="website" type="text" autocomplete="text" placeholder="link.com" class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md" />
        </div>
        <div className="text-left mt-1 font-small text-gray-500">
          Notes:
        </div>
        <div className="mt-2">
        <input id="notes" name="notes" type="text" autocomplete="text" placeholder="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud " class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md" />
        </div>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-left font-small mt-8 text-gray-500">
            Currency:
          </dt>
          <dd className="mt-1 text-left text-gray-600">
          <div class="mt-1">
            <input type="text" name="currency" id="currency" placeholder="USD" class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md" />
          </div>
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small mt-8 text-gray-500">
            Payment Terms:
          </dt>
          <dd className="mt-1 text-left text-gray-900">
          <div class="mt-1">
            <input type="text" name="payment" id="payment" placeholder="Monthly" class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md" />
          </div>
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">
            Tags:
          </dt>
          <dd className="mt-1 text-left text-gray-900">
          <div class="mt-1">
            <input type="text" name="tagname" id="tagname"  placeholder="Tagname" class="shadow-sm h-10 focus:ring-indigo-500 pl-2 focus:border-indigo-500 block w-60 text-base border border-gray-400 rounded-md" />
          </div>
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-500">
            Vertical:
          </dt>
          <dd className="mt-1 text-left text-gray-900">
          <div class="mt-1">
            <input type="text" name="vertical" id="vertical" placeholder="Education" class="shadow-sm h-10 focus:ring-indigo-500 pl-2 focus:border-indigo-500 block w-60 text-base border border-gray-400 rounded-md" />
          </div>
          </dd>
        </div>
      </dl>
    </div>
    </div>
}

export default AdvertiserDetailsEdit