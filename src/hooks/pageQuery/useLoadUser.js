import userService from 'apis/service/user.api'
import API_KEY from 'consts/ApiKey'
import { useQuery } from 'react-query'

import { queryConfig } from './@config'

const LoadUserApi = () => {
	const { getMyPage } = userService()

	const getMyPageHeader = () => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.MYPAGE],
			() => getMyPage(),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	}

	return { getMyPageHeader }
}

export default LoadUserApi
