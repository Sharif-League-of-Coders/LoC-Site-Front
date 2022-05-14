import { Stack, Typography } from '@mui/material'
import { Resources } from 'components/dashboard/resources'
import { State } from 'components/dashboard/state'
import { NavBar } from 'common/nav-var'

export function Dashboard() {
  return (
    <Stack
      sx={{
        direction: 'rtl',
        background: 'url(dashboard.svg)',
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
