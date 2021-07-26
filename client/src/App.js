import React, { Fragment } from 'react'

import './App.css'

import ContactState from './context/contact/ContactState'
// Import 3rd party packages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Components
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  )
}

export default App