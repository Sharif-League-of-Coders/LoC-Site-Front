import { styled, Typography } from '@mui/material'

export const BoldStyledTypography = styled(Typography)(() => ({
  fontFamily: 'IRANSansBold',
  background:
    'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  fontSize: '1.25vw',
}))

export const LightStyledTypography = styled(Typography)(() => ({
  fontFamily: 'IRANSansLight',
  background:
    'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  fontSize: '1.25vw',
}))
