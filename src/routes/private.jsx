import useMove from 'hooks/useMovePage'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useUserAPi from '../hooks/service/user.service'
import { getCookie } from '../repositories/AuthCookie'
import { getLogin } from '../repositories/LoginCookie'

const PrivateRoute = () => {
	const { mutate } = useUserAPi.login()
	const { linkLanding } = useMove()
	const isLoggedIn = getLogin()
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
