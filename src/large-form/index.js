import React from "react"
import FormWrapper from "../form-wrapper"
import "./large-form.css"

const generateFields = size => {
  const fields = []
  for (let index = 1; index <= size; index++) {
    fields.push(index)
  }

  return fields
}

const LargeForm = () => (
  <FormWrapper>
    <h1>Large Form</h1>
    <p>With 100 fields</p>

    <fieldset>
      <div className="largeForm--fields">
        {generateFields(100).map(field => (
          <div key={field}>
            <label htmlFor={field}>Field Nº{field}</label>
            <input id={field} name={field} />
          </div>
        ))}
      </div>
    </fieldset>

    <fieldset>
      <button type="submit">Save</button>
    </fieldset>
  </FormWrapper>
)

export default LargeForm
