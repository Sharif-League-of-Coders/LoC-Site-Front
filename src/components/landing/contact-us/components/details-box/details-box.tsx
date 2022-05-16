import { Stack, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'

export function DetailsBox({ imageSrc, description, title }) {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Stack
      alignItems="flex-start"
      flexDirection="row"
      sx={{ marginTop: matches ? '1.5vw' : '5vw' }}
    >
      <div className="icon">
        <img
          style={{
            maxWidth: '10vw',
            maxHeight: '5vw',
            width: matches ? '1.5vw' : '4vw',
            height: matches ? '1.5vw' : '4vw',
            marginLeft: '.5vw',
          }}
          src={`assets/icons/${imageSrc}`}
        />
      </div>
      <Stack
        alignItems="flex-start"
        sx={{
          borderRight: `${matches ? '0.25vw' : '0.6vw'} solid black`,
          padding: matches ? '0 0.9vw 0 0' : '0 2vw',
          boxSizing: 'border-box',
          width: matches ? '32.5vw' : '100%',
        }}
      >
        <Stack
          justifyContent=" center"
          alignItems="center"
          sx={{
            width: 'fit-content',
            fontSize: matches ? '1.5vw' : '4vw',
            lineHeight: matches ? '2.5vw' : '6vw',
            textAlign: 'center',
            fontFamily: 'IRANSansLight, sans-serif',
          }}
        >
          {title}
        </Stack>
        <Stack
          alignItems="center"
          sx={{
            fontWeight: 300,
            fontSize: matches ? '1.5vw' : '4vw',
            lineHeight: matches ? '2.5vw' : '6vw',
            fontFamily: 'IRANSansLight, sans-serif',
          }}
        >
          {description}
        </Stack>
      </Stack>
    </Stack>
  )
}
