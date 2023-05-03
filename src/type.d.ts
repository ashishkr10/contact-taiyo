interface IContact {
  
    fName: string;
    lName: string;
    status: "Active" | "Inactive";
}

type ContactState = {
  contacts: IContact[]
}

type ContactAction = {
  type: string
  contact: IContact
}
type EditAction = {
  type: string
  contact: IContact
  index:any
}

type DispatchType = (args: ContactAction) => ContactAction