import React from "react"
import FormWrapper, { FormWrapperConsumer } from "../form-wrapper"

const Required = () => (
  <em className="requiredField">
    <sup className="requiredField">*</sup> Required
  </em>
)

const WithValidationsForm = () => (
  <FormWrapper>
    <FormWrapperConsumer>
      {({ valid }) => (
        <React.Fragment>
          <h1>With validations form</h1>
          <p>
            The inputs are marked as <pre>required</pre> and we hand the
            validaton off to the browser
          </p>

          <fieldset>
            <label htmlFor="email">
              Email <Required />
            </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">
              Password <Required />
            </label>
            <input type="password" id="password" name="password" required />
          </fieldset>

          <fieldset>
            <button disabled={!valid} type="submit">
              Log me in
            </button>
          </fieldset>
        </React.Fragment>
      )}
    </FormWrapperConsumer>
  </FormWrapper>
)

export default WithValidationsForm
