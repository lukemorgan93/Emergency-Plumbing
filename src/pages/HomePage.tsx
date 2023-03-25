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
} from '@chakra-ui/react'
import React from 'react'

interface Review {
  author: string
  content: string
  rating: number
}

const reviews: Review[] = [
  {
    author: 'John Doe',
    content: 'Great service, prompt response and professional workmanship!',
    rating: 5,
  },
  {
    author: 'Jane Smith',
    content:
      'The plumber arrived quickly and fixed my leaky faucet in no time. Highly recommended!',
    rating: 4.5,
  },
  // add more reviews here
]

const HomePage: React.FC = () => {
  return (
    <>
      {/* <head>
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="5d2102cf-f776-420d-b9ce-f459f46354f5"
        />
      </head> */}
      {/* 
      <Helmet htmlAttributes={{ 'data-react': '' }}>
        <title>Emergency Plumber - Fast, Reliable & Affordable Service</title>
        <meta
          name="description"
          content="24/7 Emergency plumbing services for all your urgent plumbing needs. Fast, reliable and affordable solutions by our licensed plumbers."
        />
        <meta
          name="keywords"
          content="emergency plumber, 24/7 plumber, plumbing services, affordable plumbing"
        />
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="5d2102cf-f776-420d-b9ce-f459f46354f5"
        />
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="5d2102cf-f776-420d-b9ce-f459f46354f5"
        />
      </Helmet> */}
      <Box>
        <Flex p="4">
          <Heading size="lg">Emergency Plumber</Heading>
          <Spacer />
          <HStack spacing="4">
            <Link href="mailto:contact@example.com">Email</Link>
            <Link href="tel:18001234567">Call: 1800 123 4567</Link>
          </HStack>
        </Flex>
        <VStack align="center" spacing="8" p="8">
          <Text fontSize="2xl">
            24/7 Emergency Plumbing Services For All Your Urgent Needs
          </Text>
          <Image
            src="/plumbing-image.jpg"
            alt="Emergency Plumber"
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
            href="mailto:contact@example.com"
            colorScheme="blue"
          >
            Contact Us Now
          </Button>
          <Heading size="lg">Customer Reviews</Heading>
          <VStack spacing="4" w="100%">
            {reviews.map((review, index) => (
              <Box
                key={index}
                p="4"
                borderRadius="md"
                borderWidth="1px"
                boxShadow="md"
              >
                <Text fontWeight="bold">{review.author}</Text>
                <Text fontStyle="italic">"{review.content}"</Text>
                <Text>Rating: {review.rating} / 5</Text>
              </Box>
            ))}
          </VStack>
        </VStack>
        <Heading as="h2" size="lg" fontWeight="bold" marginBottom={4}>
          Customer Reviews
        </Heading>
        <Box width="100%" height="240px" marginBottom={6}>
          <div
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="641f1e8df20478e0d1244f92"
            data-style-height="24px"
            data-style-width="100%"
            data-theme="light"
            data-min-review-count="10"
            data-without-reviews-preferred-string-id="1"
            data-style-alignment="center"
          >
            <a
              href="https://uk.trustpilot.com/review/main--moonlit-gumdrop-9e99bd.netlify.app"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>

          <div
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="641f1e8df20478e0d1244f92"
            data-style-height="52px"
            data-style-width="100%"
          >
            <a
              href="https://uk.trustpilot.com/review/main--moonlit-gumdrop-9e99bd.netlify.app"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </Box>

        <Text fontSize="sm" marginBottom={4}>
          © {new Date().getFullYear()} Emergency Plumber 24/7. All rights
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
        </Box>
      </Box>
    </>
  )
}

export default HomePage
