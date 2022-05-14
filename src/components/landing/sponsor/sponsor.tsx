import { Box, Stack } from '@mui/material'

export function Sponsor() {
  return (
    <Stack
      id="sponsor"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: 'url("sponsor.svg")',
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
          <img src="sponsor-logo.svg" style={{ width: '20vw' }} />
        </a>
      </Box>
    </Stack>
  )
}
