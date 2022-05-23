import { Box, Modal, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker'
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
  const [open, setOpen] = useState(false)
  const renderCustomInput = ({ ref }) => (
    <TextField
      id="outlined-name"
      ref={ref} // necessary
      value={value ? `${value.year}/${value.month}/${value.day}` : ''}
      size="small"
      sx={{ width: '100%' }}
    />
  )
  return (
    <Box sx={{ p: 0.5 }}>
      <Stack>
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
          <TextField
            id="outlined-name"
            value={value}
            onChange={event => updateState(event.target.value, name)}
            size="small"
          />
        )}
      </Stack>
    </Box>
  )
}
