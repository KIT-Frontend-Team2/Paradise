import { useMutation } from 'react-query'

import userApi from '../../apis/service/user.api'
import { ERROR_MESSAGE } from '../../consts/api'
import TokenRepository from '../../repositories/TokenRepository'
import UserRepository from '../../repositories/UserRepository'

const useUserAPi = {
	signup: () => {
		const { mutateAsync } = useMutation(userInfo => userApi.signUp(userInfo), {
			retry: 1,
		})
		return { mutateAsync }
	},

	login: (email, pw) => {
		const { mutate, isSuccess } = useMutation(() => userApi.login(email, pw), {
			retry: 1,
			onError: () => {
				alert(ERROR_MESSAGE)
			},
			onSuccess: data => {
				TokenRepository.setToken(data.data.tokenForHeader)
			},
		})
		return { mutate, isSuccess }
	},

	logout: () => {
		const { mutate, isSuccess } = useMutation(() => userApi.logOut(), {
			retry: 1,
			onError: () => {
				alert(ERROR_MESSAGE)
			},
			onSuccess: () => {
				TokenRepository.removeToken()
				UserRepository.removeUser()
			},
		})
		return { mutate, isSuccess }
	},

	checkEmail: email => {
		const { mutateAsync } = useMutation(() => userApi.checkEmail(email), {
			onError: () => {
				alert('중복된 이메일입니다.')
			},
			onSuccess: () => {
				alert('사용 가능한 이메일입니다.')
			},
		})
		return { mutateAsync }
	},

	checkNickName: nickName => {
		const { mutateAsync } = useMutation(() => userApi.checkNickName(nickName), {
			onError: () => {
				alert('중복된 닉네임입니다.')
			},
			onSuccess: () => {
				alert('사용 가능한 닉네임입니다.')
			},
		})
		return { mutateAsync }
	},
}

export default useUserAPi
