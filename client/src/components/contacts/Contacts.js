import React, { useContext, Fragment } from 'react'

import ContactContext from '../../context/contact/contactContext'

// Import 3rd party packages
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Import components
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, filtered } = contactContext

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts
