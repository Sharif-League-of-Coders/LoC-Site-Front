import { Button, Stack, Typography } from '@mui/material'

export function RegisterNow() {
  return (
    <Stack
      alignItems="center"
      sx={{
        background: 'url(assets/background/desktop/register-now.svg)',
        height: '60vw',
        width: '100vw',
        maxWidth: '100vw',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw auto',
      }}
    >
      <Typography
        sx={{
          fontSize: '4vw',
          textAlign: 'center',
          letterSpacing: '0.015em',
          marginTop: '3.75vw',
        }}
      >
        همیـن حالا{' '}
        <Typography
          sx={{
            fontFamily: 'IRANSansBold',
            fontSize: '4vw',
            background:
              'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ثبـــــــت نــــــام
        </Typography>{' '}
        کنــیـد
      </Typography>
      <Button
        sx={{
          fontFamily: 'IRANSansBold !important',
          background:
            'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
          borderRadius: '94px',
          color: 'white',
          fontWeight: 900,
          fontSize: '3.75vw',
          width: '25vw',
          marginLeft: '1vw',
          lineHeight: '118.19%',
          marginTop: '5.75vw',
        }}
      >
        ثبت نام
      </Button>
    </Stack>
  )
}
