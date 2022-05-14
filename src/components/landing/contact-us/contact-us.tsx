import { Box, Link, Stack, Typography } from '@mui/material'
import { DetailsBox } from './components/details-box/details-box'

export function ContactUs() {
  return (
    <Box
      sx={{
        background: 'url("contact-us.svg")',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw auto',

        width: '100vw',
        height: '60vw',
        padding: '1.7vw',
      }}
    >
      <Stack
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-between"
        id="contact-us"
        sx={{
          width: '100%',
          height: 'fit-content',
        }}
      >
        <Stack
          sx={{
            width: '100%',
            height: 'fit-content',
          }}
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            sx={{
              width: '100%',
              padding: '20px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'IRANSansBold',
                fontWeight: '900',
                fontSize: '3.75vw',

                letterSpacing: '0.015em',

                background:
                  'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ارتباط با ما
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center">
            <Stack
              justifyContent="space-between"
              flexDirection="row"
              sx={{ width: '15vw', marginRight: '2vw' }}
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 'max-content',
                  borderRight: '0.25vw solid black',
                  padding: '0 0.9vw 0 0.5vw',
                  height: 'fit-content',
                }}
              >
                <Stack
                  alignItems="center"
                  sx={{
                    fontFamily: 'Roboto, serif',
                    fontWeight: '400',
                    fontSize: '1.5vw',
                    lineHeight: '1.75vw',
                    letterSpacing: '0.385em',
                    width: '100%',
                  }}
                >
                  LOCSHARIF
                </Stack>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  sx={{
                    width: '100%',
                    marginTop: '1vw',
                  }}
                >
                  {[
                    {
                      image: 'instagram',
                      link: 'https://www.instagram.com/locsharif/',
                    },
                    {
                      image: 'twitter',
                      link: 'https://twitter.com/locsharif/',
                    },
                    {
                      image: 'linkedin',
                      link: 'https://www.linkedin.com/company/locsharif',
                    },
                    { image: 'telegram', link: 'https://t.me/locsharif/' },
                  ].map(({ image, link }) => (
                    <a href="link" target="_blank">
                      <img
                        style={{ width: '2.5vw', height: '2.5vw' }}
                        src={`${image}.svg`}
                      />
                    </a>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                borderRight: '0.2vw solid black',
                padding: '0 0.9vw 0.5vw 0',
                height: 'fit-content',
              }}
            >
              <Stack sx={{ width: '100%' }}>
                <Link
                  href="mailto:locsharif@gmail.com"
                  target="_blank"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <img
                    style={{
                      maxWidth: '10vw',
                      maxHeight: '5vw',
                      width: '1.8vw',
                      height: '1.8vw',
                    }}
                    src="gmail.svg"
                  />
                  <Stack
                    alignItems="center"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: '400',
                      fontSize: '1.5vw',
                      lineHeight: '1.75vw',
                      color: '#000000',
                    }}
                  >
                    LOCSHARIF@Gmail.com
                  </Stack>
                </Link>
              </Stack>
              <Stack flexDirection="row" sx={{ marginTop: '1vw' }}>
                <img
                  src="phone.svg"
                  style={{
                    maxWidth: '10vw',
                    maxHeight: '5vw',
                    width: '1.8vw',
                    height: '1.8vw',
                  }}
                />
                <Stack
                  alignItems="center"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: '400',
                    fontSize: '1.5vw',
                    lineHeight: '1.75vw',
                    letterSpacing: '0.265em',
                    color: '#000000',
                  }}
                  dir="ltr"
                >
                  {'(+98)9330880908'}
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <DetailsBox
            imageSrc="location.svg"
            title="آدرس"
            description="
              اتاق انجمن علمی (SSC) - طبقه‌ی همکف دانشکده‌ی مهندسـی کامــپیوتر -
              دانشگاه صنعتـــی شریـــــف"
          ></DetailsBox>
          <DetailsBox
            imageSrc="question-mark.svg"
            title="آیا می‌دانید؟"
            description="
          شکل‌های استفاده شده در این طراحی، شکل‌های ناممکن (Impossible shapes)
              نام دارند که این مورد با شعار رویــداد (Make it Possible) هـم
              راستــا است."
          ></DetailsBox>
        </Stack>

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100%', marginTop: '5vw' }}
        >
          <Stack sx={{ width: '100%' }} alignItems="center">
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                width: '28.75vw',
                height: '10vw',
              }}
            >
              {[
                { src: 'sharif-logo', width: '6.5vw', height: '6.5vw' },
                { src: 'logo', width: '9.5vw', height: '6.5vw' },
                { src: 'ssc-logo', width: '9.5vw', height: '6.5vw' },
              ].map(({ src, width, height }) => (
                <Box sx={{ width, height }}>
                  <img src={`${src}.svg`} width="100%" height="100%" />
                </Box>
              ))}
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: '100%',
              paddingRight: '15vw',
              boxSizing: 'border-box',
            }}
            alignItems="center"
          >
            <DetailsBox
              imageSrc="pencil.svg"
              title="توسعه دهندگان"
              description={
                <Typography
                  sx={{
                    fontWeight: '300',
                    fontSize: '1.5vw',
                    lineHeight: '2.5vw',
                    fontFamily: 'IRANSansLight, sans-serif',
                  }}
                >
                  <Typography fontFamily="inherit" fontSize="inherit">
                    بک‌اند: علی‌حسینی، کمیل، غضنفری
                  </Typography>
                  <Typography fontFamily="inherit" fontSize="inherit">
                    فرانت‌اند: دولت‌آبادی
                  </Typography>
                  <Typography fontFamily="inherit" fontSize="inherit">
                    طراحی: مصیبی
                  </Typography>
                  <Typography fontFamily="inherit" fontSize="inherit">
                    تمامی حقوق محفوظ است
                  </Typography>
                </Typography>
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
