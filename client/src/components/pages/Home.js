import React from 'react'

// Import components
import Contacts from '../contacts/Contacts'

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/* ContactForm */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  )
}

export default Home
