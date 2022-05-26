import { IconButton, Stack, Typography } from '@mui/material'
import { MyInput } from './input'
import { Dispatch, SetStateAction } from 'react'

const EmailFieldWithConfirm = ({
  value,
  setValue,
  placeholder,
  clickHandler,
}) => {
  return (
    <Stack direction="row" alignItems="center" sx={{ margin: '1vw 0' }}>
      <MyInput
        value={value}
        sx={{
          borderRadius: ' 1.5vw 0.1vw 0.1vw 0.1vw',
          marginLeft: '1vw',
        }}
        onChange={event => setValue(event.target.value)}
        dir="rtl"
        disableUnderline={true}
        placeholder={placeholder}
      />

      <IconButton
        onClick={clickHandler}
        sx={{
          height: '2.5vw',
          width: '2.5vw',
          background:
            'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
          boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
          borderRadius: '5px',
          padding: '.5vw',
          boxSizing: 'border-box',
        }}
      >
        <img
          src="/assets/icons/tick.svg"
          alt="confirm"
          width="100%"
          height="100%"
        />
      </IconButton>
    </Stack>
  )
}

interface SendInvitationProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  clickHandler: () => unknown
}

export function SendInvitation({
  value,
  setValue,
  clickHandler,
}: SendInvitationProps) {
  return (
    <Stack
      justifyContent="space-between"
      sx={{
        width: '100%',
        margin: '1vw',
      }}
    >
      <Typography>عضوگیری</Typography>
      <EmailFieldWithConfirm
        placeholder="پست الکترونیک نفر اول"
        clickHandler={clickHandler}
        value={value}
        setValue={setValue}
      />
      <EmailFieldWithConfirm
        placeholder="پست الکترونیک نفر دوم"
        clickHandler={clickHandler}
        value={value}
        setValue={setValue}
      />
    </Stack>
  )
}
