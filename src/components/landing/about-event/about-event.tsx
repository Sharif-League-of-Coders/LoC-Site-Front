import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'

const StyledSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  margin: 0.8vw;
  width: 25vw;
`

const StyledParagraph = styled('p')`
  font-family: IRANSansLight, sans-serif !important;

  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 2.5vw;
  text-align: justify;
`

const LargeTypography = styled(Typography)(() => ({
  fontFamily: 'IRANSansBold, sans-serif',
  fontWeight: 700,
  fontSize: '1.5vw',
  lineHeight: '2.5vw',
}))

export function AboutEvent() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Stack
      alignItems="center"
      id="about-event"
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/introduction.svg)`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw auto',
        width: '100vw',
        maxWith: '100vw',
        height: '60vw',
        padding: '1.6vw 7.5vw 25vw',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: '3.75vw',
          lineHeight: '170%',
          letterSpacing: '0.015em',
          fontFamily: 'IRANSansBold',

          background:
            'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        معرفی
      </Typography>

      <Box
        className="container"
        sx={{ borderRight: '0.05vw solid black', width: '100%' }}
      >
        <StyledSection>
          <StyledParagraph>
            رویداد لیگ برنامه‌نویسان شریف، توسط انجمن علمی دانشکده‌ی مهندسی
            کامپیوتر دانشگاه صنعتی شریف در نیم‌سال دوم تحصیلی ۱۴۰۰-۱۴۰۱ با مخاطب
            اصلی دانش‌جویان ترم دومی دانشگاه‌های مختلف برگزار می‌شود. در این
            رویداد، دانش‌جویان علاقه‌مند، کد حل سوالات مختلفی را به زبان
            برنامه‌نویسی جاوا نوشته و تسلط‌شان را بر روی مباحث مختلف درسی و
            فرادرسی مربوط به برنامه‌نویسی، افزایش می‌دهند.
          </StyledParagraph>
        </StyledSection>
        <StyledSection>
          <LargeTypography>برگزار کننده</LargeTypography>
          <StyledParagraph>
            انجمن علمی دانشکده‌ی مهندسی کامپیوتر دانشگاه صنعتی شریف
          </StyledParagraph>
        </StyledSection>
        <StyledSection>
          <LargeTypography>زمان برگزاری</LargeTypography>
          <StyledParagraph>بهار ۱۴۰۱</StyledParagraph>
        </StyledSection>
      </Box>
    </Stack>
  )
}
