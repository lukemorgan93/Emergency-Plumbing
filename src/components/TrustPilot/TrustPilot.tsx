import { Box } from '@chakra-ui/react'

export function TrustPilot({}) {
  return (
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
  )
}
