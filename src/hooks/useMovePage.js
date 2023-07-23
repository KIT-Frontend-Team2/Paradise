import { useNavigate } from 'react-router-dom'

import API_KEY from '../consts/ApiKey'

const useMove = () => {
	const move = useNavigate()

	const linkMainPage = () => move('/')

	const linkSellList = () => move(API_KEY.LIST + API_KEY.SELL + '?page=0')

	const linkShareList = () => move(API_KEY.LIST + API_KEY.FREE + '?page=0')

	const linkMyPage = () => move(API_KEY.MYPAGE)

	const linkUserProduct = userId =>
		move(API_KEY.PRODUCT + API_KEY.USER + `/${userId}`)

	const linkDetailPage = productId =>
		move(API_KEY.PRODUCT + API_KEY.DETAIL + `/${productId}`)

	const linkSearchProduct = keyWord =>
		move(API_KEY.PRODUCT + API_KEY.SEARCH + `/${keyWord}}`)

	const linkModifyProduct = productId =>
		move(API_KEY.PRODUCT + API_KEY.UPDATE + `/${productId}`)

	return {
		linkMainPage,
		linkSellList,
		linkShareList,
		linkMyPage,
		linkDetailPage,
		linkUserProduct,
		linkSearchProduct,
		linkModifyProduct,
	}
}

export default useMove
