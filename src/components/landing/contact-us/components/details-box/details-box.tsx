import { Stack } from '@mui/material'

export function DetailsBox({ imageSrc, description, title }) {
  return (
    <Stack
      alignItems="flex-start"
      flexDirection="row"
      sx={{ marginTop: '1.5vw' }}
    >
      <div className="icon">
        <img
          style={{
            maxWidth: '10vw',
            maxHeight: '5vw',
            width: '1.5vw',
            height: '1.5vw',
            marginLeft: '.5vw',
          }}
          src={`${imageSrc}`}
        />
      </div>
      <Stack
        alignItems="flex-start"
        sx={{
          borderRight: '0.25vw solid black',
          padding: '0 0.9vw 0 0',

          width: '32.5vw',
        }}
      >
        <Stack
          justifyContent=" center"
          alignItems="center"
          sx={{
            width: 'fit-content',
            fontSize: '1.5vw',
            lineHeight: '2.5vw',
            textAlign: 'center',
            fontFamily: 'IRANSansLight, sans-serif',
          }}
        >
          {title}
        </Stack>
        <Stack
          alignItems="center"
          sx={{
            fontWeight: '300',
            fontSize: '1.5vw',
            lineHeight: '2.5vw',
            fontFamily: 'IRANSansLight, sans-serif',
          }}
        >
          {description}
        </Stack>
      </Stack>
    </Stack>
  )
}
