import { Stack, styled, useMediaQuery } from '@mui/material'
import { BoldStyledTypography, ShadowStack } from '../components'
import json2mq from 'json2mq'
import { BlurLayer } from '../components/blur-layer'
import { t } from '.'

interface StyledStackProps {
  matches: boolean
}

const Container = styled(Stack)<StyledStackProps>(({ matches }) => ({
  boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.15)',
  marginLeft: matches ? '7.25vw' : 0,
  borderRadius: matches ? '3vw' : '7vw',
  width: matches ? '29.25vw' : '100%',
  height: matches ? '30vw' : '70vw',
  padding: matches ? '2vw' : '5vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative',
  justifyContent: 'space-between',

}))

const WrapperStack = styled(Stack)<StyledStackProps>(({ matches }) => ({
  width: '100%',
  height: '100%',

  marginTop: matches ? '1vw' : '2.4vw',

  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',

  borderRadius: 'inherit',
}))


export function Resources() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    }),
  )
  return (
    <Container matches={matches}>
      <BlurLayer matches={matches} text={t.comingSoon} />
      <ShadowStack matches={matches}>
        <BoldStyledTypography matches={matches}>داشبورد</BoldStyledTypography>
      </ShadowStack>
      <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            {t.myTeamDetails}
          </BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            {t.scoreBoard}
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>

      <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>{t.documentations}</BoldStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>{t.videos}</BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <BoldStyledTypography matches={matches}>
            {t.otherResources}
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>
    </Container>
  )
}
