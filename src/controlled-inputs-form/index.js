import React from "react"
import FormWrapper from "../form-wrapper"
import "./controlled-inputs.css"

const FormInput = ({
  name,
  label,
  value,
  defaultValue,
  onChange,
  type = "text"
}) => (
  <React.Fragment>
    <label htmlFor={name}>{label || name}</label>
    <input
      id={name}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
    />
  </React.Fragment>
)

const CustomOnChangeForm = () => (
  <FormWrapper
    defaultValues={{
      first_name: "Tom",
      address: "123 Example street, Somewhereville 3019"
    }}
    render={({ values, onChange }) => (
      <React.Fragment>
        <h1>Controlled inputs</h1>

        <fieldset>
          <ol className="form--nameFields">
            <li>
              <FormInput
                name="first_name"
                label="First Name"
                value={values.first_name}
                onChange={onChange}
              />
            </li>

            <li>
              <FormInput
                name="last_name"
                label="Last Name"
                defaultValue={values.last_name}
              />
            </li>

            <li>
              <FormInput
                name="email"
                label="Email"
                defaultValue={values.email}
                type="email"
              />
            </li>
          </ol>
        </fieldset>

        <fieldset>
          <FormInput
            name="address"
            label="Address"
            defaultValue={values.address}
          />
        </fieldset>

        <fieldset>
          <button type="submit">Save</button>
        </fieldset>

        <details>
          <summary>State</summary>
          <pre>{JSON.stringify(values, null, 3)}</pre>
        </details>
      </React.Fragment>
    )}
  />
)

export default CustomOnChangeForm
