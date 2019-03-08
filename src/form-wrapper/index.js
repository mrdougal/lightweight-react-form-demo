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
    this.form = React.createRef()
    this.state = {
      loading: false,
      errors: null,
      values: props.defaultValues || {},
      valid: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    const { name, value } = event.target
    const { values } = this.state
    const valid = this.validate()

    console.info("form change", { name, value })
    this.setState({ valid, values: { ...values, [name]: value } })
  }

  onSubmit(event) {
    event.preventDefault()
    console.info("form submit", this.state.values)
  }

  validate() {
    const { current } = this.form

    if (!current.checkValidity) {
      // in case the browser doesn't support checkValidity we return true. Otherwise users won't be able to submit at all
      return true
    }

    return current.checkValidity()
  }

  render() {
    const { render, children } = this.props
    const { valid, values } = this.state
    const { onChange } = this

    return (
      <FormWrapperProvider value={{ onChange, valid }}>
        <form onChange={onChange} onSubmit={this.onSubmit} ref={this.form}>
          {render
            ? render({
                valid,
                values,
                onChange
              })
            : children}
        </form>
      </FormWrapperProvider>
    )
  }
}

export { FormWrapperContext, FormWrapperConsumer }
export default FormWrapper
