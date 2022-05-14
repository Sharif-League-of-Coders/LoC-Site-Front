import json2mq from 'json2mq'
import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { NavBar } from '../../../common/nav-var'

const StyledLargeTypography = styled(Typography)`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 5vw !important;
  line-height: 5vw !important;
  letter-spacing: 0.415em !important;

  text-align: center;
  text-transform: uppercase;

  color: #323232;
`

const StyledSmallTypography = styled(Typography)`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 2.5vw;
  line-height: 5vw;

  text-align: center;
  letter-spacing: 0.23em;
  text-transform: uppercase;

  color: #323232;
`

export function Header() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Box
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/header.png)`,
        width: '100vw',
        height: '60vw',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw auto',
      }}
    >
      <NavBar />

      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '7vw',
        }}
      >
        <StyledLargeTypography>League</StyledLargeTypography>
        <StyledSmallTypography>of</StyledSmallTypography>
        <StyledLargeTypography>Coders</StyledLargeTypography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            height: '5vw',
            width: '25vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5vw',
          }}
        >
          <Box
            sx={{
              maxWidth: '10vw',
              maxHeight: '5vw',
              width: '10vw',
              height: '5vw',
            }}
          >
            <a href="https://ssc.ce.sharif.edu">
              <img width="100%" height="100%" src="assets/logos/ssc-logo.svg" />
            </a>
          </Box>
          <Box
            sx={{
              maxWidth: '10vw',
              maxHeight: '5vw',
              width: '10vw',
              height: '5vw',
            }}
          >
            <a href="https://locsharif.com">
              <img width="100%" height="100%" src="assets/logos/logo.svg" />
            </a>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
