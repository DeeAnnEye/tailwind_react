import React from "react";

const PublisherDetails = () => {
return  <div className="bg-none shadow overflow-hidden sm:rounded-lg">
<div className=" flex justify-between px-4 py-5 sm:px-6">
  <div className="text-left text-xl text-gray-800">
    Details
  </div>
</div>
<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
    <div className="text-left font-small text-gray-400">
        Address:
    </div>
    <div className="mt-1 text-left text-gray-600">
    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
    Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea
    </div>
    <div className="text-left font-small text-gray-400">
        Address:
    </div>
    <div className="mt-1 text-left text-gray-600">
    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
    Excepteur
    </div>
  <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-400">
        Currency:
      </dt>
      <dd className="mt-1 text-left text-gray-600">
        USD
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Payment Terms:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        Monthly
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Tags:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        Tag Name
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Vertical:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
        Education
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        Sign Up Date:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
      MM-DD-YYYY
      </dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-left font-small text-gray-500">
        IP Address:
      </dt>
      <dd className="mt-1 text-left text-gray-900">
      12.111.111
      </dd>
    </div>
  </dl>
</div>
</div>
}

export default PublisherDetails