import { GET_ALL_CONTACTS } from "./actionTypes";

export const getAllContacts = content => ({
    type: GET_ALL_CONTACTS,
    payload: { contacts: content }
})