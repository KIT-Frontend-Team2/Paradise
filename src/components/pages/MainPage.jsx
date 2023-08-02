import React from 'react'

import MainLogo from '../../assets/images/main-logo.png'
import LoadApi from '../../hooks/pageQuery/useLoadPage'
import MainPageTemplate from '../templates/MainPageTemplate/MainPageTemplate'

const MainPage = () => {
	const { getMainPage } = LoadApi()
	const { data } = getMainPage()

	const mainLogo = [
		{
			img_url: MainLogo,
			id: 1,
		},
		{
			img_url: MainLogo,
			id: 2,
		},
		{
			img_url: MainLogo,
			id: 3,
		},
	]
	return <MainPageTemplate mainLogo={mainLogo} productInfo={data.data} />
}

export default MainPage
