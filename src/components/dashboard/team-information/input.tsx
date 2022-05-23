import { Box, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import {  DatePicker } from 'react-persian-datepicker';
// import { json } from './dateJson';
// import  "./datepicker.css"
const calendarStyles = {
  calendarContainer: 'calendarContainer',
  dayPickerContainer: 'dayPickerContainer',
  monthsList: 'monthsList',
  daysOfWeek: 'daysOfWeek',
  dayWrapper: 'dayWrapper',
  selected: 'selected',
  heading: 'heading'
}
export const InformationInput = ({
  label,
  name,
  value,
  updateState,
}: {
  label: string
  updateState: (event: any, name: string) => void
  name: string
  value: string
}) => {
  return (
    <Box sx={{ p: 0.5 }}>
      <Stack>
        <Typography>{label}</Typography>
        {name == 'birthDate' ? (
          <Box dir="ltr" >
            <DatePicker
            value={value}
            onChange={value2 => updateState(value2, name)}
            // style={json}
            calendarStyles
          />
          </Box>
        ) : (
          <TextField
            id="outlined-name"
            value={value}
            onChange={event => updateState(event.target.value, name)}
            //   sx={{height: 10}}
            size="small"
          />
        )}
      </Stack>
    </Box>
  )
}
