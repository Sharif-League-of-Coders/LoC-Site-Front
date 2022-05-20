import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import json2mq from 'json2mq'
import { ActivationEmailSentNotes } from './activation-email-notes'
import { FieldsArea } from './fields-area'

interface TabPanelProps {
  index: number
  value: number
  username: string
  password: string
  secondPassword: string
  showPassword: boolean
  showActivationEmailSentNotes: boolean
  errorMessage: string
  isRegistration?: boolean
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setSecondPassword: React.Dispatch<React.SetStateAction<string>>
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  setShowActivationEmailSentNotes: React.Dispatch<React.SetStateAction<boolean>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

export function TabPanel({
  isRegistration,
  value,
  index,
  errorMessage,
  showActivationEmailSentNotes,
  secondPassword,
  password,
  username,
  setUsername,
  setPassword,
  showPassword,
  setSecondPassword,
  setShowPassword,
  setShowActivationEmailSentNotes,
  setErrorMessage,
  ...other
}: TabPanelProps) {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{
        backgroundColor: 'white',
      }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: matches ? '1vw 2.5vw' : '3vw 5vw' }}>
          <Typography
            sx={{
              fontFamily: 'IRANSansLight',
            }}
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{}}
            >
              <Typography
                sx={{
                  fontWeight: 200,
                  fontSize: matches ? '1.25vw' : '3vw',
                  lineHeight: matches ? '2vw' : '4.7vw',
                  marginRight: matches ? '1vw' : '2vw'
                }}
              >
                {isRegistration ? 'ثبت نام در مسابقه' : 'ورود به پنل مسابقه'}
              </Typography>
              {errorMessage && !showActivationEmailSentNotes && (
                <Stack direction='row'>
                  <Divider orientation="vertical" flexItem  />
                  <Typography
                    color="error"
                    sx={{
                      fontFamily: 'IRANSansBold',
                      fontWeight: 900,
                      fontSize: matches ? '1.25vw' : '3vw',
                      lineHeight: matches ? '2vw' : '4.7vw',
                      maxWidth: matches ? '13vw' : '50vw',
                      marginRight: matches ? '1vw' : '2vw'
                    }}
                  >
                    {errorMessage}
                  </Typography>
                </Stack>
              )}
            </Stack>
            {showActivationEmailSentNotes ? (
              <ActivationEmailSentNotes
                matches={matches}
                setShowActivationEmailSentNotes={
                  setShowActivationEmailSentNotes
                }
              />
            ) : (
              <FieldsArea
                matches={matches}
                username={username}
                password={password}
                secondPassword={secondPassword}
                showPassword={showPassword}
                isRegistration={isRegistration}
                setUsername={setUsername}
                setPassword={setPassword}
                setSecondPassword={setSecondPassword}
                setShowActivationEmailSentNotes={
                  setShowActivationEmailSentNotes
                }
                setShowPassword={setShowPassword}
                setErrorMessage={setErrorMessage}
              />
            )}
            <Stack flexDirection="row">
              <Typography
                sx={{
                  fontWeight: 200,
                  fontSize: matches ? '1vw' : '2.4vw',
                  lineHeight: matches ? '1.5vw' : '3.6vw',
                }}
              >
                {isRegistration ? 'حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
                <Button
                  sx={{
                    fontSize: 'inherit',
                    padding: 0,
                    paddingRight: matches ? '.2vw' : '.6vw',
                    boxSizing: 'border-box',
                  }}
                  href={isRegistration ? '/login' : '/signup'}
                >
                  {isRegistration ? 'از اینجا وارد شوید' : 'از اینجا بسازید'}
                </Button>
              </Typography>
            </Stack>
          </Typography>
        </Box>
      )}
    </Stack>
  )
}

TabPanel.defaultProps = {
  isRegistration: true,
}
