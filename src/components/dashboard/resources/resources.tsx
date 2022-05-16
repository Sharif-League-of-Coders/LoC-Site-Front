import { Stack, styled, Typography } from '@mui/material'
import { BoldStyledTypography, ShadowStack } from '../components'

const WrapperStack = styled(Stack)(() => ({
  width: '100%',
  height: '100%',

  marginTop: '1vw',

  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
}))

export function Resources() {
  return (
    <Stack
      justifyContent="space-between"
      sx={{
        boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
        marginLeft: '7.25vw',
        borderRadius: '65px',
        width: '29.25vw',
        height: '30vw',
        padding: '45px 50px',
        background: 'tarnsparent',
        boxSizing: 'border-box',
      }}
    >
      <ShadowStack>
        <BoldStyledTypography>داشبورد</BoldStyledTypography>
      </ShadowStack>
      <WrapperStack>
        <ShadowStack>
          <BoldStyledTypography>اطلاعات و تیم من</BoldStyledTypography>
        </ShadowStack>
        <ShadowStack>
          <BoldStyledTypography>جدول امتیازات</BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>

      <WrapperStack>
        <ShadowStack>
          <BoldStyledTypography>مستندات</BoldStyledTypography>
        </ShadowStack>

        <ShadowStack>
          <BoldStyledTypography>فیلم‌ها</BoldStyledTypography>
        </ShadowStack>
        <ShadowStack>
          <BoldStyledTypography>دیگر منابع</BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>
    </Stack>
  )
}
