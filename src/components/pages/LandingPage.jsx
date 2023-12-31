import LandingPageTemplate from 'components/templates/LandingPageTemplate/LandingPageTemplate'

import useMove from '../../hooks/useMovePage'

const LandingPage = () => {
	const { linkAuthPage } = useMove()
	const movePage = () => {
		linkAuthPage()
	}

	return (
		<>
			<LandingPageTemplate type={'landing'} movePage={movePage} />
		</>
	)
}

export default LandingPage
