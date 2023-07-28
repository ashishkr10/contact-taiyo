import * as actionTypes from "./actionTypes"

const initialState: ContactState = {
  contacts: [
    {
    
      fName: "Deepak",
      lName: "Yadav",
      status: "Inactive",
    },
    {
     
      fName: "Ravi",
      lName: "Rishav",
      status: "Active",
    },
    ],
}

const reducer = (
  state: ContactState = initialState,
  action: any
): ContactState => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      const newContact: IContact = {
       
        fName: action.contact.fName,
        lName: action.contact.lName,
        status: action.contact.status,
      }
      return {
        ...state,
        contacts: state.contacts.concat(newContact),
      }
    case actionTypes.REMOVE_CONTACT:
      const updatedContacts: IContact[] = state.contacts.filter(
        contact => contact.fName !== action.contact.fName
      )
      return {
        ...state,
        contacts: updatedContacts,
      }
    case actionTypes.EDIT_CONTACT:
      let temp:IContact[] = state.contacts;
      temp[action.index] = action.contact;
      return {
        ...state,
        contacts:[...temp]
      }
  }
  return state
}

export default reducer