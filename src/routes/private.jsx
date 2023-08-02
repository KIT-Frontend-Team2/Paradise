import useMove from 'hooks/useMovePage'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import TokenRepository from 'repositories/TokenRepository'

const PrivateRoute = () => {
	const accessToken = TokenRepository.getToken()
	const { linkLanding } = useMove()

	useEffect(() => {
		if (!accessToken) {
			linkLanding()
		}
	}, [accessToken])

	return accessToken ? <Outlet /> : <Navigate to={linkLanding} />
}

export default PrivateRoute
