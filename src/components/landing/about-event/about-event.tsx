import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'

interface SectionProps {
  matches: boolean
}

const StyledSection = styled('section')<SectionProps>(({ matches }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'right',
  margin: '0.8vw',
  width: matches ? '25vw' : '100%',
}))

const StyledParagraph = styled('p')<SectionProps>(({ matches }) => ({
  fontFamily: 'IRANSansLight, sans-serif !important',

  fontSize: matches ? '1.5vw' : '4vw',
  lineHeight: matches ? '2.5vw' : '4.5vw',
  textAlign: 'justify',
}))

const LargeTypography = styled(Typography)<SectionProps>(({ matches }) => ({
  fontFamily: 'IRANSansBold, sans-serif',
  fontWeight: 700,
  fontSize: matches ? '1.5vw' : '4vw',
  lineHeight: matches ? '2.5vw' : '4vw',
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
        backgroundSize: matches ? '100vw auto' : 'contain',
        width: '100vw',
        maxWith: '100vw',
        height: matches ? '60vw' : '160vw',
        padding: '1.6vw 7.5vw 25vw',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: matches ? '3.75vw' : '11vw',
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
        <StyledSection matches={matches}>
          <StyledParagraph matches={matches}>
            رویداد لیگ برنامه‌نویسان شریف، توسط انجمن علمی دانشکده‌ی مهندسی
            کامپیوتر دانشگاه صنعتی شریف در نیم‌سال دوم تحصیلی ۱۴۰۰-۱۴۰۱ با مخاطب
            اصلی دانش‌جویان ترم دومی دانشگاه‌های مختلف برگزار می‌شود. در این
            رویداد، دانش‌جویان علاقه‌مند، کد حل سوالات مختلفی را به زبان
            برنامه‌نویسی جاوا نوشته و تسلط‌شان را بر روی مباحث مختلف درسی و
            فرادرسی مربوط به برنامه‌نویسی، افزایش می‌دهند.
          </StyledParagraph>
        </StyledSection>
        <StyledSection matches={matches}>
          <LargeTypography matches={matches}>برگزار کننده</LargeTypography>
          <StyledParagraph matches={matches}>
            انجمن علمی دانشکده‌ی مهندسی کامپیوتر دانشگاه صنعتی شریف
          </StyledParagraph>
        </StyledSection>
        <StyledSection matches={matches}>
          <LargeTypography matches={matches}>زمان برگزاری</LargeTypography>
          <StyledParagraph matches={matches}>بهار ۱۴۰۱</StyledParagraph>
        </StyledSection>
      </Box>
    </Stack>
  )
}
