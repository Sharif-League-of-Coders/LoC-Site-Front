import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'

export function RedirectToCompetitionDialog({open, handleClose}){
  return <Dialog
    open={open}
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
      <Button onClick={() => handleClose(false)}>انصراف</Button>
      <Button onClick={() => handleClose(true)} autoFocus>
        تایید
      </Button>
    </DialogActions>
  </Dialog>
}