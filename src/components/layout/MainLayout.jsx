import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
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
			<Toaster position="top-center" reverseOrder={false} />
			<S.Wrapper>
				<Suspense fallback={<></>}>
					<SideBar />
				</Suspense>
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
