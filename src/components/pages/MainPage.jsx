import React from 'react'

import useLoadApi from '../../hooks/pageQuery/useLoadPage'

const MainPage = () => {
	const { data, isError, isLoading } = useLoadApi.MainPage()
	console.log(data)
	return <div>main</div>
}

export default MainPage
