import { Button, IconButton, Stack, Typography } from '@mui/material'
import { RemoveCircle } from '@mui/icons-material'

interface Props {
  text: string
}

export function MailItem({ text }: Props) {
  return (
    <Stack direction="row" alignItems="center">
      <Typography>{text}</Typography>

      <Button
        sx={{
          bgcolor: 'success.main',
          color: 'white',
          ':hover': {
            bgcolor: 'success.main',
          },
        }}
      >
        <img src="/assets/icons/tick.svg" />
        قبول
      </Button>
      <Button
        sx={{
          bgcolor: 'error.main',
          color: 'white',
          ':hover': {
            bgcolor: 'error.main',
          },
        }}
      >
        <img src="/assets/icons/reject.svg" />

        رد
      </Button>
      <IconButton
        sx={{
          borderWidth: '1px',
          borderColor: 'error.main',
        }}
      >
        <img src="/assets/icons/trash.svg" />
      </IconButton>
    </Stack>
  )
}
