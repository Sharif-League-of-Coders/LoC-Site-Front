import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {
  setIsLoggedIn,
  setToken,
  setUsername as reduxSetUsername,
} from '../../../scenes/_slice/account.slice'
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import { Lock, Person } from '@mui/icons-material'

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
  secondPassword: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setSecondPassword: React.Dispatch<React.SetStateAction<string>>
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  setShowActivationEmailSentNotes: React.Dispatch<React.SetStateAction<boolean>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

export function FieldsArea({
  matches,
  setUsername,
  username,
  password,
  setPassword,
  secondPassword,
  setSecondPassword,
  showPassword,
  setShowPassword,
  isRegistration,
  setErrorMessage,
  setShowActivationEmailSentNotes,
}: FieldsAreaProps) {
  const dispatch = useDispatch()
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [secondPasswordError, setSecondPasswordError] = useState(false)
  const [resetPasswordMode] = useState(false)
  const handleShowError = (email, password_1, ...arg) => {
    if (email) setUsernameError(true)
    if (password_1) setPasswordError(true)
    if (arg) setSecondPasswordError(true)
  }

  const generateErrorMessage = (email, password_1, password_2) => {
    if (email) {
      switch (email[0]) {
        case 'This field may not be blank.':
          return 'وارد کردن پست الکترونیک ضروری است.'
        case 'Enter a valid email address.':
          return 'یک پست الکترونیک معتبر وارد کنید'
        case 'This field must be unique.':
          return 'این پست الکترونیک قبلا ثبت شده است.'
      }
    }
    if (password_1?.[0] === 'This field may not be blank.')
      return 'وارد کردن گذرواژه ضروری است.'

    if (password_2?.[0] === 'This field may not be blank.')
      return 'وارد کردن تکرار گذرواژه ضروری است.'

    return 'گذرواژه و تکرار آن باید یکسان باشد'
  }
  const handleRegister = () => {
    axios
      .post('https://locsharif.com/api/user/signup', {
        email: username,
        password_1: password,
        password_2: secondPassword,
      })
      .then(({ status }) => {
        if (status === 200) {
          setShowActivationEmailSentNotes(true)
        }
      })
      .catch(({ response }) => {
        const {
          data: { email, password_1, password_2 },
        } = response

        handleShowError(email, password_1, password_2)
        const errorMessage = generateErrorMessage(email, password_1, password_2)
        setErrorMessage(errorMessage)
      })
  }
  const handleLogin = () => {
    axios
      .post('https://locsharif.com/api/user/login', {
        username,
        password,
      })
      .then(({ data, status }) => {
        if (status === 200) {
          dispatch(reduxSetUsername({ username }))
          dispatch(setIsLoggedIn({ isLoggedIn: true }))
          dispatch(setToken({ token: data.token }))
          window.open('/dashboard', '_self')
        }
      })
      .catch(({ response }) => {
        const {
          data: { username, password },
        } = response
        handleShowError(username, password)
        setErrorMessage('اطلاعات کاربری وارد شده نادرست است')
      })
  }

  const handleResetPassword = () => {
    axios
      .post('https://locsharif.com/api/user/password/reset', {
        email: username,
      })
      .then(console.log)
  }

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleSecondPasswordChange = e => {
    setSecondPassword(e.target.value)
  }
  return (
    <Stack>
      <Stack sx={{ margin: '1vw 0' }}>
        <StyledTextFiled
          fullWidth
          required
          error={usernameError}
          matches={matches}
          placeholder="پست الکترونیک"
          value={username}
          onChange={handleUsernameChange}
          sx={{
            fontSize: matches ? '1vw' : '2.4vw',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person
                  sx={{
                    width: matches ? '2vw' : '4vw',
                    height: matches ? '2vw' : '4vw',
                  }}
                />
              </InputAdornment>
            ),
          }}
        />

        {!resetPasswordMode && (
          <StyledTextFiled
            sx={{
              marginTop: matches ? '1vw' : '2vw',
            }}
            fullWidth
            required
            error={passwordError}
            matches={matches}
            value={password}
            placeholder="گذرواژه"
            type={showPassword ? 'text' : 'password'}
            onChange={handlePasswordChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock
                    sx={{
                      height: matches ? '2vw' : '4vw',
                      width: matches ? '2vw' : '4vw',
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
        {isRegistration && (
          <StyledTextFiled
            sx={{
              marginTop: matches ? '1vw' : '2vw',
            }}
            fullWidth
            required
            error={secondPasswordError}
            matches={matches}
            value={secondPassword}
            placeholder="تکرار گذرواژه"
            type={showPassword ? 'text' : 'password'}
            onChange={handleSecondPasswordChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock
                    sx={{
                      width: matches ? '2vw' : '4vw',
                      height: matches ? '2vw' : '4vw',
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <FormControlLabel
          sx={{ margin: 0, minWidth: matches ? '9vw' : '29vw' }}
          control={
            <Checkbox
              value={showPassword}
              onChange={() => setShowPassword(prev => !prev)}
              sx={{
                '& .MuiSvgIcon-root': {
                  width: matches ? '2vw' : '5vw',
                  height: matches ? '2vw' : '5vw',
                },
              }}
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
          <Stack
            direction="row"
            sx={{
              width: '100%',
              maxWidth: matches ? '13vw' : '80vw',
              marginRight: matches ? '1vw' : '2vw',
            }}
          >
            <Divider orientation="vertical" flexItem />
            {/*<Button*/}
            {/*  sx={{*/}
            {/*    width: '100%',*/}
            {/*    fontWeight: 300,*/}
            {/*    fontSize: matches ? '1.1vw' : '2.7vw',*/}
            {/*    lineHeight: matches ? '1.75vw' : '4.2vw',*/}
            {/*  }}*/}
            {/*  onClick={() => setResetPasswordMode(true)}*/}
            {/*>*/}
            {/*  بـازیـابــی گذرواژه*/}
            {/*</Button>*/}
          </Stack>
        )}
      </Stack>
      <Button
        onClick={() =>
          resetPasswordMode
            ? handleResetPassword()
            : isRegistration
            ? handleRegister()
            : handleLogin()
        }
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
        {resetPasswordMode ? 'بازیابی' : isRegistration ? 'ثبت نام' : 'ورود'}
      </Button>
    </Stack>
  )
}
