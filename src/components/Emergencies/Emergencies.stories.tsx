import React from 'react'

// Importing the `ExampleComponent` component defined in a different file '~/ExampleComponent'
import Emergencies from './Emergencies'

export default {
  component: Emergencies,
  title: 'components/Emergencies',
}

// Defining a new variable (Question) and assigning it an Arrow function which returns an instance of the `ExampleComponent` component.
export const Default = () => <Emergencies />

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// dont forget to rename the file and use CamelCasing

// Yarn Storybook to run and view
