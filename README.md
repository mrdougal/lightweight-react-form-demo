# Form controls using "Vanilla React"

redux-form is popular but it's super heavy, and we possibly don't need it. This is a demo of how we can leverage the default API's in react. This demo is using `React 16.8` and it's new context api

- Simple form with input feeding into form state with minimal boilerplate
- Form with lots of inputs, so can see how it performs. _Although i haven't done any real performance testing_
- Form with custom onChange events

## Getting started

To set up your environment, run:

    bin/setup

To start a local server:

    bin/start


## TODO, exercises for the reader

- ~~Validations, using the browsers [checkValidity function](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity)~~

- Controlled inputs, via render props? (Context isn't suited to high frequency updates)
