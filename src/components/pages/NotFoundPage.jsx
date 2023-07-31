import useMove from '../../hooks/useMovePage'
import ErrorPage from "../error/Error";

const NotFoundPage = () => {
	const { linkMainPage } = useMove()

	return <ErrorPage resetError={() => linkMainPage()} />
}

export default NotFoundPage
