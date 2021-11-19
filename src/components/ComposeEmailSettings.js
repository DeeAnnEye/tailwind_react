import React from "react";

const ComposeEmailSettings = () => {
  return (
    <div class="bg-white mt-4 overflow-hidden">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-2 py-5 text-gray-700">
          Compose Email
        </div>
      </div>
      <div className="border-t border-gray-200 mx-8 px-4 py-5 sm:px-6">
        <div className="flex flex-row gap-8 my-4">
          <div className="text-left text-gray-500">From Name:</div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              class="shadow-sm h-10 w-80 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md"
              placeholder="ATM"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 my-4">
          <div className="text-left text-gray-500">From Email:</div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              class="shadow-sm h-10 w-80 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 my-4">
          <div className="text-left text-gray-500">Subject:</div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              class="shadow-sm ml-7 h-10 w-80 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md"
              placeholder="Hot Offers"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 my-4">
          <div className="text-left text-gray-500">Message:</div>
          <div>
            <textarea
              rows="20"
              name="comment"
              id="comment"
              style={{width:'80vw'}}
              class="shadow-sm ml-4 mr-10 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmailSettings;
