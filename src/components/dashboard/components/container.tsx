import { Stack, styled } from '@mui/material'

interface StyledStackProps {
  matches: boolean
}

export const Container = styled(Stack)<StyledStackProps>(({ matches }) => ({
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  marginLeft: matches ? '7.25vw' : 0,
  borderRadius: matches ? '3vw' : '7vw',
  width: matches ? '40vw' : '100%',
  padding: matches ? '2vw' : '5vw',
  boxSizing: 'border-box',
  position: 'relative',
  justifyContent: 'space-between',
  backgroundColor: 'white',
}))
