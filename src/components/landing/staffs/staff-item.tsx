import { Avatar, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export function StaffItem({ name, image, position }) {
  const [src, setSrc] = useState(image)
  useEffect(() => setSrc(image), [image])
  return (
    <Stack alignItems="center">
      <Avatar

        sx={{ width: '250px', height: '250px' }}
        src={`https://locsharif.com${src}`}
      />
      <Typography>{name}</Typography>
      <Typography>{position}</Typography>
    </Stack>
  )
}
