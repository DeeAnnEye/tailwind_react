import React from "react";

const BillingInvoice = () => {
    return (
        <div class="bg-white mt-2 shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 border border-b-gray">
        <h6 class="text-left leading-6 text-lg font-medium text-gray-700">
        Invoice Details
       </h6>
       </div>
            <div class="shadow mx-2 my-2 overflow-hidden border border-gray-200 sm:rounded-lg">
              <table class="divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DATE
                    </th>
                    <th
                      scope="col"
                      class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DUE DATE
                    </th>
                    <th
                      scope="col"
                      class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      AMOUNT
                    </th>
                    <th
                      scope="col"
                      class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      BALANCE
                    </th>
                    <th
                      scope="col"
                      class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                      <div class="text-sm text-gray-500">12/03/2021</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">
                        15/06/2021
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $122
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        $133                      
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                        Download
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
                      <div class="text-sm text-gray-500">12/03/2021</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">
                        15/06/2021
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $122
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        $133                      
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                        Download
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
                      <div class="text-sm text-gray-500">12/03/2021</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">
                        15/06/2021
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $122
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        $133                      
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                        Download
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
                      <div class="text-sm text-gray-500">12/03/2021</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">
                        15/06/2021
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $122
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        $133                      
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                        Download
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
                      <div class="text-sm text-gray-500">12/03/2021</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">
                        15/06/2021
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $122
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        $133                      
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href="/edit" class="text-indigo-600 hover:text-indigo-900">
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  
    );
}

export default BillingInvoice