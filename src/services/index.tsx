
import { Cookie } from "../hooks/useStorage";
import axiosInstance from "./axioInstance"

export interface InputData {
  payload?: any
  header?: any
  url: string
}

export async function Get(data: InputData) {
    const token = Cookie.get()?.access_token || null;
  const authToken = token;

  if (authToken) axiosInstance.defaults.headers.get["Authorization"] = `Bearer ${authToken}`
// console.log(data,"Get data>>");

  return await axiosInstance
    .get(data.url)
    .then(res => {
      // console.log(res,"resss>>>>sadfsad");
      return res.data
    })
    .catch(error => {
      return error.response?.data || { message: error.message, status: false };
    })
}

export async function Post(data: InputData, contentType?: string) {
  const token = Cookie.get()?.access_token || null;
  const authToken = token;

  if (authToken) axiosInstance.defaults.headers.post["Authorization"] = `Bearer ${authToken}`
  // console.log(data,"Post data>>");
  if (contentType) axiosInstance.defaults.headers.post["Content-Type"] = contentType
  else axiosInstance.defaults.headers.post["Content-Type"] = "application/json"
  return await axiosInstance
    .post(data.url, data.payload)
    .then(res => {
      // console.log(res,"post resss>>>>sadfsad");
      return res.data
    })
    .catch(error => {
      console.log(error,"catch resss>>>>sadfsad");
      return error.response?.data || { message: error.message, status: false };
    })
}

export async function Delete(data: InputData, contentType?: string) {
  const token = Cookie.get()?.access_token || null;
  const authToken = token;

  if (authToken) axiosInstance.defaults.headers.delete["Authorization"] = `Bearer ${authToken}`

  if (contentType) axiosInstance.defaults.headers.post["Content-Type"] = contentType
  else axiosInstance.defaults.headers.post["Content-Type"] = "application/json"

  return await axiosInstance
    .delete(data.url, {
      data: data.payload
    })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return error.response?.data || { message: error.message, status: false };
    })
}

export async function Put(data: InputData, contentType?: string) {
  const token = Cookie.get()?.access_token || null;
  const authToken = token;

  if (authToken) axiosInstance.defaults.headers.put["Authorization"] = `Bearer ${authToken}`

  if (contentType) axiosInstance.defaults.headers.post["Content-Type"] = contentType
  else axiosInstance.defaults.headers.post["Content-Type"] = "application/json"

  return await axiosInstance
    .put(data.url, data.payload)
    .then(res => {
      return res.data
    })
    .catch(error => {
      return error.response?.data || { message: error.message, status: false };
    })
}

