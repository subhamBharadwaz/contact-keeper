import React, { useReducer } from 'react'

import ContactContext from './contactContext'
import contactReducer from './contactReducer'

// Import 3rd party packages
import { v4 as uuid } from 'uuid'

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Subham Johnson',
        email: 'subham@gmail.com',
        phone: '112-111-111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Hill Johnson',
        email: 'hill@gmail.com',
        phone: '111-111-111',
        type: 'professional',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  //   Add Contact
  const addContact = (contact) => {
    contact.id = uuid()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set Current Contact

  // CLear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
