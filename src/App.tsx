import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChartPage from "./pages/chartPage";
import Layout from "./components/Layout";
import AddContact from "./components/AddContact";
import { useDispatch } from "react-redux";
import React, { Dispatch, useCallback, useState } from "react";
import { addContact, editContact } from "./store/actionCreators";
import ShowContact from "./pages/showContact";
import { EditContact } from "./components/EditContact";

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
