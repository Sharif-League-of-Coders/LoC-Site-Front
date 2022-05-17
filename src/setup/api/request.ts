import axios from 'axios'
import { HTTP_BACKEND } from '.'

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
        resolve(res.data)
      })
      .catch(error => {
        console.log('snackbar::error:get', error)
        reject(error)
      })
  })

export const getRequest = ({ path, params, data }) =>
  responseHandler(instance.get(path, { params, data }))