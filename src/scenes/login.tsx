import { Stack } from '@mui/material'
import { RegisterSection } from 'components/login/register-section'

export function Login() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        background: 'url(login.svg)',
        width: '100vw',
        height: '60vw',
        direction: 'rtl',
        fontFamily: 'IranSansLight !important',
      }}
    >
      <RegisterSection />
    </Stack>
  )
}
