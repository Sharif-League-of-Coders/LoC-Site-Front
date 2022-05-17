import { Stack, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'
import {
  BoldStyledTypography,
  LightStyledTypography,
  ShadowStack,
} from '../components'
import { BlurLayer } from '../components/blur-layer'

export function State() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Stack
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',

        borderRadius: matches ? '3vw' : '7vw',
        width: matches ? '29.25vw' : '100%',
        height: matches ? '30vw' : '70vw',

        boxSizing: 'border-box',
        marginTop: matches ? 0 : '7.25vw',

        position: 'relative'
      }}
    >
      <BlurLayer matches={matches} />
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 'calc(100% -10px)',
          height: matches ? '6.5vw' : '15vw',
          borderRadius: 'inherit',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          border: '5px solid #1C1C1E',
          boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        }}
      >
        <BoldStyledTypography matches={matches}>وضعیت</BoldStyledTypography>
      </Stack>
      <Stack
        sx={{
          height: '100%',
          padding: matches ? '2vw' : '5vw',
          boxSizing: 'border-box',
          borderRadius: 'inherit',
        }}
      >
        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            شماره و نام فاز
          </LightStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            فایل سوال
          </LightStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            مدت زمان باقی مانده
          </LightStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            تاریخ ددلاین نهایی
          </LightStyledTypography>
        </ShadowStack>
      </Stack>
    </Stack>
  )
}
