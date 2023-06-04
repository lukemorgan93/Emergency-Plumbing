import React from 'react'

// Importing the `Header` component defined in a different file '~/Header'
import Header from './Header'

export default {
  component: Header,
  title: 'components/Header',
}

// Defining a new variable (Question) and assigning it an Arrow function which returns an instance of the `Header` component.
export const Default = () => <Header />

// LUKE for copying this file use command + f search Header and press the > to replace all with your newly renamed component

// dont forget to rename the file and use CamelCasing

// Yarn Storybook to run and view
