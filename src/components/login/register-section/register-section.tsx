import {
  Stack,
  Tab,
  Tabs,
  Typography,
  Box,
  Divider,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from '@mui/material'
import React, { useState } from 'react'

interface TabPanelProps {
  index: number
  value: number
  isRegistration?: boolean
}

function TabPanel({ isRegistration, value, index, ...other }: TabPanelProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontFamily: 'IRANSansLight',
            }}
          >
            <Stack flexDirection="row">
              <Typography>
                {isRegistration ? 'ثبت نام در مسابقه' : 'ورود به پنل مسابقه'}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography>اطلاعات کاربری وارد شده نادرست است</Typography>
            </Stack>
            <Stack>
              <TextField placeholder="رایانشانی / نام کاربری" />

              <TextField
                placeholder="گذرواژه"
                type={showPassword ? 'text' : 'password'}
              />
            </Stack>
            <Stack flexDirection="row">
              <FormControlLabel
                control={
                  <Checkbox
                    value={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                }
                label="نمایش گذرواژه"
              />
              <Divider orientation="vertical" flexItem />
              {!isRegistration && <Button>بازیابی رمز عبور</Button>}
            </Stack>
            <Button>{isRegistration ? 'ثبت نام' : 'ورود'}</Button>
            <Stack flexDirection="row">
              <Typography>
                {isRegistration ? 'حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
              </Typography>
              <Button>
                {' '}
                {isRegistration ? 'از اینجا وارد شوید' : 'از اینجا بسازید'}
              </Button>
            </Stack>
          </Typography>
        </Box>
      )}
    </Stack>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function RegisterSection() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Stack sx={{ width: '30vw' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ width: '100%' }}
      >
        <Tab label="ثبت نام" {...a11yProps(0)} sx={{ width: '50%' }} />
        <Tab label="ورود" {...a11yProps(1)} sx={{ width: '50%' }} />
      </Tabs>
      <TabPanel index={0} value={value} isRegistration />
      <TabPanel index={1} value={value} />
    </Stack>
  )
}
