import React from "react";

const TrackingTable = () => {
    return  <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
    <table class="w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            OFFER NAME
          </th>
          <th
            scope="col"
            class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            TRACKING DOMAIN
          </th>
          <th
            scope="col"
            class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
           ACTION
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">Offer 1</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Exampletracking.com</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            <a href="/edit">Edit </a>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0">Offer 2</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Exampletracking.com</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            <a href="/edit">Edit </a>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0">Offer 3</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Exampletracking.com</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            <a href="/edit">Edit </a>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0">Offer 4</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Exampletracking.com</div>
          </td>          
          <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            <a href="/edit">Edit </a>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0">Offer 5</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Exampletracking.com</div>
          </td>
         <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            <a href="/edit">Edit </a>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
}

export default TrackingTable