import {
  Box,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { BoldStyledTypography } from '../components'
import json2mq from 'json2mq'
import { InformationInput } from './input'
import { useState } from 'react'

interface WrapperStackProps {
  matches: boolean
}

const WrapperStack = styled(Stack)<WrapperStackProps>(({ matches }) => ({
  width: '100%',
  height: '100%',

  marginTop: matches ? '1vw' : '2.4vw',

  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',

  borderRadius: 'inherit',
}))

export function Information() {
  const [state, setState] = useState({
    username: '',
    code: '',
    name: '',
    familyName: '',
    birthDate: '',
    phone: '',
    univercity: '',
    studentNumber: '',
    email: '',
  })
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  const inputs = [
    {
      name: 'username',
      label: 'نام کاربری:',
    },
    {
      name: 'code',
      label: 'کد کاربری:',
    },
    {
      name: 'name',
      label: 'نام',
    },
    {
      name: 'familyName',
      label: ' نام خانوادگی:',
    },
    {
      name: 'birthDate',
      label: 'تاریخ تولد:',
    },
    {
      name: 'phone',
      label: 'شماره تماس:',
    },
    {
      name: 'univercity',
      label: 'دانشگاه:',
    },
    {
      name: 'studentNumber',
      label: 'شماره دانشجویی:',
    },
    {
      name: 'email',
      label: 'ایمیل:',
    },
  ]
  const updateState = (event, label) => {
    setState(state => ({ ...state, [label]: event.target.value }))
  }
  return (
    <Box>
      <Box
        sx={{
          width: '12vw',
          // margin: matches ? '0 4vw' : '3vw 7vw',
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
          height: matches ? '32vw' : '70vw',
          // padding: matches ? '1vw' : '3vw',
          background: 'transparent',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderBottom: 2,
            padding: matches ? '1vw' : '3vw',
            borderColor: 'black',
            //   mb: 0,
          }}
        >
          <Box
            sx={{
              background: `url(assets/icons/person.svg)`,
              backgroundPosition: matches ? 'top center' : 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100vw auto',

              width: 20,
              height:20,
              // height: matches ? '60vw' : 'max-content',
              // padding: '1.7vw',
              // boxSizing: 'border-box',
            }}
          ></Box>

          <BoldStyledTypography
            style={{ fontSize: matches ? '2.25vw' : '5.2vw' }}
            matches={matches}
          >
            اطلاعات
          </BoldStyledTypography>
        </Stack>
        <Box sx={{ bgColor: 'red', p: 2 }}>
          <Grid container spacing={0.5}>
            {inputs.map((element, index) => {
              if (index < 8) {
                return (
                  <Grid item md={6}>
                    <InformationInput
                      label={element.label}
                      updateState={updateState}
                      name={element.name}
                      value={state[element.name]}
                    />
                  </Grid>
                )
              }
            })}
            <Grid item md={12}>
              <InformationInput
                label={inputs[8].label}
                updateState={updateState}
                name={inputs[8].name}
                value={state[inputs[8].name]}
              />
            </Grid>
          </Grid>
        </Box>

        {/* <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            اطلاعات و تیم من
          </BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            جدول امتیازات
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>

      <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>مستندات</BoldStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>فیلم‌ها</BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            دیگر منابع
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack> */}
      </Stack>
    </Box>
  )
}
