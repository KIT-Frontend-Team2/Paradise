import axios from 'axios'
import API_KEY from 'consts/ApiKey'

import { BASE_URL } from '../../consts/api'
import { getCookie } from '../../repositories/AuthCookie'
import { axiosInstance } from '../axiosInstance'

const userService = {
	signUp: userInfo => {
		return axios.post(BASE_URL + API_KEY.API + API_KEY.USER, {
			...userInfo,
		})
	},

	login: (email, pw) => {
		return axios.post(BASE_URL + API_KEY.API + API_KEY.USER + '/login', {
			email,
			pw,
		})
	},

	logOut: () => {
		return axiosInstance.get(API_KEY.API + API_KEY.USER + '/logout')
	},

	checkNickName: nickname => {
		return axiosInstance.get(API_KEY.API + API_KEY.USER + '/check/nickname', {
			params: { nickname },
		})
	},

	checkEmail: email => {
		return axiosInstance.get(API_KEY.API + API_KEY.USER + '/check/email', {
			params: { email },
		})
	},

	getRefreshToken: () => {
		const loginInfo = JSON.stringify(getCookie())
		return axios.get(BASE_URL + API_KEY.API + API_KEY.USER + '/refreshToken', {
			data: {
				loginInfo,
			},
		})
	},

	getUserInfo: () => {
		return axiosInstance.get(API_KEY.API + API_KEY.USER + '/info')
	},

	getMypage: () => {
		return axiosInstance.get(API_KEY.API + API_KEY.USER + API_KEY.MYPAGE)
	},

	changeUserInfo: UserInfo => {
		return axiosInstance.patch(API_KEY.API + API_KEY.USER, { ...UserInfo })
	},

	changeUserProfile: image => {
		return axiosInstance.patch(API_KEY.API + API_KEY.USER + '/profile', image, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	changeUserPassword: pw => {
		return axiosInstance.patch(API_KEY.API + API_KEY.USER + '/password', { pw })
	},

	getMyPageProductInfo: filter => {
		return axiosInstance.get(
			API_KEY.API + API_KEY.USER + '/my-page/product-list',
			{
				params: {
					...filter,
				},
			},
		)
	},

	getMyPageLikeProductInfo: filter => {
		return axiosInstance.get(
			API_KEY.API + API_KEY.USER + '/my-page/like-product-list',
			{
				params: {
					...filter,
				},
			},
		)
	},

	getMyPageAccountBook: (page, category, start, end) => {
		return axiosInstance.get(
			API_KEY.API + API_KEY.USER + '/my-page/account-book',
			{
				params: {
					page,
					category,
					start,
					end,
				},
			},
		)
	},
}

export default userService
