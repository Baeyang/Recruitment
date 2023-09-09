import axios from "axios"

const API_DOMAIN = `http://localhost:3002/`

export const login = async (email,password) => {
    const result = await axios.get(API_DOMAIN + `company?email=${email}&password=${password}`)
    return result
}
//Company service
export const getAllcompany = async () => {
    const res = await axios.get(API_DOMAIN + `company`)
    const result = await res.data
    return result
}

export const getDetailCompany = async (id) => {
    const res = await axios.get(API_DOMAIN + `company/${id}`)
    const result = await res.data
    return result
}

export const editCompany = async (id,options) => {
    const res = await axios.patch(API_DOMAIN + `company/${id}`, options)
    const result = await res.data
    return result
}

export const checkExist = async (type,value) => {
    const res = await axios.get(API_DOMAIN + `company?${type}=${value}`)
    const result = await res.data
    return result
}

export const createCompany = async (options) => {
    const res = await axios.post(API_DOMAIN + `company` , options)
    const result = await res.data
    return result
}
//Job service
export const getAllJobs = async () => {
    const res = await axios.get(API_DOMAIN + `jobs`)
    const result = await res.data
    return result
}

export const getJobDetail = async (id) => {
    const res = await axios.get(API_DOMAIN + `jobs/${id}`)
    const result = await res.data
    return result
}

export const getListJobs = async (id) => {
    const res = await axios.get(API_DOMAIN + `jobs?idCompany=${id}`)
    const result = await res.data
    return result
}

export const updateJob = async (id, options) => {
    const res = await axios.patch(API_DOMAIN + `jobs/${id}` , options)
    const result = await res.data
    return result
}

export const deleteJob = async (id) => {
    const res = await axios.delete(API_DOMAIN + `jobs/${id}`)
    const result = await res.data
    return result
}

export const createJob = async (options) => {
    const res = await axios.post(API_DOMAIN + `jobs` , options)
    const result = await res.data
    return result
}
//Cv service
export const createCV = async (options) => {
    const res = await axios.post(API_DOMAIN + `cv`, options)
    const result = await res.data
    return result
}

export const getListCv = async (id) => {
    const res = await axios.get(API_DOMAIN + `cv?idCompany=${id}`)
    const result = await res.data
    return result
}

export const getDetailCV = async (id) => {
    const res = await axios.get(API_DOMAIN + `cv/${id}`)
    const result = await res.data
    return result
}

export const changeStatusCV = async (id,options) => {
    const res = await axios.patch(API_DOMAIN + `cv/${id}`, options)
    const result = await res.data
    return result
}

//tag service
export const getListTags = async () => {
    const res = await axios.get(API_DOMAIN + `tags`)
    const result = await res.data
    return result
}

//city

export const getListCity = async () => {
    const res = await axios.get(API_DOMAIN + `city`)
    const result = await res.data
    return result
}