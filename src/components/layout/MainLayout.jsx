import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import MainFooter from '../ui/organisms/MainFooter/MainFooter'
import MainHeader from '../ui/organisms/MainHeader/MainHeader'
import SideBar from '../ui/organisms/SideBar/SideBar'

const MainLayout = () => (
	<>
		<MainHeader />
		<S.Container>
			<Outlet />
		</S.Container>
		<SideBar />
		<MainFooter />
	</>
)

export default MainLayout

export const S = {}

S.Container = styled.div`
	max-width: 1100px;
	margin: 0 auto 95px;
`
