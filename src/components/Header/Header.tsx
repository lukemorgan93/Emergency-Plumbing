import { Box, Flex, Text } from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function Header() {
  return (
    <Flex bg="blue" boxSize={250} width={'full'} padding={15} justifyContent={"space-between"} alignItems={"center"}>
      <Flex direction={"column"}>
      <Text color={'white'} bg="blue" align={'left'}>All Plumbing Emergencies</Text>
      <Text color={'white'} bg="blue" align={'left'}>Quick Service On Emergency Call 24/7</Text>
      </Flex>
      <Text color={'white'} bg="blue" align={'right'}>Contact Us  Call: 1800 123 456</Text>
    </Flex>
  )
}

export default Header

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// Dont forget to rename the file and folder + use Uppercase
