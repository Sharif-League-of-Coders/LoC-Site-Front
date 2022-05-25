import { Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { acceptRequest, rejectRequest } from '../../../service/backend'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  invite: {
    id: number
    user?: {
      email: string
    }
    team?: {
      creator: {
        email: string
      }
    }
    status: string
  }
  token: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function MailItem({ invite, token }: Props) {
  const { status } = invite
  const getTextWithStatus = (status: string) => {
    switch (status) {
      case 'pending':
        return invite.user
          ? `در انتظار پاسخ از ${invite.user.email}`
          : `یک درخواست از طرف ${invite.team.creator.email} دارید آیا می‌پذیرید؟`
      case 'rejected':
        return `${invite.user.email} درخواست شما را رد کرد`
      case 'accepted':
        return `${invite.user.email} درخواست شما را پذیرفت`
    }
  }

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          height: '5vw',
        }}
      >
        <Typography>{getTextWithStatus(status)}</Typography>

        {invite.team && (
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              width: 'fit-content',
            }}
          >
            <Button
              onClick={() => {
                acceptRequest({ token, inviteId: invite.id })
              }}
              sx={{
                bgcolor: 'success.main',
                color: 'white',
                height: '1.75vw',
                marginLeft: '1vw',
                ':hover': {
                  bgcolor: 'success.main',
                },
              }}
            >
              <img
                src="/assets/icons/tick2.svg"
                height="100%"
                style={{ marginLeft: '.5vw' }}
                alt="tick"
              />
              قبــــــول
            </Button>
            <Button
              onClick={() => {
                rejectRequest({ token, inviteId: invite.id })
              }}
              sx={{
                bgcolor: 'error.main',
                color: 'white',
                height: '1.75vw',
                marginLeft: '1vw',

                ':hover': {
                  bgcolor: 'error.main',
                },
              }}
            >
              <img
                src="/assets/icons/reject.svg"
                height="100%"
                style={{ marginLeft: '.5vw' }}
                alt="reject"
              />
              خیــــــــر
            </Button>
            <IconButton
              sx={{
                borderWidth: '1px',
                borderColor: 'error.main',
                height: '1.75vw',
                p: 0,
              }}
            >
              <img src="/assets/icons/trash.svg" height="100%" alt="trash" />
            </IconButton>
          </Stack>
        )}
      </Stack>
      <Divider />
    </>
  )
}
