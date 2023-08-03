import useMove from 'hooks/useMovePage'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import TokenRepository from 'repositories/TokenRepository'

const PrivateRoute = () => {
	TokenRepository.setToken(
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiand0IiwiaWR4Ijo5MiwiaWF0IjoxNjkwOTc4NjA2LCJleHAiOjE2OTExNzg2MDZ9.z_drGoZGrBNssbFHbgEIsAZoAPF1akL-mFbF43L-9y0',
	)
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
