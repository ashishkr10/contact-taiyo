import React, { useCallback } from "react";

//packages import
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//redux imports
import { removeContact } from "../store/actionCreators";

type Props = {
  setEditData: (article: IContact | any) => void;
  setIndex: (article: any) => void;
};

const ShowContact: React.FC<Props> = ({ setEditData, setIndex }) => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const contacts: IContact[] = useSelector(
    (state: ContactState) => state.contacts
  );

  const deleteContant = useCallback(
    (contant: IContact) => dispatch(removeContact(contant)),
    // eslint-disable-next-line
    [dispatch, removeContact]
  );

  const handleEdit = (contant: IContact, i: number) => {
    setEditData(contant);
    setIndex(i);
    navigate("./edit");
  };
  if (contacts === null) return <h1>Loading</h1>;
  return (
    <>
      <div className="flex justify-center mt-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/add")}
        >
          Create Contact
        </button>
      </div>
      <div className="flex flex-row space-x-4 mt-20 grid grid-cols-6 gap-4">
        {contacts.length !== 0
          ? contacts.map((contact: IContact, i: number) => (
              <div className="rounded overflow-hidden shadow-lg" key={i}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {contact.fName} {contact.lName}
                  </div>
                  <p className="text-gray-700 text-base">{contact.status}</p>

                  <div className="flex flex-column justify-between mt-6">
                    <div className="flex items-center justify-between mr-5">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => deleteContant(contact)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={() => handleEdit(contact, i)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "No Contacts available..."}
      </div>
    </>
  );
};

export default ShowContact;
