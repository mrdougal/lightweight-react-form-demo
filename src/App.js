import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import LargeForm from "./large-form"
import ControlledInputs from "./controlled-inputs"
import "./app.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/large-form" component={LargeForm} />
          <Route path="/controlled-inputs" component={ControlledInputs} />
          <Login />
        </Switch>
      </Router>
    )
  }
}

export default App
