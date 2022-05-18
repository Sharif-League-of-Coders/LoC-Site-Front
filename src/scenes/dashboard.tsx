import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { Resources } from 'components/dashboard/resources'
import { State } from 'components/dashboard/state'
import { NavBar } from 'common/nav-bar'
import json2mq from 'json2mq'

export function Dashboard() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      sx={{
        direction: 'rtl',
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/dashboard.svg)`,
        width: '100vw',
        height: '60vw',
        maxWidth: '98vw',
        backgroundSize: '100vw auto',
      }}
    >
      <NavBar />
      <Box
        sx={{
          width: '10vw',
          margin: matches ? '0 4vw' : '3vw 7vw',
          borderBottom: '3px solid black',
        }}
      >
        <Typography
          fontSize={matches ? '1.5vw' : '3.5vw'}
          lineHeight={matches ? '2vw' : '5vw'}
        >
          داشبورد
        </Typography>
      </Box>

      <Stack
        flexDirection={matches ? 'row' : 'column'}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: matches ? 0 : '3vw',
        }}
      >
        <Resources></Resources>
        <State></State>
      </Stack>
    </Stack>
  )
}
