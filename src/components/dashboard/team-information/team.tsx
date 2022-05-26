import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { BoldStyledTypography } from '../components'
import json2mq from 'json2mq'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { MyInput } from './input'
import {
  createTeam,
  deleteTeamAndLogoutUser,
  getTeam,
  sendInvitation,
} from '../../../service/backend'
import { useSelector } from 'react-redux'
import { tokenView, usernameView } from '../../../scenes/_slice/account.slice'

interface TeamCreatorProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  placeholder: string
  buttonText: string
  clickHandler: () => unknown
}

const TeamCreator = ({
  value,
  setValue,
  placeholder,
  buttonText,
  clickHandler,
}: TeamCreatorProps) => {
  return (
    <Stack
      direction={'row'}
      justifyContent="space-between"
      sx={{
        margin: '3vw 0',
      }}
    >
      <MyInput
        value={value}
        sx={{
          height: '5vh',
          mx: 2,
          borderRadius: ' 1.5vw 0.1vw 0.1vw 0.1vw',
        }}
        onChange={event => setValue(event.target.value)}
        dir="rtl"
        disableUnderline={true}
        placeholder={placeholder}
      />

      <Button
        onClick={clickHandler}
        sx={{
          background:
            'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
          color: 'white',
          minWidth: 'fit-content',
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  )
}

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

  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      spacing={2}
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        marginLeft: matches ? '7.25vw' : 0,
        borderRadius: matches ? '3vw' : '7vw',
        width: matches ? '35.25vw' : '100%',
        padding: matches ? '0vw 2vw 2vw 2vw' : '1vw 5vw 5vw 5vw',
        background: 'transparent',
        boxSizing: 'border-box',
        position: 'relative',
        bgcolor: 'white',
      }}
    >
      <Dialog
        open={open}
        sx={{
          direction: 'rtl',
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'آیا مایل به ترک تیم هستید؟'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            برای بازگشت مجدد نیاز دارید که از جانب سازنده تیم و یا یکی از اعضای
            آن دعوت‌نامه دریافت کنید. پس از تایید نیاز است که مجددا وارد شوید
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>انصراف</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={goToCompetition}
        sx={{
          direction: 'rtl',
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            پس از فشردن دکمه تایید به صفحه مسابقه هدایت می‌شوید. اگر این اولین
            باری است که به صفحه مسابقه می‌روید، با وارد رمز Loc-1400-Sharif به
            روش فردی به مسابقه اضافه شوید.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseCompetition(false)}>انصراف</Button>
          <Button onClick={() => handleCloseCompetition(true)} autoFocus>
            تایید
          </Button>
        </DialogActions>
      </Dialog>
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
      <Box
        sx={{
          border: 3,
          borderRadius: '0px 5vh 0px 0px',
          borderColor: 'black',
          padding: '1vw 2vw',
        }}
      >
        <Stack justifyContent="space-between">
          <TeamCreator
            value={teamName}
            setValue={setTeamName}
            placeholder="نام تیم"
            buttonText="ساخت تیم"
            clickHandler={() => {
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
            }}
          />

          <Divider />
          <TeamCreator
            value={teammate}
            setValue={setTeammate}
            placeholder="پست الکترونیک هم‌تیمی"
            buttonText="ارسال دعوت‌نامه"
            clickHandler={() => {
              sendInvitation({ user_email: teammate, token }).then(console.log)
              setTeammate('')
            }}
          />
        </Stack>
      </Box>
      <Box sx={{ borderColor: 'black', border: 1, borderRadius: 1, p: 1 }}>
        <Stack>
          <Typography fontStyle={{ fontWeight: 'bold' }}>
            {'نحوه انتخاب هم تیمی'}
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
