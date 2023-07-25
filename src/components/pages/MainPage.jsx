import React from 'react'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import MainPageTemplate from '../templates/MainPageTemplate/MainPageTemplate'

const MainPage = () => {
	const { getMainPage } = LoadApi()
	const { data, isError, isLoading } = getMainPage()

	if (isError) {
		return <>에러</>
	}

	if (isLoading) {
		return <>로딩중</>
	}

	return <MainPageTemplate productInfo={data.data.data} />
}

export default MainPage
