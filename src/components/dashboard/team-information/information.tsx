import { useState } from 'react'
import json2mq from 'json2mq'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { BoldStyledTypography } from '../components'
import { InformationInput } from './input'
import { useSelector } from 'react-redux'
import { usernameView } from '../../../scenes/_slice/account.slice'

export function Information() {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [university, setUniversity] = useState('')
  const [studentNumber, setStudentNumber] = useState('')

  const email = useSelector(usernameView)

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Box
        sx={{
          width: '12vw',
          borderBottom: '3px solid black',
          mb: 3,
        }}
      >
        <Typography
          fontSize={matches ? '1.3vw' : '3.5vw'}
          lineHeight={matches ? '2vw' : '5vw'}
        >
          اطلاعات و تیم من
        </Typography>
      </Box>
      <Stack
        justifyContent="center"
        sx={{
          boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
          marginLeft: matches ? '7.25vw' : 0,
          borderRadius: matches ? '3vw' : '7vw',
          width: matches ? '35.25vw' : '100%',
          background: 'transparent',
          position: 'relative',
        }}
      >
        <Stack
          sx={{
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: matches ? '3vw 3vw 0px 0px' : '7vw 7vw 0px 0px',
            border: 3,
            padding: matches ? '0.7vw' : '2vw',
            borderColor: 'black',
          }}
        >
          <img
            src="/assets/icons/person.svg"
            style={{ width: '2.8vw' }}
            alt="person"
          />
          <BoldStyledTypography
            style={{ fontSize: matches ? '2.25vw' : '5.2vw' }}
            matches={matches}
          >
            اطلاعات
          </BoldStyledTypography>
        </Stack>
        <Stack
          sx={{
            padding: '1vw',
            boxSizing: 'border-box',
          }}
        >
          <InformationInput
            label="پست الکترونیک"
            updateState={() => console.log('nothing')}
            name="email"
            value={email}
            disabled
          />
          <Stack direction="row">
            <InformationInput
              label="نام:"
              updateState={setName}
              name={name}
              value={name}
            />
            <InformationInput
              label="نام خانوادگی:"
              updateState={setLastname}
              name={name}
              value={lastname}
            />
          </Stack>
          <Stack direction="row">
            <InformationInput
              name={'birthDate'}
              label="تاریخ تولد:"
              updateState={setBirthdate}
              value={birthdate}
            />
            <InformationInput
              label="شماره تماس:"
              updateState={setPhone}
              name={name}
              value={phone}
            />
          </Stack>
          <Stack direction="row">
            <InformationInput
              label="دانشگاه:"
              updateState={setUniversity}
              name={name}
              value={university}
            />
            <InformationInput
              label="شماره دانشجویی:"
              updateState={setStudentNumber}
              name={name}
              value={studentNumber}
            />
          </Stack>
          <Button
            sx={{
              background:
                'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
              color: 'white',
              margin: '1vw',
            }}
          >
            ثبت اطلاعات
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
