import useMove from 'hooks/useMovePage'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	// localStorage.setItem('accessToken', 'test')
	const accessToken = localStorage.getItem('accessToken')
	const { linkLanding } = useMove()

	useEffect(() => {
		if (!accessToken) {
			// linkLanding()
		}
	}, [accessToken])

	// return accessToken ? <Outlet /> : <Navigate to={linkLanding} />
	return <Outlet />
}

export default PrivateRoute
