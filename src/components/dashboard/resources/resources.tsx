import { Stack, styled, useMediaQuery } from '@mui/material'
import { BoldStyledTypography, ShadowStack } from '../components'
import json2mq from 'json2mq'
import { t } from '.'
import { Container } from '../components/container'

interface StyledStackProps {
  matches: boolean
}

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
    <Container
      matches={matches}
      sx={{
        height: matches ? '30vw' : '70vw',
      }}
    >
      <ShadowStack matches={matches}>
        <img
          src="/assets/icons/scoreboard.svg"
          style={{ marginLeft: matches ? '.5vw' : '2vw' }}
          alt="scoreboard"
        />
        <BoldStyledTypography matches={matches}>
          {t.scoreBoard}
        </BoldStyledTypography>
      </ShadowStack>

      <WrapperStack matches={matches}>
        <ShadowStack matches={matches}>
          <img
            src="/assets/icons/documents.svg"
            style={{ marginLeft: matches ? '.5vw' : '2vw' }}
            alt="document"
          />
          <BoldStyledTypography matches={matches}>
            {t.documentations}
          </BoldStyledTypography>
        </ShadowStack>

        <ShadowStack matches={matches}>
          <img
            src="/assets/icons/video.svg"
            style={{ marginLeft: matches ? '.5vw' : '2vw' }}
            alt="videos"
          />
          <BoldStyledTypography matches={matches}>
            {t.videos}
          </BoldStyledTypography>
        </ShadowStack>
        <ShadowStack matches={matches}>
          <img
            src="/assets/icons/other-resources.svg"
            style={{ marginLeft: matches ? '.5vw' : '2vw' }}
            alt="other resources"
          />
          <BoldStyledTypography matches={matches}>
            {t.otherResources}
          </BoldStyledTypography>
        </ShadowStack>
      </WrapperStack>
    </Container>
  )
}
