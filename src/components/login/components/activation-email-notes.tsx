import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

interface ActivationEmailNotesProps {
  matches: boolean
  setShowActivationEmailSentNotes: React.Dispatch<React.SetStateAction<boolean>>
}

export function ActivationEmailSentNotes({
  matches,
  setShowActivationEmailSentNotes,
}: ActivationEmailNotesProps) {
  return (
    <Box
      sx={{
        boxShadow: '0px 4px 15px 2px rgba(0, 0, 0, 0.2)',
        borderRadius: '0 0 40px 0px',
        width: '100%',
        height: '100%',
        padding: matches ? '2vw' : '4vw',
        boxSizing: 'border-box',
        margin: matches ? '1vw 0' : '2.4vw 0',
      }}
    >
      <Stack
        justifyContent="flex-end"
        height={matches ? '1vw' : '2.4vw'}
        width="100%"
        onClick={() => setShowActivationEmailSentNotes(false)}
        sx={{ marginBottom: '.5vw' }}
      >
        <img src="/assets/icons/close.svg" height="100%" alt="close" />
      </Stack>
      <Typography
        display="inline"
        fontSize={matches ? '1.25vw' : '3vw'}
        lineHeight={matches ? '2vw' : '4.8vw'}
      >
        پیامی حاوی
        <Typography
          fontFamily="IRANSansBold"
          display="inline"
          fontSize="inherit"
          lineHeight="inherit"
        >
          {' '}
          لینک تاییدیه{' '}
        </Typography>
        ثبت نام شما به ایمیلتان ارسال شد. لطفا برای نهایی سازی فرایند ثبت نام
        ایمیل خود را بررسی کنید.
        <br />
        در صورت عدم دریافت پیام :<br />
        ۱- پوشه اسپم خود را بررسی کنید.
        <br />
        ۲- به این صفحه بازگشته و ایمیل خود را دوباره وارد نمایید.
        <br />
        ۳- از طریق کانال تلگرام و یا دیگر شبکه‌های اجتماعی با پشتیبانی تماس حاصل
        فرمایید.
      </Typography>
    </Box>
  )
}
