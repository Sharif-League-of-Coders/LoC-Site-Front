import {
  IconButton,
  Divider,
  Typography,
  Button,
  styled,
  Box,
  Stack,
  useMediaQuery,
  Link,
} from '@mui/material'
import json2mq from 'json2mq'
import { useDispatch, useSelector } from 'react-redux'
import {
  isLoggedInVew, setInvitations,
  setIsLoggedIn,
  setToken,
  tokenView,
  usernameView,
} from '../../scenes/_slice/account.slice'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { fetchInvitations } from '../../service/backend'

const StyledDivider = styled(Divider)(() => ({
  '&.MuiDivider-root': {
    marginTop: '.5vmin !important',
    marginBottom: '.5vmin',
  },
}))

const StyledAppbar = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}))

interface Props {
  setIsMailBoxModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function NavBar({ setIsMailBoxModalOpen }: Props) {
  const isLoggedIn = useSelector(isLoggedInVew)
  const username = useSelector(usernameView)
  const token = useSelector(tokenView)
  const sections = [
    { text: 'ارتباط با ما', href: '/#contact-us' },
    { text: 'سوالات متداول', href: '/#faq' },
    { text: 'حامی', href: '/#sponsor' },
    { text: 'معرفی', href: '/#about-event' },
  ]
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  const dispatch = useDispatch()

  const handleLogout = () => {
    axios
      .post(
        'https://locsharif.com/api/user/logout',
        {
          username,
        },
        {
          headers: {
            Authorization: 'Token ' + token,
          },
        },
      )
      .then(() => {
        dispatch(setToken(''))
        dispatch(setIsLoggedIn(''))
        dispatch(setInvitations([]))
        window.open('/login', '_self')
      })
  }
  return (
    <StyledAppbar
      justifyContent="center"
      sx={{
        bgcolor: 'white',
        height: '2.5vw',
        padding: '2.25vw 0',
        alignItems: 'center',

        boxSizing: 'border-box',
        marginTop: '2.5vw',
      }}
    >
      <Stack
        sx={{
          direction: 'rtl',
          height: '2.5vw',
          maxWidth: '100vw',
          margin: matches ? '0 1.5vw' : '0 2.5vw',
          boxSizing: 'border-box',
          width: matches ? '90vw' : '85vw',
        }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          sx={{ height: matches ? '2.5vw' : '5vw' }}
        >
          <IconButton
            disableRipple
            sx={{ minHeight: '3.5vw', height: matches ? '2.5vw' : '8vw' }}
            href="/"
          >
            <img
              src="/assets/logos/logo.svg"
              width="100%"
              height="100%"
              alt="league-of-coders"
            />
          </IconButton>
          {matches && (
            <StyledDivider orientation="vertical" flexItem color="black" />
          )}

          {matches &&
            sections.map(({ text, href }) => (
              <Box key={text}>
                <Box
                  sx={{
                    minWidth: 'fit-content',
                    padding: '.5vw',
                    boxSizing: 'border-box',
                  }}
                >
                  <Link href={href} sx={{ textDecoration: 'none' }}>
                    <Typography
                      fontSize="1.25vw"
                      sx={{ fontFamily: 'IRANSansLight' }}
                      color="black"
                    >
                      {text}
                    </Typography>
                  </Link>
                </Box>
                <StyledDivider orientation="vertical" flexItem color="black" />
              </Box>
            ))}
        </Stack>
        {isLoggedIn ? (
          <Box>
            <IconButton
              sx={{
                height: '5.5vw',
                padding: '1vw',
                boxSizing: 'border-box',
              }}
              onClick={() => {
                fetchInvitations().then(() => setIsMailBoxModalOpen(true))
              }}
            >
              <img src="/assets/icons/email.svg" height="100%" alt="email" />
            </IconButton>
            <Button
              href="/dashboard"
              sx={{
                fontFamily: 'IRANSansLight !important',
                color: 'black',
                fontWeight: 300,
                fontSize: matches ? '1.5vw' : '2.5vw',
                lineHeight: '2vw',
                width: 'fit-content',
                border: '1px solid black',
                borderRadius: '10px',
              }}
            >
              {username}
            </Button>
            <Button
              sx={{
                fontFamily: 'IRANSansLight !important',
                color: 'red',
                fontWeight: 300,
                fontSize: matches ? '1.5vw' : '2.5vw',
                lineHeight: '2vw',
                width: 'fit-content',
                border: '1px solid red',
                borderRadius: '10px',
                marginRight: '1vw',
              }}
              onClick={handleLogout}
            >
              خروج
            </Button>
          </Box>
        ) : (
          <Stack flexDirection="row" sx={{ height: matches ? '2.5vw' : '5vw' }}>
            <Button
              href="/signup"
              sx={{
                fontFamily: 'IRANSansLight !important',
                background:
                  'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 300,
                fontSize: matches ? '1.5vw' : '2.5vw',
                lineHeight: '2vw',
                width: matches ? '8vw' : '11vw',
                marginLeft: '1vw',
              }}
            >
              ثبت نام
            </Button>
            <Button
              href="/login"
              sx={{
                fontFamily: 'IRANSansLight !important',
                color: 'black',
                fontWeight: 300,
                fontSize: matches ? '1.5vw' : '2.5vw',
                lineHeight: '2vw',
                width: '8vw',
                border: '1px solid black',
                borderRadius: '10px',
              }}
            >
              ورود
            </Button>
          </Stack>
        )}
      </Stack>
    </StyledAppbar>
  )
}
