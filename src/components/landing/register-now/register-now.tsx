import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'

export function RegisterNow() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Stack
      alignItems="center"
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/register-now.svg)`,
        height: matches ? '60vw' : '140vw',
        width: '100vw',
        maxWidth: '100vw',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: matches ? '100vw auto' : 'contain',
      }}
    >
      <Typography
        sx={{
          fontSize: matches ? '4vw' : '5vw',
          textAlign: 'center',
          letterSpacing: '0.015em',
          marginTop: '3.75vw',
        }}
      >
        همیـن حالا{' '}
        <Typography
          sx={{
            fontFamily: 'IRANSansBold',
            fontSize: matches ? '4vw' : '10vw',
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
          fontSize: matches ? '3.75vw' : '6vw',
          width: matches ? '25vw' : '35vw',
          marginLeft: '1vw',
          lineHeight: '118.19%',
          marginTop: matches ? '5.75vw' : '8vw',
        }}
      >
        ثبــت نـام
      </Button>
    </Stack>
  )
}
