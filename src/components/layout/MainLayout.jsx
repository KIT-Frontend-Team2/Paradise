import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

import { useResetError } from '../../hooks/common/useResetError'
import ErrorPage from '../error/Error'
import ErrorBoundary from '../error/ErrorBoundary'
import SideBar from '../modal/Side/SideBar'
import MainFooter from '../ui/organisms/MainFooter/MainFooter'
import MainHeader from '../ui/organisms/MainHeader/MainHeader'

const MainLayout = () => {
	const { handleErrorReset } = useResetError()

	return (
		<ErrorBoundary Fallback={ErrorPage} onReset={handleErrorReset}>
			<S.Wrapper>
				<SideBar />
				<MainHeader />
				<Outlet />
				<MainFooter />
			</S.Wrapper>
		</ErrorBoundary>
	)
}

export default MainLayout

const S = {}

S.Wrapper = styled.div`
	position: relative;
`
