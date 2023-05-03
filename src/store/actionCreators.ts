import * as actionTypes from "./actionTypes"

export function addContact(contact: IContact) {
  const action: ContactAction = {
    type: actionTypes.ADD_CONTACT,
    contact,
  }

  return simulateHttpRequest(action)
}

export function editContact(contact: IContact, index:any) {
  const action: EditAction = {
    type: actionTypes.EDIT_CONTACT,
    contact,
    index,
  }
  return simulateHttpRequest(action)
}

export function removeContact(contact: IContact) {
  const action: ContactAction = {
    type: actionTypes.REMOVE_CONTACT,
    contact,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ContactAction) {
  return (dispatch: DispatchType) => {
    // setTimeout(() => {
      dispatch(action)
    // }, 500)
  }
}
