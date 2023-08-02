import axios from 'axios'

import { BASE_URL, HTTP_STATUS_CODE } from '../consts/api'
import TokenRepository from '../repositories/TokenRepository'
import { HTTPError } from './HTTPError'
import userApi from './service/user.api'

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
})

export const handleApiWithAuth = config => {
	const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiand0IiwiaWR4Ijo3MSwiaWF0IjoxNjkwODk4MDg0LCJleHAiOjE2OTEwOTgwODR9.DYN14yeJAofXWKwVAT6iqgrPcvKY7H9PcggVotigePk'
	// const access_token = TokenRepository.getToken()

	if (access_token) {
		config.headers.Authorization = `Bearer ${access_token}`
	}

	return config
}

export const handleAPIError = async error => {
	if (!error.response) throw Error('에러가 발생했습니다.')

	const { data, status } = error.response
	if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
		throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message)
	}

	if (status === HTTP_STATUS_CODE.SESSION_EXPIRED) {
		await userApi.logOut()
		TokenRepository.removeToken()
	}

	if (status === HTTP_STATUS_CODE.NOT_FOUND) {
		throw new HTTPError(HTTP_STATUS_CODE.NOT_FOUND, data.message)
	}

	const originalRequest = error.config

	if (status === HTTP_STATUS_CODE.TOKEN_EXPIRED && !originalRequest._retry) {
		originalRequest._retry = true

		const res = await userApi.getRefreshToken()
		if (res.status === 200) {
			const token = res.data.data

			TokenRepository.setToken(token)

			axiosInstance.defaults.headers.common['Authorization'] = `Baerer ${token}`

			return axiosInstance(originalRequest)
		}
	}

	if (status >= HTTP_STATUS_CODE.BAD_REQUEST) {
		throw new HTTPError(HTTP_STATUS_CODE.BAD_REQUEST, data.message)
	}
}

axiosInstance.interceptors.request.use(handleApiWithAuth)
axiosInstance.interceptors.response.use(response => response, handleAPIError)
