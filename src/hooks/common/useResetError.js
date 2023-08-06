import { useCallback } from 'react'

import { HTTPError } from '../../apis/HTTPError'
import { HTTP_STATUS_CODE } from '../../consts/api'
import useMove from '../useMovePage'

export const useResetError = () => {
	const { reload, linkMainPage, move } = useMove()
	const handleErrorReset = useCallback(
		error => {
			if (error instanceof Error && !(error instanceof HTTPError)) {
				reload()
				return
			}

			if (error.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
				reload()
			} else {
				linkMainPage()
			}
		},
		[move],
	)

	return { handleErrorReset }
}
