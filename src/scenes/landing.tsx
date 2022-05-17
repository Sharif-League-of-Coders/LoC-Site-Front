import { Stack } from '@mui/material'
import { AboutEvent } from 'components/landing/about-event'
import { ContactUs } from 'components/landing/contact-us'
import { FrequentlyAskedQuestion } from 'components/landing/frequently-asked-question'
import { Header } from 'components/landing/header/header'
import { RegisterNow } from 'components/landing/register-now'
import { Sponsor } from 'components/landing/sponsor/sponsor'
import { useSelector } from 'react-redux'
import { isLoggedInVew } from './_slice/account.slice'

export function Landing() {
  const isLoggedIn = useSelector(isLoggedInVew)
  return (
    <Stack sx={{ overflow: 'hidden', direction: 'rtl', maxWidth: '100%' }}>
      <Header />
      <AboutEvent />
      <Sponsor />
      {isLoggedIn && <RegisterNow />}
      <FrequentlyAskedQuestion />
      <ContactUs />
    </Stack>
  )
}
