import { Dialog, IconButton, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import json2mq from 'json2mq'
import { MailItem, t } from '.'
import { useSelector } from 'react-redux'
import { invitationsView, tokenView } from '../../../scenes/_slice/account.slice'

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 100%;
    height: 100%;
    max-width: none;
  }
`

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function MailBoxModal({ isOpen, setIsOpen }: Props) {
  const invitations = useSelector(invitationsView)
  const token = useSelector(tokenView)

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )

  return (
    <StyledDialog open={isOpen} sx={{ width: '100%', height: '100%' }}>
      <Stack
        sx={{
          direction: 'rtl',
          padding: '40px',
        }}
      >
        <Stack alignItems="flex-end" sx={{ height: matches ? '1vw' : '2.4vw' }}>
          <IconButton>
            <img
              src="/assets/icons/close.svg"
              alt="close"
              height="100%"
              onClick={() => setIsOpen(false)}
            />
          </IconButton>
        </Stack>
        <Stack>
          <Typography>{t.title}</Typography>
        </Stack>
        <Stack>
          {invitations.map(invite => (
            <MailItem invite={invite} token={token}/>
          ))}
        </Stack>
      </Stack>
    </StyledDialog>
  )
}
