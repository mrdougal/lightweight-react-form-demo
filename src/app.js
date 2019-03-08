import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import SimpleForm from "./simple-form"
import LargeForm from "./large-form"
import CustomOnChangeForm from "./custom-onchange-form"
import WithValidations from "./with-validations-form"
import ControlledInputsForm from "./controlled-inputs-form"
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
      <MenuLink to="/custom-onchange">Custom onChange</MenuLink>
      <MenuLink to="/with-validations">Validations</MenuLink>
      <MenuLink to="/controlled-inputs">Controlled inputs</MenuLink>
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
          <Route path="/custom-onchange" component={CustomOnChangeForm} />
          <Route path="/with-validations" component={WithValidations} />
          <Route path="/controlled-inputs" component={ControlledInputsForm} />
          <SimpleForm />
        </Switch>
      </main>
    </React.Fragment>
  </Router>
)

export default App
