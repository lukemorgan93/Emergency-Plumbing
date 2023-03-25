import { ChakraProviderDecorator } from '@chakra-ui/storybook-addon/dist/feature/decorator/ChakraProviderDecorator'

import { theme } from '../src/theme/index.ts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
}

export const decorators = [ChakraProviderDecorator]
