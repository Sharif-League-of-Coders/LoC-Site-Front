import {
  Box,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker'
import Input from '@mui/material/Input'
export const MyInput = styled(Input)(({ name }: { name?: string }) => ({
  width: '100%',
  border: 1,
  minHeight: 40,
  borderColor: 'transparent',
  padding: '0.5vw 1vw ',
  borderRadius:
    name == 'code' ? ' 0.2vw 0vw 1.5vw 0.2vw' : ' 1.5vw 0vw 1.5vw 0vw',
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  '::placeholder': { color: 'white' },
}))

export const InformationInput = ({
  label,
  name,
  value,
  updateState,
}: {
  label: string
  updateState: (event: any, name: string) => void
  name: string
  value: any
}) => {
  // const [open, setOpen] = useState(false)
  const renderCustomInput = ({ ref }) => (
    <MyInput
      id="outlined-name"
      ref={ref} // necessary
      value={value ? `${value.year}/${value.month}/${value.day}` : ''}
      dir="rtl"
      disableUnderline={true}
      endAdornment={
        <InputAdornment position="end">
          <img
            style={{
              maxHeight: '1vw',
            }}
            src={`assets/icons/pencil.svg`}
          />
        </InputAdornment>
      }
      // size="small"
    />
  )
  return (
    <Box sx={{ p: 0.5 }}>
      <Stack spacing={1}>
        <Typography>{label}</Typography>
        {name == 'birthDate' ? (
          <>
            <DatePicker
              value={value}
              onChange={event => {
                updateState(event, name)
              }}
              locale="fa" // add this
              renderInput={renderCustomInput} // render a custom input
              shouldHighlightWeekends
            />
          </>
        ) : (
          <MyInput
            value={value}
            // defaultValue={name == 'code' ? 'کد یکتای کاربری' : ''}
            // sx={{
            // placeholder={name == 'code' ? 'کد یکتای کاربری' : ''}
            // }}
            onChange={event => updateState(event.target.value, name)}
            // variant = "outlined"
            // variant="standard"
            dir="rtl"
            name={name}
            disableUnderline={true}
            style={
              name == 'code'
                ? {
                    background:
                      'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                  }
                : {}
            }
            // inputProps={{
            //   classes: {
            //     placeholder: {
            //       // '&::placeholder': {
            //         color: 'white',
            //       // },
            //     },
            //   },
            // }}
            // sx={{
            //   '&::placeholder': {
            //     color: 'white',
            //   },
            // }}
            endAdornment={
              name == 'code' ? null : (
                <InputAdornment position="end">
                  <img
                    style={{
                      maxHeight: '1vw',
                    }}
                    src={`assets/icons/pencil.svg`}
                  />
                </InputAdornment>
              )
            }
            // size="small"
          />
        )}
      </Stack>
    </Box>
  )
}
