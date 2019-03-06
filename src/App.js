import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import SimpleForm from "./simple-form"
import LargeForm from "./large-form"
import ControlledInputs from "./controlled-inputs"
import "./app.css"

const MenuLink = ({ to, exact = false, children }) => (
  <li>
    <NavLink activeClassName="active" to={to} exact={exact}>
      {children}
    </NavLink>
  </li>
)

const Navigation = () => (
  <menu className="mainNavigation">
    <ul>
      <MenuLink to="/" exact>
        Simple Form
      </MenuLink>
      <MenuLink to="/large-form">Large Form</MenuLink>
      <MenuLink to="/controlled-inputs">Controlled Inputs</MenuLink>
    </ul>
  </menu>
)

const App = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route path="/large-form" component={LargeForm} />
          <Route path="/controlled-inputs" component={ControlledInputs} />
          <SimpleForm />
        </Switch>
      </main>
    </React.Fragment>
  </Router>
)

export default App
