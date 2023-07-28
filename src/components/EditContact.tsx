import React, { useState } from "react";

//packages import
import { useNavigate } from "react-router-dom";

interface Props {
  editData: {
    fName: string;
    lName: string;
    status: any;
  };
  index: any;
  edit_contact: any;
}
interface IUser {
  fName: string;
  lName: string;
  status: any;
}

export const EditContact: React.FC<Props> = ({
  editData,
  index,
  edit_contact,
}) => {
  const [list, setList] = useState<IUser>(editData);

  const navigate = useNavigate();

  const handleContactData = (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    const { id, value, type } = e.currentTarget;
    console.log(value);
    if (type === "radio") {
      setList({ ...list, status: value });
    } else {
      setList({
        ...list,
        [id]: value,
      });
    }
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    edit_contact(list, index);
    navigate("/");
  };
  return (
    <div>
      <div className="flex justify-center mt-12">
        <form
          className="bg-white shadow-md rounded px-20 pt-10 pb-10 mb-8"
          onSubmit={handleEdit}
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fName"
              type="text"
              placeholder="First Name"
              required
              value={list.fName}
              onChange={handleContactData}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lName"
              type="text"
              placeholder="Last Name"
              required
              value={list.lName}
              onChange={handleContactData}
            />
          </div>

          <h3 className="mb-4 font-semibold text-black-900 dark:text-black">
            Status:
          </h3>
          <div className="flex items-center mb-4">
            <input
              id="status"
              type="radio"
              value="Active"
              name="status"
              onChange={handleContactData}
              checked={list.status === "Active" ? true : false}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
            >
              Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="status"
              type="radio"
              value="Inactive"
              name="status"
              checked={list.status === "Inactive" ? true : false}
              onChange={handleContactData}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
            >
              Inactive
            </label>
          </div>
          <div className="flex flex-column justify-between mt-6">
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
