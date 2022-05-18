import { Stack, styled } from '@mui/material'

interface ShadowStackProps {
  matches: boolean
}

export const ShadowStack = styled(Stack)<ShadowStackProps>(({ matches }) => ({
  width: matches ? 'calc(100% - 2vw)' : 'calc(100% - 4.8vw)',
  height: '100%',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  borderRadius: 'inherit',

  margin: matches ? '1vw' : '2.4vw',
  boxSizing: 'border-box',

  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
}))
