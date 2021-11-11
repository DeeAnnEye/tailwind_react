import React from "react";

const AdvertiserUsertable = () =>{
return (
    <div class="flex flex-col bg-none h-2/4 flex-grow-0">
      <div class="-my-2 max-w-3xl overflow-x-hidden sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-1/4 sm:px-6 lg:px-8">
        <div className=" flex justify-between px-4 py-5 border border-t-0 border-b-gray rounded-md sm:px-6">
         <div className="text-left text-xl text-gray-800">
          Users
         </div>
         <div>
            <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
              ADD
           </button>
           </div>
          </div>
          <div class="shadow m-px overflow-hidden h-5/6 border border-gray-200 sm:rounded-lg">
            <table class="divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left max-w-xs text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left max-w-xs text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TITLE
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left max-w-xs text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left max-w-xs text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    IM
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left max-w-xs text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STATUS
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left max-w-xs text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="h-4">
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                      Change Password
                      Login
                    </a>
                  </td>
                </tr>
                <tr class="h-4">
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                      Change Password
                      Login
                    </a>
                  </td>
                </tr>
                <tr class="h-4">
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                      Inactive
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                      Change Password
                      Login
                    </a>
                  </td>
                </tr>
                <tr class="h-4">
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                      Change Password
                      Login
                    </a>
                  </td>
                </tr>
                <tr class="h-4">
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                      Inactive
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                      Change Password
                      Login
                    </a>
                  </td>
                </tr>
                <tr class="h-4">
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-wrap text-center text-sm font-medium">
                    <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                      Change Password
                      Login
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertiserUsertable