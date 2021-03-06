import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Burger from './Burgers'
import Fries from './Fries'
import Shake from './Shakes'
import Users from './Users'
import Image from './Image'
import SignupForm from './SignupForm'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/burgers" component={Burger} />
      <Route path="/fries" component={Fries} />
      <Route path="/shakes" component={Shake} />
      <Route path="/users" component={Users} />
      <Route path="/uploadImage" component={Image} />
      <Route path="/signup" component={SignupForm} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))