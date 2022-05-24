import { Dialog, Stack, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import json2mq from 'json2mq'
import { MailItem, t } from '.'

export function MailBoxModal() {
  const [isOpen, setIsOpen] = useState(true)
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  return (
    <Dialog open={isOpen}>
      <Stack sx={{ direction: 'rtl', padding: '40px'}}>
        <Stack alignItems="flex-end" sx={{ height: matches ? '1vw' : '2.4vw' }}>
          <img
            src="/assets/icons/close.svg"
            alt="close"
            height="100%"
          />
        </Stack>
        <Stack>
          <Typography>{t.title}</Typography>
        </Stack>
        <Stack>
          {['فلانی شما را به تیم دعوت کرده است'].map(text => (
            <MailItem text={text} />
          ))}
        </Stack>
      </Stack>
    </Dialog>
  )
}
