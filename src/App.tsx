import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppRouter from './AppRouter'
import { AppProvider } from './context'
import { theme } from './theme'
import './theme/fonts.css'


export default function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (

      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <AppProvider>
            <AppRouter />
          </AppProvider>
        </ChakraProvider>
      </QueryClientProvider>

  )
}
