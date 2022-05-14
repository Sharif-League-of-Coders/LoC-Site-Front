import { Box, Link, Stack, Typography, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'

import { DetailsBox } from './components/details-box/details-box'

export function ContactUs() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Box
      sx={{
        background: `url(assets/background/${
          matches ? 'desktop' : 'mobile'
        }/contact-us.svg)`,
        backgroundPosition: matches ? 'top center' : 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw auto',

        width: '100vw',
        height: matches ? '60vw' : 'max-content',
        padding: '1.7vw',
        boxSizing: 'border-box',
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
            height: matches ? 'fit-content' : '30%',
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
              boxSizing: 'border-box',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'IRANSansBold',
                fontWeight: '900',
                fontSize: matches ? '3.75vw' : '11vw',

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
              sx={{ width: matches ? '15vw' : '100%', marginRight: '2vw' }}
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 'max-content',
                  borderRight: `${matches ? '0.25vw' : '0.6vw'} solid black`,
                  padding: matches
                    ? '0 0.9vw 0 0.5vw'
                    : '0.9vw 0.9vw 0.5vw 0.5vw',
                  height: 'fit-content',
                  boxSizing: 'border-box',
                }}
              >
                <Stack
                  alignItems="center"
                  sx={{
                    fontFamily: 'Roboto, serif',
                    fontWeight: '400',
                    fontSize: matches ? '1.5vw' : '4vw',
                    lineHeight: matches ? '1.75vw' : '4.5vw',
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
                        style={{
                          width: matches ? '2.5vw' : '6vw',
                          height: matches ? '2.5vw' : '6vw',
                        }}
                        src={`assets/icons/${image}.svg`}
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
                borderRight: matches
                  ? '0.2vw solid black'
                  : '0.6vw solid black;',
                padding: '0 0.9vw 0.5vw 0',
                boxSizing: 'border-box',
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
                    textDecoration: 'none',
                  }}
                >
                  <img
                    style={{
                      maxWidth: '10vw',
                      maxHeight: '5vw',
                      width: matches ? '1.8vw' : '4vw',
                      height: matches ? '1.8vw' : '4vw',
                    }}
                    src="assets/icons/gmail.svg"
                  />
                  <Typography
                    fontFamily="Roboto, sans-serif"
                    fontWeight="400"
                    fontSize={matches ? '1.5vw' : '4vw'}
                    lineHeight={matches ? '1.75vw' : '4.5vw'}
                    color="black"
                  >
                    LOCSHARIF@Gmail.com
                  </Typography>
                </Link>
              </Stack>
              <Stack flexDirection="row" sx={{ marginTop: '1vw' }}>
                <img
                  src="assets/icons/phone.svg"
                  style={{
                    maxWidth: '10vw',
                    maxHeight: '5vw',
                    width: matches ? '1.8vw' : '4vw',
                    height: matches ? '1.8vw' : '4vw',
                  }}
                />
                <Stack
                  alignItems="center"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: '400',
                    fontSize: matches ? '1.5vw' : '4vw',
                    lineHeight: matches ? '1.75vw' : '4.5vw',
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
          flexDirection={matches ? 'row' : 'column-reverse'}
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100%', marginTop: matches ? '5vw' : '90vw' }}
        >
          <Stack sx={{ width: '100%' }} alignItems="center">
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                width: matches ? '28.75vw' : 'fit-content',
                height: '10vw',
                marginBottom: matches ? 'none' : '2vw',
              }}
            >
              {[
                {
                  src: 'sharif-logo',
                  width: matches ? '6.5vw' : '14vw',
                  height: matches ? '6.5vw' : '14vw',
                },
                {
                  src: 'logo',
                  width: matches ? '9.5vw' : '20vw',
                  height: matches ? '6.5vw' : '11.5vw',
                },
                {
                  src: 'ssc-logo',
                  width: matches ? '9.5vw' : '19.5vw',
                  height: matches ? '6.5vw' : '10vw',
                },
              ].map(({ src, width, height }) => (
                <Box sx={{ width, height, marginLeft: matches ? 0 : '3vw' }}>
                  <img
                    src={`assets/logos/${src}.svg`}
                    width="100%"
                    height="100%"
                  />
                </Box>
              ))}
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: '100%',
              paddingRight: matches ? '15vw' : 0,
              boxSizing: 'border-box',
              marginBottom: matches ? '0' : '5vw',
            }}
            alignItems={matches ? 'center' : 'flex-start'}
          >
            <DetailsBox
              imageSrc="pencil.svg"
              title="توسعه دهندگان"
              description={
                <Typography
                  sx={{
                    fontWeight: '300',
                    fontSize: matches ? '1.5vw' : '4vw',
                    lineHeight: matches ? '2.5vw' : '6vw',
                    fontFamily: 'IRANSansLight, sans-serif',
                  }}
                >
                  <Typography fontFamily="inherit" fontSize="inherit">
                    بک‌اند: حسین علی‌حســـــینی، کــمیل یحیی‌زاده، علیرضا غضنفری
                  </Typography>
                  <Typography fontFamily="inherit" fontSize="inherit">
                    فرانت‌اند: محمدحسین دولت‌آبادی
                  </Typography>
                  <Typography fontFamily="inherit" fontSize="inherit">
                    طراحی: محمد مصیبی
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
