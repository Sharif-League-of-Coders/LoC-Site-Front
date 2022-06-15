import { Stack, Typography, useMediaQuery } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'
import { StaffItem } from './staff-item'
import json2mq from 'json2mq'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}


export function Staffs() {
  const items = new Array(10).fill(<StaffItem />)

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  return <Stack
    id='staffs'
    justifyContent={matches ? 'center' : 'flexStart'}
    alignItems='center'
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
    }}>
    <Typography>تیم برگزاری</Typography>
    <AliceCarousel items={items} responsive={responsive} />
  </Stack>
}