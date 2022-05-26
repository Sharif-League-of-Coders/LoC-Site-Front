import {
  Box,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker'
import Input from '@mui/material/Input'
import json2mq from 'json2mq'

interface MyInputProps {
  matches: boolean
}

export const MyInput = styled(Input)<MyInputProps>(({ matches }) => ({
  width: '100%',
  border: 1,
  minHeight: '3vw',
  height: matches ? '3vw' : '7.2vw',
  borderColor: 'transparent',
  padding: '0.5vw 1vw ',
  borderRadius: matches ? '0.2vw 0vw 1.5vw 0.2vw' : ' 1.5vw 0vw 1.5vw 0vw',
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  '::placeholder': { color: 'white' },
  fontSize: matches ? '1vw' : '2.4vw',
}))

export const InformationInput = ({
  label,
  name,
  value,
  updateState,
  disabled,
  ...props
}: {
  label: string
  updateState: (event: unknown, name: string) => void
  name: string
  value:
    | {
        year: number
        month: number
        day: number
      }
    | string
  disabled?: boolean
}) => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  const renderCustomInput = ({ ref }) => {
    if (typeof value !== 'string') {
      return (
        <MyInput
          matches={matches}
          id="outlined-name"
          ref={ref} // necessary
          value={
            value && value?.year
              ? `${value.year}/${value.month}/${value.day}`
              : ''
          }
          dir="rtl"
          disableUnderline={true}
          endAdornment={
            <InputAdornment position="end">
              <img
                style={{
                  maxHeight: '1vw',
                }}
                src={`assets/icons/pencil.svg`}
                alt="pencil"
              />
            </InputAdornment>
          }
        />
      )
    }
  }

  return (
    <Box sx={{ p: 0.5 }}>
      <Stack spacing={1}>
        <Typography>{label}</Typography>
        {name == 'birthDate' ? (
          <>
            {typeof value !== 'string' && (
              <DatePicker
                value={value}
                onChange={event => {
                  updateState(event, name)
                }}
                locale="fa" // add this
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
              />
            )}
          </>
        ) : (
          <MyInput
            {...props}
            matches={matches}
            disabled={disabled}
            value={value}
            onChange={event => updateState(event.target.value, name)}
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
            endAdornment={
              name == 'code' ? null : (
                <InputAdornment position="end">
                  <img
                    style={{
                      maxHeight: '1vw',
                    }}
                    src="/assets/icons/pencil.svg"
                    alt="pencil"
                  />
                </InputAdornment>
              )
            }
          />
        )}
      </Stack>
    </Box>
  )
}

InformationInput.defaultProps = {
  disabled: false,
}
