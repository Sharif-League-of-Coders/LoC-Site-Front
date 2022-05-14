import {
  AppBar,
  Container,
  IconButton,
  Divider,
  Toolbar,
  MenuItem,
  Typography,
  Button,
  styled,
  Box,
  Stack,
} from '@mui/material'

const StyledDivider = styled(Divider)(() => ({
  '&.MuiDivider-root': {
    marginTop: '1vw',
    marginBottom: '1vw',
  },

  '&.MuiDivider-root:last-child': {
    display: 'none',
  },
}))

const StyledAppbar = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}))

export function NavBar() {
  const sections = ['ارتباط با ما', 'سوالات متدوال', 'حامی', 'معرفی']
  return (
    <StyledAppbar
      sx={{
        bgcolor: 'white',
        height: '2.5vw',
        padding: '2.25vw 0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container sx={{ direction: 'rtl', height: '2.5vw' }}>
        <Toolbar disableGutters sx={{ height: '2.5vw' }}>
          <IconButton sx={{ height: '2.5vw' }}>
            <img src="logo.svg" width="100%" height="100%" />
          </IconButton>
          <StyledDivider orientation="vertical" flexItem />

          {sections.map((section) => (
            <>
              <MenuItem>
                <Typography sx={{ fontFamily: 'IRANSansLight' }} color="black">
                  {section}
                </Typography>
              </MenuItem>
              <StyledDivider orientation="vertical" flexItem color="black" />
            </>
          ))}
          <Button sx={{ fontFamily: 'IRANSansLight !important' }}>
            {'ثبت نام به زودی'}
          </Button>
        </Toolbar>
      </Container>
    </StyledAppbar>
  )
}
