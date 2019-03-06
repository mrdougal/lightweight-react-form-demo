import React from "react"
import FormWrapper from "../form-wrapper"

const Login = () => (
  <FormWrapper>
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

export default Login
