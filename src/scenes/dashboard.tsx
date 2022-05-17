import { Stack, Typography, useMediaQuery } from '@mui/material'
import { Resources } from 'components/dashboard/resources'
import { State } from 'components/dashboard/state'
import { NavBar } from 'common/nav-bar'
import json2mq from 'json2mq'

export function Dashboard() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
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
      <Typography>داشبورد</Typography>
      <Stack flexDirection="row" justifyContent="center">
        <Resources></Resources>
        <State></State>
      </Stack>
    </Stack>
  )
}