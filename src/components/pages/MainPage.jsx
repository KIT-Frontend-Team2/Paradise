import React from 'react'

import useLoadApi from '../../hooks/pageQuery/useLoadPage'
import MainPageTemplate from '../templates/MainPageTemplate/MainPageTemplate'

const MainPage = () => {
	const { data, isError, isLoading } = useLoadApi.MainPage()

	if (isError) {
		return <>에러</>
	}

	if (isLoading) {
		return <>로딩중</>
	}

	return <MainPageTemplate productInfo={data.data.data} />
}

export default MainPage
