import {
  Box,
  Button,
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
import CustomizedSnackbar from 'components/snackbar'

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
    code: 'کد یکتای کاربری',
    name: '',
    familyName: '',
    birthDate: null,
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
      label: 'نام:',
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
  const updateState = (value, label) => {
    console.log('start')
    setState(state => ({ ...state, [label]: value }))
    console.log('end')
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
          background: 'transparent',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <Stack
          sx={{
            // alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            // borderBottom: 2,
            borderRadius: matches ? '3vw 3vw 0px 0px' : '7vw 7vw 0px 0px',
            // borderRadius: '40px 40px 0px 0px',
            border: 3,

            padding: matches ? '0.7vw' : '2vw',
            borderColor: 'black',
            //   mb: 0,
          }}
        >
          <img src="assets/icons/person.svg" style={{ width: '2.8vw' }} />
          <Box sx={{ width: '0.7vw' }} />
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
            <Grid
              item
              md={12}
              sx={{ mt: 1 }}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Stack direction={'row'} justifyContent="center">
                <Button
                  sx={{
                    background:
                      'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
                    width: '80%',
                  }}
                  variant="contained"
                >
                  ثبت
                </Button>
              </Stack>
              {/* CustomizedSnackbar */}
            </Grid>
            <Grid
              item
              md={12}
              sx={{ mt: 1 }}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Stack direction={'row'} justifyContent="center">
                <Button
                  sx={{
                    background:
                      'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
                    width: '80%',
                  }}
                  variant="contained"
                  onClick={() => setOpen(!open)}
                >
                  ثبت
                </Button>

              </Stack>
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
