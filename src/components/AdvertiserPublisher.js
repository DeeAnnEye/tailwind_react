import React from "react";

const AdvertiserPublisher = () => {
return <div className="bg-white max-w-1/2 h-3/5 min-w-1/2 shadow overflow-hidden sm:rounded-lg">
<div className=" flex justify-between px-4 py-5 sm:px-6">
  <div className="text-left text-xl text-gray-800">
    Publisher Access
  </div>
</div>
<div class="flex flex-col sm:border-t pl-2 pb-6 sm:border-gray-200 sm:pt-5">
    <div class="flex flex-row p-2">
<label for="approved" class="block text-base pr-36 text-gray-500">
  Approved:
</label>
<div class="sm:col-span-2">
  <select id="publisher" name="publisher" autocomplete="publisher-name" class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
    <option>List of Publishers</option>
    <option>Publisher 2</option>
    <option>Publisher 3</option>
  </select>
</div>
</div>
<div class="flex flex-row p-2">
<label for="blocked" class="block text-base pr-40 text-gray-500">
  Blocked:
</label>
<div class="sm:col-span-2">
  <select id="publisher" name="publisher" autocomplete="publisher-name" class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
    <option>List of Publishers</option>
    <option>Publisher 2</option>
    <option>Publisher 3</option>
  </select>
</div>
</div>
</div>
</div>

}

export default AdvertiserPublisher