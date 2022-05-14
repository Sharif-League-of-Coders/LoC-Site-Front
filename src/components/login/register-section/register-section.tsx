import { AccountCircle, Lock, Person } from '@mui/icons-material'
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
  styled,
  InputAdornment,
} from '@mui/material'
import React, { useState } from 'react'

interface TabPanelProps {
  index: number
  value: number
  isRegistration?: boolean
}

const StyledTextFiled = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '10px',
  },
  '& .MuiInputBase-input': {
    height: '3.25vw',
    padding: '.5vw',
    fontWeight: 200,
    fontSize: '1.25vw',
    lineHeight: '2vw',
  },
}))

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
        <Box sx={{ p: '1vw' }}>
          <Typography
            sx={{
              fontFamily: 'IRANSansLight',
            }}
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{}}
            >
              <Typography
                sx={{
                  fontWeight: 200,
                  fontSize: '1.25vw',
                  lineHeight: '2vw',
                }}
              >
                {isRegistration ? 'ثبت نام در مسابقه' : 'ورود به پنل مسابقه'}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                color="error"
                sx={{
                  fontFamily: 'IRANSansBold',
                  fontWeight: 900,
                  fontSize: '1.25vw',
                  lineHeight: '2vw',
                }}
              >
                اطلاعات کاربری وارد شده
                <br /> نادرست است
              </Typography>
            </Stack>
            <Stack sx={{ margin: '1vw 0' }}>
              <StyledTextFiled
                fullWidth
                placeholder="رایانشانی / نام کاربری"
                sx={{ height: '3.25vw', marginBottom: '2vw', fontSize: '1vw' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />

              <StyledTextFiled
                fullWidth
                placeholder="گذرواژه"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormControlLabel
                sx={{ margin: 0, width: '100%' }}
                control={
                  <Checkbox
                    value={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontWeight: 200,
                      fontSize: '1.1vw',
                      lineHeight: '1.75vw',
                    }}
                  >
                    نمایش گذرواژه
                  </Typography>
                }
              />

              {!isRegistration && (
                <>
                  <Divider orientation="vertical" flexItem />
                  <Button
                    sx={{
                      width: '100%',
                      fontWeight: 300,
                      fontSize: '1.1vw',
                      lineHeight: '1.75vw',
                    }}
                  >
                    بـازیـابــی رمــــز عبـــور
                  </Button>
                </>
              )}
            </Stack>
            <Button
              sx={{
                background:
                  'linear-gradient(90.2deg, #002B99 1.21%, #2164D6 99.83%)',
                borderRadius: '10px',
                width: '100%',
                color: 'white',
                fontWeight: 900,
                fontSize: '1.9vw',
                lineHeight: '2.9vw',
                fontFamily: 'IRANSansBold',
                margin: '1vw 0',
              }}
            >
              {isRegistration ? 'ثبت نام' : 'ورود'}
            </Button>
            <Stack flexDirection="row">
              <Typography
                sx={{
                  fontWeight: 200,
                  fontSize: '1vw',
                  lineHeight: '1.5vw',
                }}
              >
                {isRegistration ? 'حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
                <Button
                  sx={{ fontSize: 'inherit', padding: 0, paddingRight: '.2vw' }}
                >
                  {isRegistration ? 'از اینجا وارد شوید' : 'از اینجا بسازید'}
                </Button>
              </Typography>
            </Stack>
          </Typography>
        </Box>
      )}
    </Stack>
  )
}

const StyledTab = styled(Tab)(() => ({
  fontSize: '2vw',
  color: 'rgba(0, 0, 0, 0.5)',
  position: 'relative',
  zIndex: 999,

  '&.Mui-selected': {
    background: '#FFFFFF',
    boxShadow: '0px 0px 1.75vw 5px rgba(0, 0, 0, 0.09)',
    borderRadius: '18px',
    zIndex: '1000px',
    color: 'black',
  },
}))

const StyledTabs = styled(Tabs)(() => ({
  marginBottom: '1vw',
  borderRadius: 'inherit',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}))

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
    <Stack
      sx={{
        width: '30vw',
        boxShadow: '0px 0px 1.75vw 10px rgba(0, 0, 0, 0.09)',
        borderRadius: '18px',
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ width: '100%' }}
      >
        <StyledTab label="ثبت نام" {...a11yProps(0)} sx={{ width: '50%' }} />
        <StyledTab label="ورود" {...a11yProps(1)} sx={{ width: '50%' }} />
      </StyledTabs>
      <TabPanel index={0} value={value} isRegistration />
      <TabPanel index={1} value={value} />
    </Stack>
  )
}
