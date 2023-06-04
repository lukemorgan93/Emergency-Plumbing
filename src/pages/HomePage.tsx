import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'
import Emergencies from '~/components/Emergencies/Emergencies'
import FrequentlyAskedQuestions from '~/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import Header from '~/components/Header/Header'
import MainImage from '~/components/MainImage/MainImage'
import MainText from '~/components/MainText/MainText'

import { Reviews } from '../components/Reviews/Reviews'
import { TrustPilot } from './../components/TrustPilot/TrustPilot'

const HomePage: React.FC = () => {
  return (
    <>
      <Box paddingX={"80px"}>
<Header></Header>
<MainImage></MainImage>
<MainText></MainText>
<SimpleGrid columns={3} spacing={"16px"} gap={"16px"} padding={"16px"} width={"100%"} justifyItems={"center"}>
<Emergencies></Emergencies>
<Emergencies></Emergencies>
<Emergencies></Emergencies>
<Emergencies></Emergencies>
<Emergencies></Emergencies>
<Emergencies></Emergencies>
</SimpleGrid>
<FrequentlyAskedQuestions></FrequentlyAskedQuestions>



        {/* <Flex p="4">
          <Heading size="lg">All Emergency Plumbing</Heading>
          <Spacer />
          <HStack spacing="4">
            <Link href="mailto:contact@allemergencyplumbing.com">
              Contact Us
            </Link>
            <Link href="tel:18001234567">Call: 1800 123 4567</Link>
          </HStack>
        </Flex>
        <VStack align="center" spacing="8" p="8">
          <Text fontSize="2xl">
            24/7 Emergency Plumbing Services For All Your Urgent Needs
          </Text>
          <Image
            src="/emergency-plumber.jpg"
            alt="All Emergency Plumbing"
            boxSize="400px"
          />
          <Text>
            Our team of licensed and experienced plumbers is available around
            the clock to provide fast, reliable, and affordable plumbing
            services for your home or business. No job is too big or too small,
            and we always prioritize emergencies.
          </Text>
          <Button
            as={Link}
            href="mailto:contact@allemergencyplumbing.com"
            colorScheme="blue"
          >
            Contact Us Now
          </Button>
          <Heading size="lg">Customer Reviews</Heading>
          <Reviews />
        </VStack>
        <Heading as="h2" size="lg" fontWeight="bold" marginBottom={4}>
          Customer Reviews
        </Heading>
        <TrustPilot />

        <Text fontSize="sm" marginBottom={4}>
          © {new Date().getFullYear()} All Emergency Plumbing. All rights
          reserved.
        </Text>
        <Box bg="gray.200" py={12} px={6}>
          <VStack spacing={6} textAlign="center" maxW="800px" mx="auto">
            <Heading size="xl">Need An Emergency Plumber?</Heading>
            <Text fontSize="lg">
              If you have a plumbing emergency, we're here to help. Our team of
              experts is available 24/7 to handle any plumbing issue you may be
              facing. From burst pipes to sewer backups, we've got you covered.
            </Text>
            <Button
              as={Link}
              href="tel:18001234567"
              colorScheme="blue"
              size="lg"
              fontWeight="bold"
            >
              Call Now: 1800 123 4567
            </Button>
          </VStack>
        </Box> */}
      </Box>
    </>
  )
}

export default HomePage
