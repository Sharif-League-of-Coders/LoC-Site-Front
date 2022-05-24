import { getInvitations } from './backend.api'
import store from '../../setup/store/store'

export const fetchInvitations = () => {
  const token = store.getState().account.token
  const invitations = getInvitations({ token })
  console.log(invitations)
}
