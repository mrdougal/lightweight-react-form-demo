import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import LargeForm from "./large-form"
import "./app.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/large-form" component={LargeForm} />
          <Login />
        </Switch>
      </Router>
    )
  }
}

export default App
