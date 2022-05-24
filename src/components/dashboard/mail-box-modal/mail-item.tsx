import { Button, IconButton, Stack, Typography } from '@mui/material'
import { RemoveCircle } from '@mui/icons-material'

interface Props {
  text: string
}

export function MailItem({ text }: Props) {
  return (
    <Stack direction="row">
      <Typography>{text}</Typography>

      <Button>قبول</Button>
      <Button>رد</Button>
      <IconButton>
        <RemoveCircle />
      </IconButton>
    </Stack>
  )
}
