import { useNavigate } from 'react-router-dom'

import API_KEY from '../consts/ApiKey'

const useMove = () => {
	// 페이지 이동만 시켜주고 싶을 때
	const move = useNavigate()

	// 페이지 이동과 스크롤 0 으로 이동하고 싶을 때
	const topMove = link => {
		window.scrollTo({ top: 0 })
		move(link)
	}

	const linkMainPage = () => topMove('/')

	const linkSellList = () => topMove(API_KEY.LIST + API_KEY.SELL)

	const linkShareList = () => topMove(API_KEY.LIST + API_KEY.FREE)

	const linkMyPage = () => topMove(API_KEY.MYPAGE)

	const linkUserProduct = userId =>
		topMove(API_KEY.PRODUCT + API_KEY.USER + `/${userId}`)

	const linkDetailPage = productId =>
		topMove(API_KEY.PRODUCT + API_KEY.DETAIL + `/${productId}`)

	const linkSearchProduct = keyWord =>
		topMove(API_KEY.PRODUCT + API_KEY.SEARCH + `/${keyWord.split('/')[0]}`)

	const linkModifyProduct = productId =>
		topMove(API_KEY.PRODUCT + API_KEY.UPDATE + `/${productId}`)

	const linkAuthPage = () => topMove(API_KEY.ACCOUNT)

	const linkRegister = () => topMove(API_KEY.PRODUCT + API_KEY.REGISTER)

	const prevPage = () => move(-1)
  
	const linkLanding = () => topMove(API_KEY.LANDING)

	return {
		move,
		topMove,
		linkMainPage,
		linkSellList,
		linkShareList,
		linkMyPage,
		linkDetailPage,
		linkUserProduct,
		linkSearchProduct,
		linkModifyProduct,
		linkAuthPage,
		linkRegister,
		prevPage,
		linkLanding,
	}
}

export default useMove
