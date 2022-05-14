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
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/sponsor.svg)`,
        height: '60vw',
        width: '100vw',
        maxWidth: '100vw',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw auto',
      }}
    >
      <Box
        sx={{
          padding: '1.75vw',
        }}
      >
        <a href="https://mohaymen.ir/fa/" target="_blank">
          <img src="assets/logos/sponsor-logo.svg" style={{ width: '20vw' }} />
        </a>
      </Box>
    </Stack>
  )
}
