import { getRequest, postRequest } from '../../setup/api'

export const createTeam = ({ name, creator, members, token }) =>
  postRequest({
    path: '/api/team',
    data: {
      name,
      members,
      creator,
    },
    config: {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  })

export const getTeam = ({ token }) =>
  getRequest({
    path: '/api/team',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
    params: {},
  })

export const sendInvitation = ({ user_email, token }) =>
  postRequest({
    path: '/api/team/invitations/team_sent',
    data: {
      user_email,
    },
    config: {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  })

export const getInvitations = ({token}) =>
  getRequest({
    path: '/api/team/invitations/team_sent',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
    params: {},
  })