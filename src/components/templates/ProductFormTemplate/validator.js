/**
 * 물품 등록, 수정 폼 유효성 검사
 */
// 제목
export const validateTitle = () => {
	return {
		required: '제목을 입력해주세요.',
	}
}

// 가격
export const validatePrice = () => {
	return {
		required: '물품 가격을 입력해주세요.',
	}
}

// 내용
export const validateContent = () => {
	return {
		required: '내용을 입력해주세요.',
	}
}

// 거래 희망 장소
export const validatePlace = () => {
	return {
		required: '거래 희망 장소를 입력해주세요.',
	}
}
