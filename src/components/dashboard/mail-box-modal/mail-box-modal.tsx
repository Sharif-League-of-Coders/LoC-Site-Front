import { Dialog, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { t } from '.'

export function MailBoxModal() {
  const [isOpen, setIsOpen] = useState(true)

  return <Dialog open={isOpen}>
      <Stack>
        <Stack>
          <img src="/assets/icons/close.svg" alt="close"/>
        </Stack>
        <Stack>
          <Typography>
            {t.title}
          </Typography>
        </Stack>
        <Stack>

        </Stack>
      </Stack>
  </Dialog>
}