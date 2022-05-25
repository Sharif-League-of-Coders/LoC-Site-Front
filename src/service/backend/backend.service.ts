import { getReceivedInvitations, getSentInvitations } from './backend.api'
import store from '../../setup/store/store'
import { addInvitations } from '../../scenes/_slice/account.slice'

export const fetchInvitations = async () => {
  const token = store.getState().account.token
  const sentInvitations = await getSentInvitations({ token })
  const receivedInvitation = await getReceivedInvitations({
    token,
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.dispatch(addInvitations(sentInvitations))
  store.dispatch(addInvitations(receivedInvitation))
}
