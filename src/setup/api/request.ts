import axios from 'axios'
import { HTTP_BACKEND } from '.'
import { toast } from 'react-toastify'
import store from '../store/store'
import {
  setInvitations,
  setIsLoggedIn,
  setToken,
} from '../../scenes/_slice/account.slice'

const instance = axios.create({ baseURL: HTTP_BACKEND })

const responseHandler = response =>
  new Promise((resolve, reject) => {
    response
      .then(res => {
        const apiError = res.data?.error
        if (apiError) {
          reject(apiError)
          return
        }
        console.log(res)
        toast.success(
          'با موفقیت انجام شد.'
        )
        resolve(res.data)
      })
      .catch(error => {
        switch (error.response.data.detail) {
          case 'Invalid token.':
            store.dispatch(setToken(''))
            store.dispatch(setIsLoggedIn(''))
            store.dispatch(setInvitations([]))
            window.open('/login', '_self')
            break
          case 'you should be in a team to perform this action':
            break
          default:
            toast.error(error.response.data.detail)
        }
        console.log('snackbar::error:get', error)
        return error
      })
  })

export const getRequest = ({ path, params, data, headers }) =>
  responseHandler(instance.get(path, { params, data, headers }))

export const postRequest = ({ path, data, config }) =>
  responseHandler(instance.post(path, data, config))

export const putRequest = ({ path, data, config }) =>
  responseHandler(instance.put(path, data, config))

export const deleteRequest = ({ path, headers }) =>
  responseHandler(instance.delete(path, { headers }))
