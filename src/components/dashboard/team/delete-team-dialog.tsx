import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export function DeleteTeamDialog({open, handleClose}) {
  return (
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
          برای بازگشت مجدد نیاز دارید که از جانب سازنده تیم و یا یکی از اعضای آن
          دعوت‌نامه دریافت کنید. پس از تایید نیاز است که مجددا وارد شوید
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)}>انصراف</Button>
        <Button onClick={() => handleClose(true)} autoFocus>
          تایید
        </Button>
      </DialogActions>
    </Dialog>
  )
}
