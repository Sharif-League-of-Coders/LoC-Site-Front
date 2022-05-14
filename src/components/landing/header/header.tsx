import json2mq from 'json2mq'
import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { NavBar } from '../../../common/nav-var'

interface TypographyProps {
  matches: boolean
}

const StyledLargeTypography = styled(Typography)<TypographyProps>(
  ({ matches }) => ({
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: matches ? '5vw' : '12vw',
    lineHeight: matches ? '5vw' : '11vw',
    letterSpacing: '0.415em',

    textAlign: 'center',
    textTransform: 'uppercase',

    color: '#323232',
  })
)

const StyledSmallTypography = styled(Typography)<TypographyProps>(
  ({ matches }) => ({
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 100,
    fontSize: matches ? '2.5vw' : '5vw',
    lineHeight: matches ? '5vw' : '10vw',

    textAlign: 'center',
    letterSpacing: '0.23em',
    textTransform: 'uppercase',

    color: '#323232',
  })
)

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
        height: matches ? '60vw' : '140vw',
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
        <StyledLargeTypography matches={matches}>League</StyledLargeTypography>
        <StyledSmallTypography matches={matches}>of</StyledSmallTypography>
        <StyledLargeTypography matches={matches}>Coders</StyledLargeTypography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: matches ? '5vw' : '12vw',
            width: matches ? '25vw' : '50vw',
            justifyContent: 'space-between',
            marginTop: '5vw',
          }}
        >
          <Box
            sx={{
              maxWidth: matches ? '10vw' : '24vw',
              maxHeight: matches ? '5vw' : '12vw',
              width: '100%',
              height: '100%',
            }}
          >
            <a href="https://ssc.ce.sharif.edu">
              <img width="100%" height="100%" src="assets/logos/ssc-logo.svg" />
            </a>
          </Box>
          <Box
            sx={{
              maxWidth: matches ? '10vw' : '24vw',
              maxHeight: matches ? '5vw' : '12vw',
              width: '100%',
              height: '100%',
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
