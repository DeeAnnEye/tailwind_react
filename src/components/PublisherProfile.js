import React from "react";

const PublisherProfile = () => {
return <div class="border border-gray mx-2.5 rounded-lg h-32 sm:px-8 md:flex md:items-center md:justify-between lg:px-8">
<div class="flex items-start">
  <div class="flex-shrink-0">
    <div class="relative">
      <img class="h-20 w-20 rounded-3xl" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
      <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"></span>
    </div>
  </div>
  <div className="ml-2">
    <h1 class="text-3xl font-bold text-gray-900">Publisher Name</h1>
    <p class="text-lg text-gray-400">
   
  Company: Adv Llc
    </p>
  </div>
</div>
<div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
  <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
    Edit
  </button>
  <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
    Website
  </button>
</div>
</div>
}

export default PublisherProfile