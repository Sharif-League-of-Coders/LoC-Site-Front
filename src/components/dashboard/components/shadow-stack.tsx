import { Stack, styled } from '@mui/material'

export const ShadowStack = styled(Stack)(() => ({
  width: '100%',
  height: '100%',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  borderRadius: '40px',

  margin: '1vw 1vw 0 0',

  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
}))
