import {isAuthui } from 'atom/header/uiatom'
import Login from 'components/templates/AuthPageTemplate/LoginTemplate'
import SignUp from 'components/templates/AuthPageTemplate/SignUpTemplate'
import React from 'react'
import { useRecoilValue } from 'recoil'

const AuthPage = () => {
	const isAtuhUi = useRecoilValue(isAuthui)

	return <>{isAtuhUi ? <SignUp/> : <Login/> }</>
}

export default AuthPage
