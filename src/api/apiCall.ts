/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import apiToken from './apiToken'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export const postRequest = async ({ url, data } : {url:string, data: any | File | FileList} ) => {
  const response = await apiToken.post(url, data)
  return response.data
}

export const putRequest = async ({ url, data } : {url:string, data: any | File | FileList} ) => {
  const response = await apiToken.put(url, data)
  return response.data
}

export const patchRequest = async ({ url, data } : {url:string, data: any | File | FileList} ) => {
  const response = await apiToken.patch(url, data)
  return response.data
}

export const getRequest = async ({ url } : {url: string}) => {
  const response = await apiToken.get(url)
  return response.data
}

export const deleteRequest = async ({ url } : {url: string}) => {
  const response = await apiToken.get(url)
  return response.data
}

export const registration = async ({ url, data }: { url: string, data: any }) => {
  const response = await axios.post(url, data)
  localStorage.setItem('bitstack_token', response.data.data.access)
  return response.data
}

export const login = async ({ url, data }: { url: string, data: any }) => {
  const response = await axios.post(url, data)
  // console.log(response.data)
  localStorage.setItem('bitstack_token', response.data.data)
  return response.data
}
