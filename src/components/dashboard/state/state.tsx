import { Stack, styled, useMediaQuery } from '@mui/material'
import json2mq from 'json2mq'
import {
  BoldStyledTypography,
  LightStyledTypography,
  ShadowStack,
} from '../components'
import { BlurLayer } from '../components/blur-layer'
import { t } from '.'

interface ContainerProps {
  matches: boolean
}

const Container = styled(Stack)<ContainerProps>(({ matches }) => ({
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',

  borderRadius: matches ? '3vw' : '7vw',
  width: matches ? '29.25vw' : '100%',
  height: matches ? '30vw' : '70vw',

  boxSizing: 'border-box',
  marginTop: matches ? 0 : '7.25vw',

  position: 'relative',
}))

const HeaderContainer = styled(Stack)<ContainerProps>(({ matches }) => ({
  width: 'calc(100% -10px)',
  height: matches ? '6.5vw' : '15vw',
  borderRadius: 'inherit',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  border: '5px solid #1C1C1E',
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  alignItems: 'center',
  justifyContent: 'center',
}))

const BodyContainer = styled(Stack)<ContainerProps>(({ matches }) => ({
  height: '100%',
  padding: matches ? '2vw' : '5vw',
  boxSizing: 'border-box',
  borderRadius: 'inherit',
}))

export function State() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Container matches={matches}>
      <BlurLayer matches={matches} text={t.comingSoon} />

      <HeaderContainer matches={matches}>
        <BoldStyledTypography matches={matches}>وضعیت</BoldStyledTypography>
      </HeaderContainer>

      <BodyContainer matches={matches}>
        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            {t.numberAndNameOfThePhase}
          </LightStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            {t.questionFile}
          </LightStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            {t.remainingTime}
          </LightStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <LightStyledTypography matches={matches}>
            {t.dateOfLastDeadline}
          </LightStyledTypography>
        </ShadowStack>
      </BodyContainer>
    </Container>
  )
}
