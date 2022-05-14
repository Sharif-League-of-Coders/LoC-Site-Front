import { Stack } from '@mui/material'
import { RegisterSection } from 'components/login/register-section'

export function Login() {
  return (
    <Stack
      alignItems="center"
      sx={{
        paddingTop: '5vw',
        background: 'url(login.svg)',
        maxWidth: '100vw',
        width: '100vw',
        height: '60vw',
        backgroundSize: '100vw auto',
        backgroundRepeat: 'no-repeat',
        direction: 'rtl',
        fontFamily: 'IranSansLight !important',
        overflowX: 'hidden',
      }}
    >
      <RegisterSection />
    </Stack>
  )
}
