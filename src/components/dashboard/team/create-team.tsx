import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { MyInput } from './input'
import { Dispatch, SetStateAction } from 'react'
import json2mq from 'json2mq'

interface CreatTeamProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  clickHandler: () => unknown
}

export function CreateTeam({ value, setValue, clickHandler }: CreatTeamProps) {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      sx={{
        width: '100%',
        margin: '1vw',
      }}
    >
      <Typography fontSize={matches ? '1.5vw' : '3vw'}>ساخت تیم</Typography>
      <MyInput
        matches={matches}
        value={value}
        sx={{
          borderRadius: ' 1.5vw 0.1vw 0.1vw 0.1vw',
          margin: '1vw 0',
        }}
        onChange={event => setValue(event.target.value)}
        dir="rtl"
        disableUnderline={true}
        placeholder="نام تیم"
      />

      <Button
        onClick={clickHandler}
        sx={{
          background:
            'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
          color: 'white',
          minWidth: 'fit-content',
          height: matches ? '3vw' : '7.2vw',
          margin: '1vw 0',
          fontSize: matches ? '1vw' : '2.4vw',
          fontFamily: 'IRANSansBold'
        }}
      >
        ثبت تیم
      </Button>
    </Stack>
  )
}
