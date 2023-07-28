import "./App.css";
import React, { Dispatch, useCallback, useState } from "react";

//packages import
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

//redux imports
import { addContact, editContact } from "./store/actionCreators";

//components imports
import Layout from "./components/Layout";
import { EditContact } from "./components/EditContact";

//pages imports
import ChartPage from "./pages/chartPage";
import AddContact from "./components/AddContact";
import ShowContact from "./pages/showContact";

interface IUser {
  fName: string;
  lName: string;
  status: string;
}

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [editData, setEditData] = useState<IUser>({
    fName: "",
    lName: "",
    status: "",
  });
  const [index, setIndex] = useState<number>(0);
  const edit_contact = useCallback(
    (list: IContact, index: any) => dispatch(editContact(list, index)),
    [dispatch]
  );
  const saveContact = useCallback(
    (contact: IContact) => dispatch(addContact(contact)),
    [dispatch]
  );
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ShowContact setEditData={setEditData} setIndex={setIndex} />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout>
              <AddContact saveContact={saveContact} />
            </Layout>
          }
        />
        <Route
          path="/edit"
          element={
            <Layout>
              <EditContact
                editData={editData}
                index={index}
                edit_contact={edit_contact}
              />
            </Layout>
          }
        />
        <Route
          path="/chart"
          element={
            <Layout>
              <ChartPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
