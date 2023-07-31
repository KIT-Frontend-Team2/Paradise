const DEV = process.env.NODE_ENV === 'development'

// export const BASE_URL = process.env.REACT_APP_BASE_URL
export const BASE_URL = '/'

export const NETWORK = {
	RETRY_COUNT: 3,
}

export const HTTP_STATUS_CODE = {
	BAD_REQUEST: 400,
	SESSION_EXPIRED: 403,
	NOT_FOUND: 404,
	TOKEN_EXPIRED: 417,
	INTERNAL_SERVER_ERROR: 500,
}

export const HTTP_ERROR_MESSAGE = {
	[HTTP_STATUS_CODE.BAD_REQUEST]: {
		HEADING: '길을 잃었나요?',
		BODY: '요청하신 페이지를 찾을 수 없습니다.',
		BUTTON: '홈으로 가기',
	},
	[HTTP_STATUS_CODE.NOT_FOUND]: {
		HEADING: '현재 페이지를 표시할 수 없습니다.',
		BODY: `잠시 후 다시 시도해주세요.`,
		BUTTON: '새로고침',
	},
	[HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
		HEADING: '잘못된 요청입니다.',
		BODY: '확인 후 다시 시도해주세요.',
		BUTTON: '홈으로 가기',
	},
}

export const ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
