import {
  Box,
  Divider,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { BoldStyledTypography, ShadowStack } from '../components'
import json2mq from 'json2mq'
import { BlurLayer } from '../components/blur-layer'
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
const TeamCreator = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent="space-around"
      sx={{ bgColor: 'red' }}
    >
      <TextField size="small" />
      <Box
        sx={{
          width: 40,
          height: 40,
          background: `url(assets/icons/person.svg)`,
        }}
      />
      <Box
        sx={{
          width: 40,
          height: 40,
          background: `url(assets/icons/person.svg)`,
        }}
      />
    </Stack>
  )
}
const TeamGrid = (value, updateState) => {
  return (
    <Box sx={{}}>
      {/* <Box  >sdsdsd</Box> */}
      <Grid container>
        <Grid item xs={1}>
          <Box
            sx={{
              transform: 'rotate(270deg)',
              p: 0,
            }}
          >
            <TextField
              sx={{ width: 100, position: 'absolute', top: -30, right: 20 }}
              value={value}
              onChange={event => updateState(event.target.value, 'teamName')}
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

        <Grid item xs={10} sx={{ bgColor: 'red' }}>
          <Stack justifyContent={'space-between'}>
            <TeamCreator />
            <Box sx={{ height: '3vh' }} />
            <TeamCreator />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
export function TeamMaking() {
  const [state, setState] = useState({
    teamName: '',
    firstCode: '',
    secondCode: '',
  })
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
      justifyContent="space-between"
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        marginLeft: matches ? '7.25vw' : 0,
        borderRadius: matches ? '3vw' : '7vw',
        width: matches ? '35.25vw' : '100%',
        height: matches ? '35vw' : '70vw',
        padding: matches ? '2vw' : '5vw',
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
        <BoldStyledTypography
          style={{ fontSize: matches ? '2.25vw' : '5.2vw' }}
          matches={matches}
        >
          تیم
        </BoldStyledTypography>
      </Stack>
      <TeamGrid value={state.teamName} updateState={updateState} />
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
