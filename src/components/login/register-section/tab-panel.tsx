import { Lock, Person } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'
import json2mq from 'json2mq'

interface TextFieldProps {
  matches: boolean
}

const StyledTextFiled = styled(TextField)<TextFieldProps>(({ matches }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '10px',
  },
  '& .MuiInputBase-input': {
    height: matches ? '3.25vw' : '8vw',
    padding: '.5vw',
    fontWeight: 200,
    fontSize: matches ? '1.25vw' : '3.2vw',
    lineHeight: matches ? '2vw' : '5vw',
    boxSizing: 'border-box',
  },
}))

interface TabPanelProps {
  index: number
  value: number
  isRegistration?: boolean
}

export function TabPanel({
  isRegistration,
  value,
  index,
  ...other
}: TabPanelProps) {
  const [showPassword, setShowPassword] = useState(false)
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: matches ? '1vw' : '3vw 5vw' }}>
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
                  fontSize: matches ? '1.25vw' : '3vw',
                  lineHeight: matches ? '2vw' : '4.7vw',
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
                  fontSize: matches ? '1.25vw' : '3vw',
                  lineHeight: matches ? '2vw' : '4.7vw',
                  marginLeft: matches ? 0 : '5vw',
                }}
              >
                اطلاعات کاربری وارد شده
                <br /> نادرست است
              </Typography>
            </Stack>
            <Stack sx={{ margin: '1vw 0' }}>
              <StyledTextFiled
                fullWidth
                matches={matches}
                placeholder="رایانشانی / نام کاربری"
                sx={{
                  height: '3.25vw',
                  marginBottom: matches ? '2vw' : '7vw',
                  fontSize: matches ? '1vw' : '2.4vw',
                }}
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
                matches={matches}
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
                      fontSize: matches ? '1.1vw' : '2.7vw',
                      lineHeight: matches ? '1.75vw' : '4.2vw',
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
                      fontSize: matches ? '1.1vw' : '2.7vw',
                      lineHeight: matches ? '1.75vw' : '4.2vw',
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
                fontSize: matches ? '1.9vw' : '4.5vw',
                lineHeight: matches ? '2.9vw' : '7vw',
                fontFamily: 'IRANSansBold',
                margin: matches ? '1vw 0' : '2.4vw 0',
              }}
            >
              {isRegistration ? 'ثبت نام' : 'ورود'}
            </Button>
            <Stack flexDirection="row">
              <Typography
                sx={{
                  fontWeight: 200,
                  fontSize: matches ? '1vw' : '2.4vw',
                  lineHeight: matches ? '1.5vw' : '3.6vw',
                }}
              >
                {isRegistration ? 'حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
                <Button
                  sx={{
                    fontSize: 'inherit',
                    padding: 0,
                    paddingRight: matches ? '.2vw' : '.6vw',
                    boxSizing: 'border-box',
                  }}
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
