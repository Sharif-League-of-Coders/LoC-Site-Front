import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material'

const Container = styled(Stack)(() => ({
  background: 'url(frequently-asked-questions.svg)',
  width: '100vw',
  height: '65vw',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100vw auto',
}))

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  fontSize: '1.75vw',
  borderRight: '.2vw solid #000000',
  height: '3.5vw',
  minHeight: '3.5vw',
  '& .MuiAccordionSummary-expandIconWrapper': {
    height: '1vw',
  },
}))

const StyledAccordion = styled(Accordion)`
  background-color: #f3f3f3;
  margin: 0.8vw 0;
  box-shadow: none;
`

const StyledAccordionDetails = styled(AccordionDetails)`
  font-weight: 200;
  font-size: 1.5vw;
  line-height: 118.19%;
  /* or 38px */

  text-align: justify;
`

export function FrequentlyAskedQuestion() {
  return (
    <Container alignItems="flex-start" id="faq">
      <Stack flexDirection="row" justifyContent="center" sx={{ width: '100%' }}>
        <Typography
          sx={{
            fontFamily: 'IRANSansBold',
            fontWeight: 900,
            fontSize: '3.75vw',
            letterSpacing: '0.015em',
            background:
              'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          سوالات متداول
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        sx={{
          width: '100%',
          height: '100%',
          paddingTop: '2vw',
        }}
      >
        <Box
          sx={{
            width: '43vw',
            marginRight: '9vw',
          }}
        >
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<img src="arrow-down.svg" />}>
              مسابقه چطوری هست؟
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              بعد از اینکه ثبت نام کردین و گروه‌هاتون رو تشکیل دادین، مسابقه
              شروع می‌شه و در طی سه مرحله اجرا می‌شه. توی هر مرحله یک سوال به
              شما داده می‌شه، سوالا جواب درست یا غلط معینی ندارن، هر کدی که
              بتونه امتیاز بیش‌تری از سوالا بگیره توی اون مرحله برنده میشه، در
              نهایت با توجه به مجموع امتیازا برنده نهایی اعلام می‌شه.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<img src="arrow-down.svg" />}>
              چیزی هم باید بلد باشیم تا بتونیم شرکت کنیم؟
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              حقیقتش مسابقه کد نویسیه، و دانش مبانی برنامه‌نویسی و برنامه‌نویسی
              پیشرفته‌ای که توی دانشگاه یاد گرفتین براتون کفایت میکنه، اگر
              اطلاعات بیش‌تری نیاز باشه، برگزارکننده‌ها در قالب مستندات یا
              کارگاه‌ها بهتون آموزش میدن.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<img src="arrow-down.svg" />}>
              خب ایول، حالا چطوری باید شرکت کنم؟
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              اول توی کانال LoCSharif عضو شو که از اخبار مطلع باشی، یه مدت دیگه
              فرم ثبت نام و تشکیل گروه رو داخلش قرار می‌دیم و می‌تونی از طریق
              اون برای شرکت توی مسابقه اقدام کنی.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<img src="arrow-down.svg" />}>
              صبر کن ببینم، اگه سوال داشتم از کی بپرسم؟
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              می‌تونی از طریق ایمیل و یا هر کدوم از شبکه‌های اجتماعی ما سوالت رو
              بپرسی و ما در اسرع وقت بهش پاسخ می‌دیم
            </StyledAccordionDetails>
          </StyledAccordion>
        </Box>
      </Stack>
    </Container>
  )
}
