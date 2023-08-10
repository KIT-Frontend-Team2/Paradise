import useMove from 'hooks/useMovePage'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { isLoggedInAtom } from '../atom/header/atom'
import useUserAPi from '../hooks/service/user.service'
import { getCookie } from '../repositories/AuthCookie'

const PrivateRoute = () => {
	const { mutate } = useUserAPi.login()
	const { linkLanding } = useMove()
	const isLoggedIn = useRecoilValue(isLoggedInAtom)
	useEffect(() => {
		const userInfo = getCookie()
		if (!isLoggedIn && userInfo) {
			mutate(userInfo)
		}
		if (!isLoggedIn && !userInfo) {
			linkLanding()
		}
	}, [isLoggedIn])

	return isLoggedIn ? <Outlet /> : <Navigate to={linkLanding} />
}

export default PrivateRoute
