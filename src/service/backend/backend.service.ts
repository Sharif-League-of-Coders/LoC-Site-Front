import {
  deleteTeam,
  getReceivedInvitations,
  getSentInvitations,
  logout,
} from './backend.api'
import store from '../../setup/store/store'
import {
  addInvitations,
  setInvitations,
  setIsLoggedIn,
  setToken,
} from '../../scenes/_slice/account.slice'

export const fetchInvitations = async () => {
  const token = store.getState().account.token
  const sentInvitations = await getSentInvitations({ token })
  const receivedInvitation = await getReceivedInvitations({
    token,
  })
  store.dispatch(addInvitations(sentInvitations))
  store.dispatch(addInvitations(receivedInvitation))
}

export const logoutUser = async () => {
  const token = store.getState().account.token
  const username = store.getState().account.username
  await logout({ username, token })
  store.dispatch(setToken(''))
  store.dispatch(setIsLoggedIn(''))
  store.dispatch(setInvitations([]))
  window.open('/login', '_self')
}

export const deleteTeamAndLogoutUser = async () => {
  const token = store.getState().account.token
  await deleteTeam({ token })
  await logoutUser()
}
