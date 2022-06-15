import { Avatar, Stack, Typography } from '@mui/material'

export function StaffItem() {
  return <Stack alignItems='center'>
    <Avatar sx={{ width: '350px', height: '350px' }} />
    <Typography>
      محمدحسین دولت‌آبادی
    </Typography>
    <Typography>
      تیم فرانت
    </Typography>
  </Stack>
}