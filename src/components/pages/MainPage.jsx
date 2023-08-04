import React from 'react'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import MainPageTemplate from '../templates/MainPageTemplate/MainPageTemplate'

const MainPage = () => {
	const { getMainPage } = LoadApi()
	const { data } = getMainPage()
	return <MainPageTemplate productInfo={data.data} />
}

export default MainPage
