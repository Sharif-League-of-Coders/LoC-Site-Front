import { styled, Typography } from '@mui/material'

interface StyledTypographyProps {
  matches: boolean
  style?: {
    fontSize: unknown
  }
}

export const BoldStyledTypography = styled(Typography)<StyledTypographyProps>(
  ({ matches, style }) => ({
    fontFamily: 'IRANSansBold',
    background:
      'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    fontSize: style ? style.fontSize : matches ? '1.25vw' : '3.2vw',
  }),
)

export const LightStyledTypography = styled(Typography)<StyledTypographyProps>(
  ({ matches }) => ({
    fontFamily: 'IRANSansLight',
    background:
      'linear-gradient(90deg, #002B99 0%, #8000FF 60.42%, #F300F8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    fontSize: matches ? '1.25vw' : '3.2vw',
  }),
)
