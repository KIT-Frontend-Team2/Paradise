import useMove from 'hooks/useMovePage'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import TokenRepository from 'repositories/TokenRepository'

const PrivateRoute = () => {
	const TOKEN_KEY =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiand0IiwiaWR4Ijo3MiwiaWF0IjoxNjkwOTgyMjI1LCJleHAiOjE2OTExODIyMjV9.4ufDid5iBPKmVLG618ukC5Eazae4AGxhfUk_AyLDXbE'
	TokenRepository.setToken(TOKEN_KEY)
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
