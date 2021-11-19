import React from "react";

const ScheduleChange = () => {
    return <div className="mt-4 bg-none shadow overflow-hidden sm:rounded-lg">
    <div className=" flex justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">Schedule Changes</div>
      <div>
        <button
          type="button"
          className="inline-flex mx-4 px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
        >
          ADD
        </button>
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
    <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              USER
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              CHANGE
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              TIMESTAMP
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">23</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Payout: $22</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">3:59 pm/EST</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">23</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Payout: $22</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">3:59 pm/EST</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">23</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Payout: $22</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">3:59 pm/EST</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">23</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Payout: $22</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">3:59 pm/EST</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">23</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Payout: $22</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">3:59 pm/EST</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
}

export default ScheduleChange