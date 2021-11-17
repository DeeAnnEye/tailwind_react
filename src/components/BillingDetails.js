import React from "react";

const BillingDetails = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">
          Billing Details
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Invoice Frequency:</dt>
            <dd className="mt-1 text-left text-gray-600">Monthly</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Payment Method:</dt>
            <dd className="mt-1 text-left text-gray-900">Wire</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
              Payable To:
            </dt>
            <dd className="mt-1 text-left text-gray-900">Company name / Individual</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Currency:</dt>
            <dd className="mt-1 text-left text-gray-900">USD</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Account Number:</dt>
            <dd className="mt-1 text-left text-gray-900">1233455776</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Bank Name:</dt>
            <dd className="mt-1 text-left text-gray-900">
              HDFC
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Routing/Swift/ABA/IBAN:</dt>
            <dd className="mt-1 text-left text-gray-900">123421</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Other Details:</dt>
            <dd className="mt-1 text-left text-gray-900">
              Details
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default BillingDetails;
