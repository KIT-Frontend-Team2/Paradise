import userService from 'apis/service/user.api'
import API_KEY from 'consts/ApiKey'
import { useQuery } from 'react-query'

import { queryConfig } from './@config'

const LoadUserApi = () => {
	const getMyPageHeader = () => {
		const { data } = useQuery([API_KEY.MYPAGE], () => userService.getMypage(), {
			...queryConfig,
		})

		return { data }
	}

	return { getMyPageHeader }
}

export default LoadUserApi
