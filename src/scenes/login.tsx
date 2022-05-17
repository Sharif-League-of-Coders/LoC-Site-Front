import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'
import { RegisterSection } from 'components/login/register-section'

export function Login() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Box
      sx={{
        paddingTop: '5vw',
        boxSizing: 'border-box',
        position: 'relative',

        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/login.svg)`,
        maxWidth: '100vw',
        width: '100vw',
        height: matches ? '60vw' : '170vw',
        backgroundSize: '100vw auto',
        backgroundRepeat: 'no-repeat',
        direction: 'rtl',
        fontFamily: 'IranSansLight !important',
        overflowX: 'hidden',
      }}
    >
      <Stack
        alignItems="center"
        sx={{
          paddingTop: matches ? '5vw' : '10vw',
          boxSizing: 'border-box',
          direction: 'rtl',
          fontFamily: 'IranSansLight !important',
          overflowX: 'hidden',
          height: '100%',
          paddingX: matches ? 0 : '5vw',
        }}
      >
        <RegisterSection />
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          top: matches ? '2vw' : '3vw',
          right: '3vw',
          width: matches ? '5vw' : '12vw',
          height: matches ? '4vw' : '9.6vw',
        }}
      >
        <img src="/assets/logos/logo.svg" width="100%" height="100%" alt="league-of-coders"/>
      </Box>
      <Button
        href="/"
        sx={{
          position: 'absolute',
          top: matches ? '2vw' : '3vw',
          left: '3vw',
          width: matches ? '9vw' : '21vw',
          height: matches ? '4vw' : '9.6vw',
        }}
        endIcon={
          <Box width={matches ? '1.5vw' : '3vw'}>
            <img src="/assets/icons/arrow-left.svg" width="100%" height="100%" alt="left-arrow"/>
          </Box>
        }
      >
        <Typography
          fontSize={matches ? '1.25vw' : '3.2vw'}
          lineHeight={matches ? '4.1vw' : '10vw'}
          color="black"
          sx={{ marginLeft: '1vw' }}
        >
          بازگشت
        </Typography>
      </Button>
    </Box>
  )
}
