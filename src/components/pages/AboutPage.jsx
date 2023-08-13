import LandingPageTemplate from 'components/templates/LandingPageTemplate/LandingPageTemplate'

import useMove from '../../hooks/useMovePage'

const AboutPage = () => {
	const { linkRegister } = useMove()
	const movePage = () => {
		linkRegister()
	}

	return (
		<>
			<LandingPageTemplate type={'about'} movePage={movePage} />
		</>
	)
}

export default AboutPage
