import userService from 'apis/service/user.api'
import { useMutation } from 'react-query'
import TokenRepository from 'repositories/TokenRepository'

const userApi = {
	useSignup: () => {
		const { mutate } = useMutation(userInfo => userService.signUp(userInfo), {
			onSuccess: () => {
				alert('축하합니다 회원가입이 완료되었습니다.')
			},
			onError: () => {
				alert('회원가입에 실패하셨습니다.')
			},
		})
		return { mutate }
	},
}

export const userLoginApi = {
	userLogin: (email, pw) => {
		const { mutate } = useMutation(() => userService.login(email, pw), {
			onSuccess: data => {
				console.log(data)
				alert('축하합니다 로그인 되셨습니다.')
				TokenRepository.setToken(data.data.tokenForHeader)
			},
			onError: () => {
				alert('다시 로그인 해주세요요')
			},
		})
		return { mutate }
	},
}

export default userApi
