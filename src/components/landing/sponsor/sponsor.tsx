import { Stack } from '@mui/material'

export function Sponsor() {
  return (
    <Stack
      id="sponsor"
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: '40px',
        background: 'url("sponsor.svg")',
        height: '60vw',
        width: '100vw',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <a href="https://mohaymen.ir/fa/" target="_blank">
          <img src="sponsor-logo.svg" style={{ width: '20vw' }} />
        </a>
      </div>
    </Stack>
  )
}
