import {
  Box,
  Divider,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { BoldStyledTypography, ShadowStack } from '../components'
import json2mq from 'json2mq'
import { useState } from 'react'
import { MyInput } from './input'
import { sendInvitation } from '../../../service/backend'
import { useSelector } from 'react-redux'
import { tokenView } from '../../../scenes/_slice/account.slice'

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
const TeamCreator = ({ label, value, updateState, placeholder }) => {
  const token = useSelector(tokenView)
  return (
    <Stack
      direction={'row'}
      justifyContent="space-between"
      sx={{ bgColor: 'red' }}
    >
      <MyInput
        name={label}
        value={value}
        sx={{
          height: '5vh',
          mx: 2,
          borderRadius: ' 1.5vw 0.1vw 0.1vw 0.1vw',
        }}
        onChange={event => updateState(event.target.value, label)}
        dir="rtl"
        disableUnderline={true}
        placeholder={placeholder}
      />

      <IconButton onClick={() => sendInvitation({ user_email: value, token })}>
        <img src="/assets/icons/tick.svg" style={{ width: '3vw' }} />
      </IconButton>
    </Stack>
  )
}
const GradientInput = styled(Input)(({ name }: { name?: string }) => ({
  input: {
    fontSize: 22,
    fontWeight: 'bold',
    background:
      '-webkit-linear-gradient(0deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
}))

const TeamGrid = ({ state, updateState }) => {
  return (
    <Box
      sx={{
        border: 3,
        borderRadius: '0px 5vh 0px 0px',
        borderColor: 'black',
        padding: '1vw 2vw',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Box
            sx={{
              transform: 'rotate(270deg)',
              p: 0,
            }}
          >
            <GradientInput
              name={'teamName'}
              value={state.teamName}
              sx={{
                // height: '5vh',
                width: '15vh',
                // mx: 2,

                borderRadius: ' 1.5vw 0.1vw 0.1vw 0.1vw',
              }}
              onChange={event => updateState(event.target.value, 'teamName')}
              endAdornment={
                <InputAdornment position="end">
                  <img
                    style={{
                      maxHeight: '1vw',
                    }}
                    src="/assets/icons/pencil.svg"
                  />
                </InputAdornment>
              }
              dir="rtl"
              disableUnderline={true}
            />
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Divider
            orientation="vertical"
            // flexItem
            sx={{
              borderLeft: '2px solid',
              borderRight: '0',
              p: 0,
              borderImageSlice: 1,
              borderImageSource:
                'linear-gradient(180deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',

              // border: 2,
            }}
          />
        </Grid>

        <Grid item xs={10} sx={{ bgColor: 'red', justifyContent: 'center' }}>
          <Stack justifyContent={'space-between'}>
            <TeamCreator
              label={'first'}
              value={state.first}
              updateState={updateState}
              placeholder="پست الکترونیک نفر اول"
            />
            <Box sx={{ height: '3vh' }} />
            <TeamCreator
              label={'second'}
              value={state.second}
              updateState={updateState}
              placeholder="پست الکترونیک نفر دوم"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export function TeamMaking() {
  const [state, setState] = useState({
    teamName: '',
    first: '',
    second: '',
  })
  // const [teamName, setTeamName] = useState('')
  // const [firstTeammate, setFirstTeammate] = useState('')
  // const [secondTeammate, setSecondTeammate] = useState('')

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  const updateState = (value, label) => {
    setState(state => ({ ...state, [label]: value }))
  }
  return (
    <Stack
      // justifyContent="space-around"
      spacing={2}
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        marginLeft: matches ? '7.25vw' : 0,
        borderRadius: matches ? '3vw' : '7vw',
        width: matches ? '35.25vw' : '100%',
        // height: matches ? '35vw' : '70vw',
        padding: matches ? '0vw 2vw 2vw 2vw' : '1vw 5vw 5vw 5vw',
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
        }}
      >
        <img
          src="/assets/icons/group.svg"
          style={{ width: '4vw' }}
          alt="group"
        />
        <Box sx={{ width: '1vw' }} />
        <BoldStyledTypography
          style={{ fontSize: matches ? '2.25vw' : '5.2vw' }}
          matches={matches}
        >
          تیم
        </BoldStyledTypography>
      </Stack>
      <TeamGrid state={state} updateState={updateState} />
      <Box sx={{ borderColor: 'black', border: 1, borderRadius: 1, p: 1 }}>
        <Stack>
          <Typography fontStyle={{ fontWeight: 'bold' }}>
            {'نحوه انتخاب هم تیمی'}
          </Typography>
          <Stack direction={'row'}>
            {/* <Box sx={{width:1 , border:1 ,height:"100%"}} /> */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: 'black', m: 1, mr: 0 }}
            />
            <Typography style={{ fontSize: 12 }}>
              {
                'روش اول (اگر هم تیمی های خود را از پیش انتخاب کرده اید): کافیست کد کاربری هم تیمی خود را در باکس مربوطه نوشته و دکمه تیک را بفشارید. پیامی مبنی بر این درخواست شما به صندوق فرد مورد نظر ارسال میشود که در صورت موافقت وی تیم بندی نهایی می شود.'
              }
            </Typography>
          </Stack>
          <Stack direction={'row'}>
            {/* <Box sx={{width:1 , border:1 ,height:"100%"}} /> */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: 'black', m: 1, mr: 0 }}
            />
            <Typography style={{ fontSize: 12 }}>
              {
                'روش دوم (اگر هم تیمی های خود را از پیش انتخاب نکرده اید): در این حالت کافیست دکمه R (random) را بفشارید تا به طور اتوماتیک پیامی مبنی بر این درخواست شما به صندوق فردی رندوم ارسال شود. که در صورت موافقت وی تیم بندی نهایی می شود.'
              }
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}
