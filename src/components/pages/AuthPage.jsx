import Login from 'components/templates/AuthPageTemplate/LoginTemplate'
import React, { useState } from 'react'
import styled from 'styled-components'

import SignUp from '../templates/AuthPageTemplate/SignUpTemplate'

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true)
	return (
		<S.Wrap>
			{isLogin ? (
				<Login setState={setIsLogin} />
			) : (
				<SignUp setState={setIsLogin} />
			)}
		</S.Wrap>
	)
}

export default AuthPage

const S = {}

S.Wrap = styled.div`
	margin-left: ${({ theme }) => (theme.isDesktop ? '20px' : 'auto')};
	margin-right: ${({ theme }) => (theme.isDesktop ? '20px' : 'auto')};
`