import { isAtuhUi } from 'atom/header/uiatom';
import Login from 'components/templates/AuthPageTemplate/LoginTemplate'
import SignUp from 'components/templates/AuthPageTemplate/SignUpTemplate';
import React from 'react'

import { useRecoilValue } from 'recoil';

const AuthPage = () => {


  const setIsLginUi = useRecoilValue(isAtuhUi); 
	
	return (
		<div>
			{isLoggedIn ? <Login/> : <SignUp />}
		</div>
	)
}

export default AuthPage
