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
    marginTop: '.5vmin !important',
    marginBottom: '.5vmin',
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
      <Stack
        sx={{
          direction: 'rtl',
          height: '2.5vw',
          maxWidth: '100vw',
          margin: '0 1.5vw',
          boxSizing: 'border-box',
          width: '90vw',
        }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack flexDirection="row" alignItems="center" sx={{ height: '2.5vw' }}>
          <IconButton sx={{ minHeight: '3.5vw', height: '2.5vw' }}>
            <img src="assets/logos/logo.svg" width="100%" height="100%" />
          </IconButton>
          <StyledDivider orientation="vertical" flexItem color="black" />

          {sections.map((section) => (
            <>
              <Box sx={{ minWidth: 'fit-content', padding: '0 .5vw' }}>
                <Typography
                  fontSize="1.25vw"
                  sx={{ fontFamily: 'IRANSansLight' }}
                  color="black"
                >
                  {section}
                </Typography>
              </Box>
              <StyledDivider orientation="vertical" flexItem color="black" />
            </>
          ))}
        </Stack>
        <Stack flexDirection="row" sx={{ height: '2.5vw' }}>
          <Button
            sx={{
              fontFamily: 'IRANSansLight !important',
              background:
                'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
              borderRadius: '10px',
              color: 'white',
              fontWeight: 300,
              fontSize: '1.5vw',
              lineHeight: '2vw',
              width: '8vw',
              marginLeft: '1vw',
            }}
          >
            {'ثبت نام'}
          </Button>
          <Button
            sx={{
              fontFamily: 'IRANSansLight !important',
              color: 'black',
              fontWeight: 300,
              fontSize: '1.5vw',
              lineHeight: '2vw',
              width: '8vw',
              border: '1px solid black',
              borderRadius: '10px',
            }}
          >
            {'ورود'}
          </Button>
        </Stack>
      </Stack>
    </StyledAppbar>
  )
}
