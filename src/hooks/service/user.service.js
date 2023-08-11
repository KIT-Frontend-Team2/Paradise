import { useMutation } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { useSocket } from 'socket/socket'

import userApi from '../../apis/service/user.api'
import { isLoggedInAtom } from '../../atom/header/atom'
import { ERROR_MESSAGE } from '../../consts/api'
import { deleteCookie, setCookie } from '../../repositories/AuthCookie'
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

		const setState = useSetRecoilState(isLoggedInAtom)
		const { mutateAsync, isSuccess, mutate } = useMutation(
			loginInfo => userApi.login(loginInfo.email, loginInfo.pw),
			{
				retry: 1,
				onSuccess: (data, variables) => {
					const so = {
						...data.data.user,
						socket: socket?.id,
					}
					UserRepository.setUser(so)
					TokenRepository.setToken(data.data.tokenForHeader)
					socket?.emit('connect-user', { token: TokenRepository.getToken() })
					setState(true)
					if (variables.check === true) {
						setCookie({
							email: variables.email,
							pw: variables.pw,
						})
					}
				},
			},
		)
		return { mutateAsync, mutate, isSuccess }
	},

	logout: () => {
		const setState = useSetRecoilState(isLoggedInAtom)
		const { mutate } = useMutation(() => userApi.logOut(), {
			retry: 1,
			onError: () => {
				alert(ERROR_MESSAGE)
			},
			onSuccess: () => {
				UserRepository.removeUser()
				TokenRepository.removeToken()
				setState(false)
				deleteCookie()
			},
		})
		return { mutate }
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
