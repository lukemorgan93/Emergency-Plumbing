import { Box, Text, VStack } from '@chakra-ui/react'

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

export function Reviews() {
  return (
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
  )
}
