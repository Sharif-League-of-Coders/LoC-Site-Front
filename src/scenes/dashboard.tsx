import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { Resources } from 'components/dashboard/resources'
import { State } from 'components/dashboard/state'
import { NavBar } from 'common/nav-bar'
import json2mq from 'json2mq'
import { Information } from 'components/dashboard/team-information/information'
import { TeamMaking } from 'components/dashboard/team-information/team'
import { MailBoxModal } from '../components/dashboard/mail-box-modal'
import { useState } from 'react'

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
      <NavBar setIsMailBoxModalOpen={setIsMailBoxModalOpen}/>
      <MailBoxModal isOpen={isMailBoxModalOpen} setIsOpen={setIsMailBoxModalOpen}/>

      <Stack
        flexDirection={matches ? 'row' : 'column'}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: matches ? 0 : '3vw',
          
        }}
      >

        <Information />
        <TeamMaking />
        {/*<Resources></Resources>*/}
        {/*<State></State>*/}
      </Stack>
    </Stack>
  )
}
