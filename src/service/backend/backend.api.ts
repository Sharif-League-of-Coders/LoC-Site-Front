import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from '../../setup/api'

export const createTeam = ({ name, creator, members, token }) =>
  postRequest({
    path: '/api/team/',
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

export const getSentInvitations = ({ token }) =>
  getRequest({
    path: '/api/team/invitations/team_sent',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
    params: {},
  })

export const getReceivedInvitations = ({ token }) =>
  getRequest({
    path: '/api/team/invitations/user_pending',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
    params: {},
  })

export const acceptRequest = ({ token, inviteId }) =>
  putRequest({
    path: `/api/team/invitations/user_pending/${inviteId}`,
    config: {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
    data: {
      answer: true,
    },
  })

export const rejectRequest = ({ token, inviteId }) =>
  putRequest({
    path: `/api/team/invitations/user_pending/${inviteId}`,
    config: {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
    data: {
      reject: 1,
    },
  })

export const deleteTeam = ({ token }) =>
  deleteRequest({
    path: '/api/team/',
    headers: {
      Authorization: `Token ${token}`,
    },
  })

export const logout = ({ token, username }) =>
  postRequest(
    {
      path: 'https://locsharif.com/api/user/logout',
      data: {
        username,
      },
      config: {
        headers: {
          Authorization: 'Token ' + token,
        }
        ,
      }
      ,
    },
  )
