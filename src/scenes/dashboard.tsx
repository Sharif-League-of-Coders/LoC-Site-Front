import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { NavBar } from 'common/nav-bar'
import json2mq from 'json2mq'
import { TeamMaking } from 'components/dashboard/team/team'
import { MailBoxModal } from '../components/dashboard/mail-box-modal'
import { useState } from 'react'
import { Resources } from '../components/dashboard/resources'
// import { State } from '../components/dashboard/state'

export function Dashboard() {
  const [isMailBoxModalOpen, setIsMailBoxModalOpen] = useState(false)

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
      <NavBar setIsMailBoxModalOpen={setIsMailBoxModalOpen} />
      <MailBoxModal
        isOpen={isMailBoxModalOpen}
        setIsOpen={setIsMailBoxModalOpen}
      />
      <Box
        sx={{
          margin: matches ? '1.5vw' : '2.5vw',
          padding: matches ? 0 : '3vw',
        }}
      >
        <Typography
          sx={{
            borderBottom: '1px solid black',
            width: matches ? '10vw' : '24vw',
          }}
        >
          داشبورد
        </Typography>
        <Stack
          flexDirection={matches ? 'row' : 'column'}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ marginTop: matches ? '1.5vw' : '2.5vw' }}
        >
          {/*<Information />*/}
          <TeamMaking />
          <Resources></Resources>
          {/*<State></State>*/}
        </Stack>
      </Box>
    </Stack>
  )
}
