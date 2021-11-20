import React from "react";

const ScheduleChangeTable = () => {
    return <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
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
            class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            TIMESTAMP
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">323</div>
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
            <div class="text-sm text-gray-500">323</div>
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
            <div class="text-sm text-gray-500">323</div>
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
            <div class="text-sm text-gray-500">323</div>
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
            <div class="text-sm text-gray-500">323</div>
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
}

export default ScheduleChangeTable