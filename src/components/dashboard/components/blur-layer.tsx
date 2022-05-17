import { Stack, styled, Typography } from '@mui/material'

const BlurLayerWrapper = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(3px)',
  left: 0,
  top: 0,
  borderRadius: 'inherit',
  alignItems: 'center',
  justifyContent: 'center',
}))

export function BlurLayer({ matches }: { matches: boolean }) {
  return (
    <BlurLayerWrapper>
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
    </BlurLayerWrapper>
  )
}
