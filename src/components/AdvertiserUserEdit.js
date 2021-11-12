import React from "react";

const AdvertiserUserEdit = () =>{
    return (
    <div class="ml-4 mb-10 mt-6 flex flex-col">
    <div class="-my-2 max-w-5xl overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h6 class="text-left leading-6 text-xl text-gray-800">
            User edit/change password action
          </h6>
        </div>
        <div class="shadow overflow-hidden mt-2 border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full border border-b-gray divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  NAME
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  EMAIL
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ROLE
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ACTIONS
                </th>
                {/* <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Edit</span>
          </th> */}
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input
                    id="search"
                    name="search"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="123"
                    type="text"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    id="search"
                    name="search"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Name"
                    type="text"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    id="search"
                    name="search"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="email"
                    type="text"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    id="search"
                    name="search"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Skype"
                    type="text"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    type="button"
                    class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Active
                    {/* <!-- Heroicon name: solid/chevron-down --> */}
                    <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
                {/* <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td> */}
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </td>
              </tr>

              {/* <!-- More people... --> */}
            </tbody>
          </table>
          <div className="flex flex-row p-10 items-center text-gray-600">
              <div className="flex flex-col items-start pr-10">
                  <div>
              New Password:
              </div>
            <input type="text" name="password" id="password" class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md" />
            </div>
            <div className="flex flex-col items-start">
                  <div>
            Confirm Password:
            </div>
            <input type="text" name="password" id="password" class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-400 rounded-md" />
           </div>
           <button type="button" class="inline-flex items-center ml-4 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>           
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default AdvertiserUserEdit