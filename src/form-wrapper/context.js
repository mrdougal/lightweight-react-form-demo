import React from "react"

const FormWrapperContext = React.createContext()
const { Provider, Consumer } = FormWrapperContext

export {
  FormWrapperContext,
  Provider as FormWrapperProvider,
  Consumer as FormWrapperConsumer
}
