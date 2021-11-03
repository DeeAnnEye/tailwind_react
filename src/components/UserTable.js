import React from "react";

const UserTable = () => {
  return (
    <div class="flex flex-col flex-grow-0">
      <div class="-my-2 max-w-3xl overflow-x-hidden sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-1/4 sm:px-6 lg:px-8">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h6 class="text-left leading-6 font-medium text-gray-800">Users</h6>
          </div>
          <div class="shadow mt-2 overflow-hidden border border-gray-200 sm:rounded-lg">
            <table class="divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ROLE
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STATUS
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                      Inactive
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                      Inactive
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">12</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Jane Cooper</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Jane.cooper@example.com
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
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
};

export default UserTable;
