import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import json2mq from 'json2mq'

interface ContainerProps {
  matches: boolean
}

const Container = styled(Stack)<ContainerProps>(({ matches }) => ({
  background: `url(assets/background/${
    matches ? 'desktop' : 'mobile'
  }/frequently-asked-questions.svg)`,
  width: '100vw',
  height: matches ? '65vw' : '160vw',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100vw auto',
}))

const StyledAccordionSummary = styled(AccordionSummary)<ContainerProps>(
  ({ matches }) => ({
    fontSize: matches ? '1.75vw' : '3.5vw',
    borderRight: `${matches ? '.2vw' : '.6vw'} solid #000000`,
    height: matches ? '3.5vw' : '7vw',
    minHeight: matches ? '3.5vw' : '7vw',
    padding: matches ? 'none' : '1vw',
    boxSizing: 'border-box',

    '& .MuiAccordionSummary-expandIconWrapper': {
      height: matches ? '1vw' : '2vw',
    },
  })
)

const StyledAccordion = styled(Accordion)<ContainerProps>(({ matches }) => ({
  backgroundColor: '#f3f3f3',
  margin: `${matches ? '0.8vw' : '2.25vw'} 0`,
  boxShadow: 'none',
}))

const StyledAccordionDetails = styled(AccordionDetails)<ContainerProps>(
  ({ matches }) => ({
    fontSize: matches ? '1.5vw' : '3.5vw',
    padding: matches ? 'none' : '2vw',
    boxSizing: 'border-box',
  })
)

export function FrequentlyAskedQuestion() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 750,
    })
  )
  return (
    <Container alignItems="flex-start" id="faq" matches={matches}>
      <Stack flexDirection="row" justifyContent="center" sx={{ width: '100%' }}>
        <Typography
          sx={{
            fontFamily: 'IRANSansBold',
            fontWeight: 900,
            fontSize: matches ? '3.75vw' : '11vw',
            letterSpacing: '0.015em',
            background:
              'linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ???????????? ????????????
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        sx={{
          width: '100%',
          height: '100%',
          paddingTop: '2vw',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: matches ? '43vw' : '100%',
            marginRight: matches ? '9vw' : 0,
            padding: matches ? 'none' : '0 9vw',
            boxSizing: 'border-box',
          }}
        >
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="/assets/icons/arrow-down.svg" alt="down-arrow" />}
            >
              ???????????? ?????????? ????????
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              ?????? ???? ?????????? ?????? ?????? ?????????? ?? ????????????????????? ???? ?????????? ???????????? ????????????
              ???????? ??????????? ?? ???? ???? ???? ?????????? ???????? ???????????. ?????? ???? ?????????? ???? ???????? ????
              ?????? ???????? ????????????? ?????????? ???????? ???????? ???? ?????? ?????????? ???????????? ???? ?????? ????
              ?????????? ???????????? ??????????????? ???? ?????????? ?????????? ?????? ?????? ?????????? ?????????? ?????????? ????
              ?????????? ???? ???????? ???? ?????????? ?????????????? ?????????? ?????????? ?????????? ???????????.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="/assets/icons/arrow-down.svg" alt="down-arrow"/>}
            >
              ???????? ???? ???????? ?????? ?????????? ???? ???????????? ???????? ??????????
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              ???????????? ???????????? ???? ?????????????? ?? ???????? ?????????? ????????????????????????? ?? ?????????????????????????
              ????????????????????? ???? ?????? ?????????????? ?????? ???????????? ???????????? ?????????? ???????????? ??????
              ?????????????? ??????????????? ???????? ?????????? ????????????????????????????? ???? ???????? ?????????????? ????
              ??????????????????? ?????????? ?????????? ????????.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="/assets/icons/arrow-down.svg" alt="down-arrow"/>}
            >
              ???? ?????????? ???????? ?????????? ???????? ???????? ????????
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              ?????? ?????? ?????????? LoCSharif ?????? ???? ???? ???? ?????????? ???????? ?????????? ???? ?????? ????????
              ?????? ?????? ?????? ?? ?????????? ???????? ???? ?????????? ???????? ????????????? ?? ??????????????? ???? ????????
              ?????? ???????? ???????? ?????? ???????????? ?????????? ??????.
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion matches={matches}>
            <StyledAccordionSummary
              matches={matches}
              expandIcon={<img src="/assets/icons/arrow-down.svg" alt="down-arrow"/>}
            >
              ?????? ???? ???????????? ?????? ???????? ?????????? ???? ???? ????????????
            </StyledAccordionSummary>
            <StyledAccordionDetails matches={matches}>
              ??????????????? ???? ???????? ?????????? ?? ???? ???? ???????? ???? ????????????????? ?????????????? ???? ?????????? ????
              ?????????? ?? ???? ???? ???????? ?????? ?????? ???????? ?????????????
            </StyledAccordionDetails>
          </StyledAccordion>
        </Box>
      </Stack>
    </Container>
  )
}
