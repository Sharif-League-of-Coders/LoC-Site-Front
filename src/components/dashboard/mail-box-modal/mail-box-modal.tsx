import { Dialog, Divider, IconButton, Stack, styled, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
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

  return (
    <StyledDialog open={isOpen} sx={{ width: '100%', height: '100%' }}>
      <Stack
        sx={{
          direction: 'rtl',
          padding: '40px',
        }}
      >
        <Stack alignItems="flex-end">
          <IconButton
              onClick={() => setIsOpen(false)}
          >
            <img
              src="/assets/icons/close.svg"
              alt="close"
              height="100%"
            />
          </IconButton>
        </Stack>
        <Stack>
          <Typography>{t.title}</Typography>
        </Stack>
        <Divider />
        <Stack>
          {invitations ? invitations.map(invite => (
            <MailItem invite={invite} token={token} setIsOpen={setIsOpen}/>
          )) : <Typography>هیچ پیامی ندارید</Typography>}
        </Stack>
      </Stack>
    </StyledDialog>
  )
}
