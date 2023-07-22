import { useNavigate } from 'react-router-dom'

const useMove = () => {
	const move = useNavigate()

	const linkSellList = () => move('/list/sell?page=0')

	const linkShareList = () => move('/list/free?page=0')

	const linkMyPage = () => move('/mypage')

	const linkDetailPage = productId => move(`/product/detail/${productId}`)

	const linkUserProduct = userId => move(`/product/user/${userId}`)

	const linkSearchProduct = keyWord => move(`/product/search/${keyWord}}`)

	return {
		linkSellList,
		linkShareList,
		linkMyPage,
		linkDetailPage,
		linkUserProduct,
		linkSearchProduct,
	}
}

export default useMove
