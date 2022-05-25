import { Stack, useMediaQuery } from '@mui/material'
import { NavBar } from 'common/nav-bar'
import json2mq from 'json2mq'
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
          // zIndex:100,
        }}
      >

        {/*<Information />*/}
        <TeamMaking />
        {/*<Resources></Resources>*/}
        {/*<State></State>*/}
      </Stack>
    </Stack>
  )
}
