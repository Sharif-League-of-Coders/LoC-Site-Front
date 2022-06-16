import { useEffect, useState } from 'react'
import { Button, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import { StaffItem } from './staff-item'
import 'react-alice-carousel/lib/alice-carousel.css'
import './style.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}

const StyledButton = styled(Button)(({ matches }: { matches: boolean }) => ({
  fontFamily: 'IRANSansLight !important',
  background:
    'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
  borderRadius: '73px',
  color: 'white',
  fontWeight: 300,
  fontSize: matches ? '1.5vw' : '2.5vw',
  lineHeight: '2vw',
  width: matches ? '8vw' : '11vw',
  marginLeft: '1vw',
}))

export function Staffs() {
  const [staffs, setStaffs] = useState([])
  const [category, setCategory] = useState('Technical')
  useEffect(() => {
    axios.get('https://locsharif.com/api/v1/homepage/staff/all/').then(data => {
      const items = data.data.results
        .filter(
          ({ position }) =>
            position.includes(category) ||
            (category === 'Executive' && position.includes('Director')),
        )
        .map(({ name, image, position }) => (
          <StaffItem name={name} image={image} position={position} />
        ))
      console.log(items)
      setStaffs(items)
    })
  }, [category])

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  return (
    <Stack
      id="staffs"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/staff.svg)`,
        height: matches ? '60vw' : '100vw',
        width: '100vw',
        maxWidth: '100vw',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: matches ? '100vw auto' : 'contain',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'IRANSansBold',
          fontWeight: '900',
          fontSize: matches ? '3.75vw' : '11vw',

          letterSpacing: '0.015em',

          background:
            'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        تیم برگزاری
      </Typography>
      <Stack sx={{ width: '100%' }} alignItems="center">
        <AliceCarousel
          items={staffs}
          responsive={responsive}
          disableDotsControls

        />

        <Stack direction="row">
          <StyledButton
            matches={matches}
            onClick={() => setCategory('Technical')}
          >
            فنی
          </StyledButton>
          <StyledButton
            matches={matches}
            onClick={() => setCategory('Scientific')}
          >
            علمی
          </StyledButton>
          <StyledButton
            matches={matches}
            onClick={() => setCategory('Sponsorship')}
          >
            اسپانسرشیپ
          </StyledButton>
          <StyledButton
            matches={matches}
            onClick={() => setCategory('Workshop')}
          >
            کارگاه‌ها
          </StyledButton>
          <StyledButton
            matches={matches}
            onClick={() => setCategory('Executive')}
          >
            برگزاری
          </StyledButton>
          <StyledButton
            matches={matches}
            onClick={() => setCategory('Graphic')}
          >
            گرافیک
          </StyledButton>
          <StyledButton matches={matches} onClick={() => setCategory('Social')}>
            رسانه
          </StyledButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
