import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { BoldStyledTypography } from '../components'
import json2mq from 'json2mq'
import { useEffect, useState } from 'react'
import {
  createTeam,
  deleteTeamAndLogoutUser,
  getTeam,
  sendInvitation,
} from '../../../service/backend'
import { useSelector } from 'react-redux'
import { tokenView, usernameView } from '../../../scenes/_slice/account.slice'
import { DeleteTeamDialog } from './delete-team-dialog'
import { RedirectToCompetitionDialog } from './redirect-to-competition-dialog'
import { CreateTeam } from './create-team'
import { SendInvitation } from './send-invitation'

export function TeamMaking() {
  const [teamName, setTeamName] = useState('')
  const [teammate, setTeammate] = useState('')
  const [team, setTeam] = useState(null)

  const token = useSelector(tokenView)
  const username = useSelector(usernameView)

  useEffect(() => {
    if (team) return
    if (!token) return
    getTeam({ token }).then(res => {
      setTeam(res)
      console.log(res)
    })
  }, [])

  const [open, setOpen] = useState(false)
  const [goToCompetition, setGoToCompetition] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = async (confirmed: boolean) => {
    setOpen(false)
    if (confirmed) {
      await deleteTeamAndLogoutUser()
      setTeam(null)
    }
  }

  const handleClickOpenCompetition = () => {
    setGoToCompetition(true)
  }

  const handleCloseCompetition = (confirmed: boolean) => {
    setGoToCompetition(false)
    if (confirmed) {
      window.open('https://quera.org/contest/add_to_contest/lmmoXeJyfN1b0BV/')
    }
  }

  const createTeamHandler = () => {
    createTeam({
      name: teamName,
      creator: username,
      members: [],
      token,
    }).then(() => {
      getTeam({ token }).then(res => {
        setTeam(res)
      })
    })
  }

  const sendInvitationHandler = () => {
    sendInvitation({ user_email: teammate, token }).then(console.log)
    setTeammate('')
  }

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        marginLeft: matches ? '7.25vw' : 0,
        borderRadius: matches ? '3vw' : '7vw',
        width: matches ? '42.5vw' : '102vw',
        padding: matches ? '2vw' : '5vw',
        background: 'transparent',
        boxSizing: 'border-box',
        position: 'relative',
        bgcolor: 'white',
      }}
    >
      <DeleteTeamDialog open={open} handleClose={handleClose} />
      <RedirectToCompetitionDialog
        open={goToCompetition}
        handleClose={handleCloseCompetition}
      />
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <img
          src="/assets/icons/group.svg"
          style={{ width: '4vw' }}
          alt="group"
        />
        <Box sx={{ width: '1vw' }} />
        <BoldStyledTypography
          style={{ fontSize: matches ? '2.25vw' : '5.2vw' }}
          matches={matches}
        >
          تیم
        </BoldStyledTypography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          padding: '1vw 0',
        }}
      >
        <CreateTeam
          value={teamName}
          setValue={setTeamName}
          clickHandler={createTeamHandler}
        />

        <SendInvitation
          value={teammate}
          setValue={setTeammate}
          clickHandler={sendInvitationHandler}
        />
      </Stack>
      <Box sx={{ borderColor: 'black', border: 1, borderRadius: 1, p: 1 }}>
        <Stack>
          <Typography fontStyle={{ fontWeight: 'bold' }}>
            {'نحوه انتخاب هم‌تیمی'}
          </Typography>
          <Stack direction={'row'}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: 'black', m: 1, mr: 0 }}
            />
            <Typography style={{ fontSize: 12 }}>
              کافیست پست الکترونیک هم‌تیمی خود را در ورودی مربوطه نوشته و دکمه
              ارسال دعوت‌نامه را بفشارید. پیامی مبنی بر این درخواست شما به صندوق
              فرد مورد نظر ارسال می‌شود که در صورت موافقت وی تیم‌بندی نهایی
              می‌شود. در صورت تمایل به تشکیل تیم ۳ نفره نیاز است تا به صورت
              جداگانه دعوت‌نامه ارسال کنید.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {team && (
        <>
          <Button
            sx={{
              background:
                'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
              color: 'white',
            }}
            onClick={() => handleClickOpenCompetition()}
          >
            شرکت در مسابقه
          </Button>
          <Box
            sx={{
              border: 3,
              borderRadius: '0px 5vh 0px 0px',
              borderColor: 'black',
              padding: '1vw 2vw',
            }}
          >
            <Stack
              justifyContent="space-between"
              sx={{
                padding: '1.5vw',
              }}
            >
              <Typography>اطلاعات تیم</Typography>
              <Divider sx={{ marginBottom: '3vw' }} />
              <Typography>{`نام تیم: ${team.name}`}</Typography>

              <Typography>{`سازنده: ${team.creator.email}`}</Typography>

              {team.members && team.members[0] && (
                <Typography>{`نفر اول: ${team.members[0].email}`}</Typography>
              )}
              {team.members && team.members[1] && (
                <Typography>{`نفر دوم: ${team.members[1].email}`}</Typography>
              )}
              {team.members && team.members[2] && (
                <Typography>{`نفر سوم: ${team.members[2].email}`}</Typography>
              )}
              <Button
                onClick={() => {
                  handleClickOpen()
                }}
                sx={{
                  bgcolor: 'error.main',
                  color: 'white',
                  marginTop: '10vw',
                  ':hover': {
                    bgcolor: 'error.main',
                  },
                }}
              >
                ترک و حذف گروه
              </Button>
            </Stack>
          </Box>
        </>
      )}
    </Stack>
  )
}
