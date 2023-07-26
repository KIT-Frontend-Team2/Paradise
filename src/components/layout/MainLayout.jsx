import React from 'react'
import { Outlet } from 'react-router-dom'

import SideBar from '../modal/Side/SideBar'
import MainFooter from '../ui/organisms/MainFooter/MainFooter'
import MainHeader from '../ui/organisms/MainHeader/MainHeader'

const MainLayout = () => (
	<>
		<MainHeader />
		<Outlet />
		<SideBar />
		<MainFooter />
	</>
)

export default MainLayout
