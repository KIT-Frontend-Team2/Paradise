import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

import SideBar from '../modal/Side/SideBar'
import MainFooter from '../ui/organisms/MainFooter/MainFooter'
import MainHeader from '../ui/organisms/MainHeader/MainHeader'

const MainLayout = () => (
	<S.Wrapper>
		<SideBar />
		<MainHeader />
		<Outlet />
		<MainFooter />
	</S.Wrapper>
)

export default MainLayout

const S = {}

S.Wrapper = styled.div`
	position: relative;
`
