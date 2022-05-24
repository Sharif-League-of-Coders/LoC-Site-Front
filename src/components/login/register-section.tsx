import { Stack, Tab, Tabs, styled, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import json2mq from 'json2mq'
import { TabPanel } from './components/tab-panel'

interface TabProps {
  matches: boolean
}

const StyledTab = styled(Tab)<TabProps>(({ matches }) => ({
  fontSize: matches ? '2vw' : '5vw',
  color: 'rgba(0, 0, 0, 0.5)',
  position: 'relative',
  zIndex: 999,
  height: matches ? '6vw' : '10vw',
  minHeight: matches ? '6vw' : '10vw',
  minWidth: '10vw',

  width: '30vw',
  padding: '.5vw .5vw',

  '&.Mui-selected': {
    background: '#FFFFFF',
    boxShadow: '0px 0px 1.75vw 5px rgba(0, 0, 0, 0.09)',
    borderRadius: matches ? '1vw' : '1.5vw',
    zIndex: '1000px',
    color: 'black',
  },
}))

const StyledTabs = styled(Tabs)<TabProps>(({ matches }) => ({
  marginBottom: '1vw',
  borderRadius: 'inherit',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-scroller': {
    height: matches ? '6vw' : '10vw',
  },
}))

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function RegisterSection({
  isRegistration,
}: {
  isRegistration: boolean
}) {
  const [value, setValue] = React.useState(isRegistration ? 0 : 1)
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showActivationEmailSentNotes, setShowActivationEmailSent] =
    useState(false)
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack
      sx={{
        width: matches ? '30vw' : '100%',
        boxShadow: '0px 0px 1.75vw 10px rgba(0, 0, 0, 0.09)',
        borderRadius: '18px',
      }}
    >
      <StyledTabs
        matches={matches}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ width: '100%' }}
      >
        <StyledTab
          matches={matches}
          label="ثبت نام"
          {...a11yProps(0)}
          sx={{ width: '50%' }}
        />
        <StyledTab
          matches={matches}
          label="ورود"
          {...a11yProps(1)}
          sx={{ width: '50%' }}
        />
      </StyledTabs>
      {[0, 1].map(index => (
        <TabPanel
          index={index}
          value={value}
          isRegistration={value === 0}
          username={username}
          password={password}
          secondPassword={secondPassword}
          showPassword={showPassword}
          showActivationEmailSentNotes={showActivationEmailSentNotes}
          errorMessage={errorMessage}
          setUsername={setUsername}
          setPassword={setPassword}
          setSecondPassword={setSecondPassword}
          setShowActivationEmailSentNotes={setShowActivationEmailSent}
          setShowPassword={setShowPassword}
          setErrorMessage={setErrorMessage}
        />
      ))}
    </Stack>
  )
}
