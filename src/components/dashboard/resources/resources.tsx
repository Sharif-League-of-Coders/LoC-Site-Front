import { Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { BoldStyledTypography, ShadowStack } from '../components'
import json2mq from 'json2mq'

interface WrapperStackProps {
  matches: boolean
}

const WrapperStack = styled(Stack)<WrapperStackProps>(({ matches }) => ({
  width: '100%',
  height: '100%',

  marginTop: matches ? '1vw' : '2.4vw',

  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',

  borderRadius: 'inherit',
}))

const BlurLayer = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(3px)',
  left: 0,
  top: 0,
  borderRadius: '65px',
  alignItems: 'center',
  justifyContent: 'center',
}))

export function Resources() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      justifyContent="space-between"
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        marginLeft: matches ? '7.25vw' : 0,
        borderRadius: matches ? '3vw' : '7vw',
        width: matches ? '29.25vw' : '100%',
        height: matches ? '30vw' : '70vw',
        padding: matches ? '2vw' : '5vw',
        background: 'transparent',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <BlurLayer>
        <Typography
          fontSize={matches ? '2vw' : '3.2vw'}
          lineHeight={matches ? '3vw' : '5vw'}
          fontFamily="IRANSansBold"
          sx={{
            background:
              'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          به زودی...
        </Typography>
      </BlurLayer>
      <ShadowStack matches={matches}>
        <BoldStyledTypography matches={matches}>داشبورد</BoldStyledTypography>
      </ShadowStack>
      <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            اطلاعات و تیم من
          </BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            جدول امتیازات
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>

      <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>مستندات</BoldStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>فیلم‌ها</BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            دیگر منابع
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>
    </Stack>
  )
}
