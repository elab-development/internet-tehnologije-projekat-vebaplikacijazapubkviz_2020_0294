import React from "react";

const DropDown = ({ options = [], handleSelectChange }) => {
  return (
    <div>
      <select
        id="dropdown"
        name="dropdown"
        onChange={handleSelectChange}
        className="mt-1 h-10 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {options && options.length > 0 ? (
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))
        ) : (
          <option value="">No options available</option>
        )}
      </select>
    </div>
  );
};

export default DropDown;
