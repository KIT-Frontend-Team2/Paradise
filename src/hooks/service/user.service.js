import { useMutation } from 'react-query'
import { useSocket } from 'socket/socket'

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

	login: () => {
		const socket = useSocket()
		const { mutateAsync } = useMutation(
			loginInfo => userApi.login(loginInfo.email, loginInfo.pw),
			{
				retry: 1,
				onSuccess: data => {
					const userData = {
						...data.data.user,
						socket: socket.id,
					}
					UserRepository.setUser(JSON.stringify(userData))
					TokenRepository.setToken(data.data.tokenForHeader)
					socket.emit('connect-user', { token: TokenRepository.getToken() })
				},
			},
		)
		return { mutateAsync }
	},

	logout: () => {
		const { mutate, isSuccess } = useMutation(() => userApi.logOut(), {
			retry: 1,
			onError: () => {
				alert(ERROR_MESSAGE)
			},
			onSuccess: () => {
				UserRepository.removeUser()
				TokenRepository.removeToken()
			},
		})
		return { mutate, isSuccess }
	},

	checkEmail: email => {
		const { mutateAsync } = useMutation(() => userApi.checkEmail(email), {
			onSuccess: () => {
				alert('사용 가능한 이메일입니다.')
			},
		})
		return { mutateAsync }
	},

	checkNickName: nickName => {
		const { mutateAsync } = useMutation(() => userApi.checkNickName(nickName), {
			onSuccess: () => {
				alert('사용 가능한 닉네임입니다.')
			},
		})
		return { mutateAsync }
	},
}

export default useUserAPi
