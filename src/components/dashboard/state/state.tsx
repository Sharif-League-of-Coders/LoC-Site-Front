import { Stack } from '@mui/material'
import {
  BoldStyledTypography,
  LightStyledTypography,
  ShadowStack,
} from '../components'

export function State() {
  return (
    <Stack
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',

        borderRadius: '65px',
        width: '29vw',
        height: '30vw',
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 'calc(100% -10px)',
          height: '6.5vw',
          borderRadius: '65px 65px 0 0',
          border: '5px solid #1C1C1E',
          boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        }}
      >
        <BoldStyledTypography>وضعیت</BoldStyledTypography>
      </Stack>
      <Stack
        sx={{ height: '100%', padding: '3.25vw', boxSizing: 'border-box' }}
      >
        <ShadowStack>
          <LightStyledTypography>شماره و نام فاز</LightStyledTypography>
        </ShadowStack>
        <ShadowStack>
          <LightStyledTypography>فایل سوال</LightStyledTypography>
        </ShadowStack>
        <ShadowStack>
          <LightStyledTypography>مدت زمان باقی مانده</LightStyledTypography>
        </ShadowStack>

        <ShadowStack>
          <LightStyledTypography>تاریخ ددلاین نهایی</LightStyledTypography>
        </ShadowStack>
      </Stack>
    </Stack>
  )
}
