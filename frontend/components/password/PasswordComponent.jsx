import React, { useState } from 'react';
import CreateNew from './CreateNew';
import CreateRandomPassword from './CreateRandomPassword';
import YourPasswords from './YourPasswords';

const PasswordComponent = () => {
	const [current, setCurrent] = useState('saved');

	return (
    <div className="w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          onChange={(e) => setCurrent(e.target.value)}
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 sm:text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="saved">Your passwords</option>
          <option value="create">Create new password</option>
        </select>
      </div>
      <ul
        className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        <li className="w-full">
          <button
            onClick={() => setCurrent("saved")}
            className={` text-lg inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${
              current === "saved" ? "text-red-500" : ""
            }`}
          >
            Your passwords
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setCurrent("create")}
            className={`text-lg inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${
              current === "create" ? "text-red-500" : ""
            }`}
          >
            Create new password
          </button>
        </li>
      </ul>
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        {current === "create" ? (
          <div>
            <CreateNew />
          </div>
        ) : (
          <div>
            <YourPasswords />
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordComponent;
