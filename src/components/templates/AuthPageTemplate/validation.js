import * as yup from 'yup'

export const Validation = yup.object({
	nickname: yup.string().required('필수 입력 사항입니다.'),
	email: yup
		.string()
		.required('필수 입력 사항입니다.')
		.email('이메일 형식이 아닙니다.')
		.matches(/\S+@\S+\.\S+/, '이메일 형식으로 입력해주세요'),
	password: yup
		.string()
		.required('필수 입력사항입니다.')
		.min(4, '최소4글자 입니다.')
		.max(15, '최대 15글자 입니다'),
	passwordConfirm: yup
		.string()
		.required('동일한 비밀번호를 입력해 주세요')
		.oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
	phone: yup.string().required('필수 입력 사항입니다.'),
	address: yup.string().required('필수 입력 사항입니다.'),
})

export const Validation2 = yup.object({
	email: yup
		.string()
		.required('필수 입력 사항입니다.')
		.email('이메일 형식이 아닙니다.')
		.matches(/\S+@\S+\.\S+/, '이메일 형식으로 입력해주세요'),
	pw: yup
		.string()
		.required('필수 입력사항입니다.')
		.min(4, '최소4글자 입니다.')
		.max(15, '최대 15글자 입니다'),
	check: yup.bool(),
})

export const Validation3 = yup.object({
	nickname: yup.string().required('필수 입력 사항입니다.'),
	phone: yup.string().required('필수 입력 사항입니다.'),
	address: yup.string().required('필수 입력 사항입니다.'),
})

export const Validation4 = yup.object({
	password: yup
		.string()
		.required('필수 입력사항입니다.')
		.min(4, '최소4글자 입니다.')
		.max(15, '최대 15글자 입니다'),
	passwordconfirm: yup
		.string()
		.required('동일한 비밀번호를 입력해 주세요')
		.oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
})
