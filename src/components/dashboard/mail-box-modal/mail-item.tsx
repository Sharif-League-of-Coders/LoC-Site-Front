import { Button, IconButton, Stack, Typography } from '@mui/material'
import { RemoveCircle } from '@mui/icons-material'
import { acceptRequest, rejectRequest } from '../../../service/backend'

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
}

export function MailItem({ invite, token }: Props) {
  const { status } = invite
  const getTextWithStatus = (status: string) => {
    switch (status) {
      case 'pending':
        return invite.user
          ? `در انتظار پاسخ از ${invite.user.email}`
          : `یک درخواست از طرف ${invite.team.creator.email} دارید آیا می‌پذیرید؟`
    }
  }

  return (
    <Stack direction="row" alignItems="center">
      <Typography>{getTextWithStatus(status)}</Typography>

      {invite.team && (
        <>
          <Button
            onClick={() => acceptRequest({token, inviteId: invite.id})}
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
            onClick={() => rejectRequest({token, inviteId: invite.id})}

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
        </>
      )}
    </Stack>
  )
}
