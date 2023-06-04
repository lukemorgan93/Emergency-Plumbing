import { Box, Text } from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function MainText() {
  return (
    <Box bg="white" boxSize={250} width={'full'} padding={15}>
      <Text color={'black'} bg="white" align={'center'}> WELCOME TO</Text>
      <Text color={'blue'} bg="white" align={'center'}>ALL PLUMBING EMERGENCIES</Text>
      <Text color={'black'} bg="white" align={'center'}>Your reliable and trusted plumber in Cambridge. We understand that plumbing</Text>
      <Text color={'black'} bg="white" align={'center'}>emergencies can happen at any time, which is why we offer our services 24/7, 365 days a year.</Text>
      <Text color={'black'} bg="white" align={'center'}>Our team of expert plumbers are fully qualified and experiences in dealing with all kinds of plumbing</Text>
      <Text color={'black'} bg="white" align={'center'}>emergencies, from burst pipes and leas to boiler breakdowns and blocked drains. We use the latest</Text>
      <Text color={'black'} bg="white" align={'center'}>technology and equipment to diagnose and resolve issues quickly and efficiently, saving you time and money.</Text>
    </Box>
  )
}

export default MainText

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// Dont forget to rename the file and folder + use Uppercase
