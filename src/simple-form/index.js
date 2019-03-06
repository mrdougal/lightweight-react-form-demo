import React from "react"
import FormWrapper from "../form-wrapper"

const SimpleForm = () => (
  <FormWrapper>
    <h1>Simple form</h1>
    <fieldset>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
    </fieldset>

    <fieldset>
      <button type="submit">Log me in</button>
    </fieldset>
  </FormWrapper>
)

export default SimpleForm
