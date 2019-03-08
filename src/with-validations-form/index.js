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
      {({ valid, getValues }) => (
        <React.Fragment>
          <h1>With validations form</h1>
          <p>
            Validation is handled by the "checkValidity" method provided by the
            browser
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

          <details>
            <summary>State</summary>
            <pre>{JSON.stringify({ valid, values: getValues() }, null, 3)}</pre>
          </details>
        </React.Fragment>
      )}
    </FormWrapperConsumer>
  </FormWrapper>
)

export default WithValidationsForm
