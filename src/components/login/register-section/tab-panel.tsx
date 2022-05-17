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
import React, { useState } from 'react'
import json2mq from 'json2mq'
import axios from 'axios'

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

interface FieldsAreaProps {
  matches: boolean
  username: string
  password: string
  showPassword: boolean
  isRegistration: boolean
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  setShowActivationEmailSentNotes: React.Dispatch<React.SetStateAction<boolean>>
  setIsWrongCredential: React.Dispatch<React.SetStateAction<boolean>>
}

function FieldsArea({
  matches,
  setUsername,
  username,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isRegistration,
  setShowActivationEmailSentNotes,
  setIsWrongCredential,
}: FieldsAreaProps) {
  const handleRegister = () => {
    setShowActivationEmailSentNotes(true)
    setIsWrongCredential(true)
    axios
      .post('http://loc.stest.ir:800/api/user/signup', {
        email: username,
        password_1: password,
        password_2: password,
        phone_number: '09128812024',
      })
      .then(console.log)
  }
  const handleLogin = () => {
    axios
      .post('http://loc.stest.ir:800/api/user/login', {
        username,
        password,
      })
      .then(console.log)
  }
  return (
    <Stack>
      <Stack sx={{ margin: '1vw 0' }}>
        <StyledTextFiled
          fullWidth
          matches={matches}
          placeholder="رایانشانی / نام کاربری"
          onChange={e => setUsername(e.target.value)}
          value={username}
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
          value={password}
          placeholder="گذرواژه"
          type={showPassword ? 'text' : 'password'}
          onChange={e => setPassword(e.target.value)}
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
        onClick={() => (isRegistration ? handleRegister() : handleLogin())}
        sx={{
          background: 'linear-gradient(90.2deg, #002B99 1.21%, #2164D6 99.83%)',
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
    </Stack>
  )
}

function ActivationEmailSentNotes({
  matches,
  setShowActivationEmailSentNotes,
}: {
  matches: boolean
  setShowActivationEmailSentNotes: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Box
      sx={{
        boxShadow: '0px 4px 15px 2px rgba(0, 0, 0, 0.2)',
        borderRadius: '0 0 40px 0px',
        width: '100%',
        height: '100%',
        padding: matches ? '2vw' : '4vw',
        boxSizing: 'border-box',
        margin: matches ? '1vw 0' : '2.4vw 0',
      }}
    >
      <Stack
        justifyContent="flex-end"
        height={matches ? '1vw' : '2.4vw'}
        width="100%"
        onClick={() => setShowActivationEmailSentNotes(false)}
        sx={{ marginBottom: '.5vw' }}
      >
        <img src="/assets/icons/close.svg" height="100%" alt="close" />
      </Stack>
      <Typography
        display="inline"
        fontSize={matches ? '1.25vw' : '3vw'}
        lineHeight={matches ? '2vw' : '4.8vw'}
      >
        پیامی حاوی
        <Typography
          fontFamily="IRANSansBold"
          display="inline"
          fontSize="inherit"
          lineHeight="inherit"
        >
          {' '}
          لینک تاییدیه{' '}
        </Typography>
        ثبت نام شما به ایمیلتان ارسال شد. لطفا برای نهایی سازی فرایند ثبت نام
        ایمیل خود را بررسی کنید.
        <br />
        در صورت عدم دریافت پیام :<br />
        ۱- پوشه اسپم خود را بررسی کنید.
        <br />
        ۲- به این صفحه بازگشته و ایمیل خود را دوباره وارد نمایید.
        <br />
        ۳- از طریق کانال تلگرام و یا دیگر شبکه‌های اجتماعی با پشتیبانی تماس حاصل
        فرمایید.
      </Typography>
    </Box>
  )
}

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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isWrongCredential, setIsWrongCredential] = useState(false)
  const [showActivationEmailSentNotes, setShowActivationEmailSent] =
    useState(false)

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{
        backgroundColor: 'white',
      }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: matches ? '1vw 2.5vw' : '3vw 5vw' }}>
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
              {isWrongCredential && !showActivationEmailSentNotes && (
                <>
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
                </>
              )}
            </Stack>
            {showActivationEmailSentNotes ? (
              <ActivationEmailSentNotes
                matches={matches}
                setShowActivationEmailSentNotes={setShowActivationEmailSent}
              />
            ) : (
              <FieldsArea
                matches={matches}
                username={username}
                password={password}
                showPassword={showPassword}
                isRegistration={isRegistration}
                setUsername={setUsername}
                setPassword={setPassword}
                setShowActivationEmailSentNotes={setShowActivationEmailSent}
                setShowPassword={setShowPassword}
                setIsWrongCredential={setIsWrongCredential}
              />
            )}
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

TabPanel.defaultProps = {
  isRegistration: true,
}
