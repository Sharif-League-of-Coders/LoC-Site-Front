import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { match } from 'assert'
import json2mq from 'json2mq'

interface ContainerProps {
  matches: boolean
}

const Container = styled(Stack)<ContainerProps>(({ matches }) => ({
  background: `url(assets/background/${
    matches ? 'desktop' : 'mobile'
  }/frequently-asked-questions.svg)`,
  width: '100vw',
  height: matches ? '65vw' : '160vw',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100vw auto',
}))

const StyledAccordionSummary = styled(AccordionSummary)<ContainerProps>(
  ({ matches }) => ({
    fontSize: matches ? '1.75vw' : '3.5vw',
    borderRight: `${matches ? '.2vw' : '.6vw'} solid #000000`,
    height: matches ? '3.5vw' : '7vw',
    minHeight: matches ? '3.5vw' : '7vw',
    padding: matches ? 'none' : '1vw',
    boxSizing: 'border-box',

    '& .MuiAccordionSummary-expandIconWrapper': {
      height: matches ? '1vw' : '2vw',
    },
  })
)

const StyledAccordion = styled(Accordion)<ContainerProps>(({ matches }) => ({
  backgroundColor: '#f3f3f3',
  margin: `${matches ? '0.8vw' : '2.25vw'} 0`,
  boxShadow: 'none',
}))

const StyledAccordionDetails = styled(AccordionDetails)<ContainerProps>(
  ({ matches }) => ({
    fontSize: matches ? '1.5vw' : '3.5vw',
    padding: matches ? 'none' : '2vw',
    boxSizing: 'border-box',
  })
)

export function FrequentlyAskedQuestion() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Container alignItems="flex-start" id="faq" matches={matches}>
      <Stack flexDirection="row" justifyContent="center" sx={{ width: '100%' }}>
        <Typography
          sx={{
            fontFamily: 'IRANSansBold',
            fontWeight: 900,
            fontSize: matches ? '3.75vw' : '11vw',
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
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: matches ? '43vw' : '100%',
            marginRight: matches ? '9vw' : 0,
            padding: matches ? 'none' : '0 9vw',
            boxSizing: 'border-box',
          }}
        >
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="assets/icons/arrow-down.svg" />}
            >
              مسابقه چطوری هست؟
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              بعد از اینکه ثبت نام کردین و گروه‌هاتون رو تشکیل دادین، مسابقه
              شروع می‌شه و در طی سه مرحله اجرا می‌شه. توی هر مرحله یک سوال به
              شما داده می‌شه، سوالا جواب درست یا غلط معینی ندارن، هر کدی که
              بتونه امتیاز بیش‌تری از سوالا بگیره توی اون مرحله برنده میشه، در
              نهایت با توجه به مجموع امتیازا برنده نهایی اعلام می‌شه.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="assets/icons/arrow-down.svg" />}
            >
              چیزی هم باید بلد باشیم تا بتونیم شرکت کنیم؟
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              حقیقتش مسابقه کد نویسیه، و دانش مبانی برنامه‌نویسی و برنامه‌نویسی
              پیشرفته‌ای که توی دانشگاه یاد گرفتین براتون کفایت میکنه، اگر
              اطلاعات بیش‌تری نیاز باشه، برگزارکننده‌ها در قالب مستندات یا
              کارگاه‌ها بهتون آموزش میدن.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="assets/icons/arrow-down.svg" />}
            >
              خب ایول، حالا چطوری باید شرکت کنم؟
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              اول توی کانال LoCSharif عضو شو که از اخبار مطلع باشی، یه مدت دیگه
              فرم ثبت نام و تشکیل گروه رو داخلش قرار می‌دیم و می‌تونی از طریق
              اون برای شرکت توی مسابقه اقدام کنی.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="assets/icons/arrow-down.svg" />}
            >
              صبر کن ببینم، اگه سوال داشتم از کی بپرسم؟
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              می‌تونی از طریق ایمیل و یا هر کدوم از شبکه‌های اجتماعی ما سوالت رو
              بپرسی و ما در اسرع وقت بهش پاسخ می‌دیم
            </StyledAccordionDetails>
          </StyledAccordion>
        </Box>
      </Stack>
    </Container>
  )
}
