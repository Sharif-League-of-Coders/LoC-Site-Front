import { Box, Stack, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'

export function Sponsor() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Stack
      id="sponsor"
      justifyContent={matches ? 'center' : 'flexStart'}
      alignItems="center"
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/sponsor.svg)`,
        height: matches ? '60vw' : '100vw',
        width: '100vw',
        maxWidth: '100vw',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: matches ? '100vw auto' : 'contain',
      }}
    >
      <Box
        sx={{
          padding: matches ? '1.75vw' : '10vw 0 0',
        }}
      >
        <a href="https://mohaymen.ir/fa/" target="_blank">
          <img
            src="assets/logos/sponsor-logo.svg"
            style={{ width: matches ? '20vw' : '35vw' }}
          />
        </a>
      </Box>
    </Stack>
  )
}
