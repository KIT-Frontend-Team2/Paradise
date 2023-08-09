import * as yup from 'yup'

export const ReviewValidation = yup.object({
	title: yup
		.string()
		.required('필수 입력 사항입니다.')
		.min(4, '최소4글자 입니다.')
		.max(15, '최대 20글자 입니다'),
	content: yup
		.string()
		.required('필수 입력사항입니다.')
		.min(4, '최소4글자 입니다.')
		.max(15, '최대 500글자 입니다'),
	ondo: yup
		.number()
		.min(1, '만족도를 선택해주세요')
		.max(5, '옳지않은 접근입니다.'),
})
