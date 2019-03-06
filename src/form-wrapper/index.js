import React from "react"
import {
  FormWrapperContext,
  FormWrapperProvider,
  FormWrapperConsumer
} from "./context"
import "./form.css"

class FormWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      errors: null,
      values: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    const { name, value } = event.target
    const { values } = this.state

    console.info("form change", { name, value })
    this.setState({ values: { ...values, [name]: value } })
  }

  onSubmit(event) {
    event.preventDefault()
    console.info("form submit", this.state.values)
  }

  render() {
    return (
      <FormWrapperProvider value={{ onChange: this.onChange }}>
        <form onChange={this.onChange} onSubmit={this.onSubmit}>
          {this.props.children}
        </form>
      </FormWrapperProvider>
    )
  }
}

export { FormWrapperContext, FormWrapperConsumer }
export default FormWrapper
