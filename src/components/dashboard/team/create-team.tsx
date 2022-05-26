import { Button, Stack, Typography } from '@mui/material'
import { MyInput } from './input'
import { Dispatch, SetStateAction } from 'react'

interface CreatTeamProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  clickHandler: () => unknown
}

export function CreateTeam({ value, setValue, clickHandler }: CreatTeamProps) {
  return (
    <Stack
      sx={{
        width: '100%',
        margin: '1vw',
      }}
    >
      <Typography>ساخت تیم</Typography>
      <MyInput
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
          height: '3vw',
          margin: '1vw 0',
        }}
      >
        ثبت تیم
      </Button>
    </Stack>
  )
}
