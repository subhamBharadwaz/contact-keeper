import React, { useReducer } from 'react'

// Import 3rd party packages
import uuid from 'uuid'

import ContactContext from './contactContext'
import contactReducer from './contactReducer'
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
        id: 1,
        name: 'Subham Johnson',
        email: 'subham@gmail.com',
        phone: '112-111-111',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Hill Johnson',
        email: 'hill@gmail.com',
        phone: '111-111-111',
        type: 'professional',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  //   Add Contact

  // Delete Contact

  // Set Current Contact

  // CLear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
