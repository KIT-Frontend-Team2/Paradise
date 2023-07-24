import axios from 'axios'

import API_KEY from '../consts/ApiKey'

export const service = () => {
	const getDetailProduct = async productId => {
		try {
			return await axios.get(API_KEY.DETAIL + '/' + productId)
		} catch (err) {
			throw new Error(err)
		}
	}

	const getMainProductList = async () => {
		try {
			return await axios.get(API_KEY.LIST)
		} catch (err) {
			throw new Error(err)
		}
	}

	const getProductList = async (optionKey, page) => {
		try {
			return await axios.get(API_KEY.LIST + '/' + optionKey, {
				params: {
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	}

	const getSearchKeyWordList = async (keyword, page) => {
		try {
			return await axios.get(API_KEY.SEARCH, {
				params: {
					keyword,
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	}

	const registerProduct = () => {
		console.log('상품을 등록합니다.')
	}

	const wishAdd = id => {
		console.log(id + ' 상품을 좋아요 또는 취소 요청을 보냅니다.')
	}

	const deleteProduct = productId => {
		console.log(productId + ' 상품을 삭제합니다')
	}

	const completeProduct = productId => {
		console.log(productId + ' 상품의 상태를 판매완료로 변경합니다.')
	}

	const getRecentProduct = () => {
		console.log('최근에 본 상품을 조회합니다.')
	}

	const addRecentProduct = productId => {
		console.log(productId + ' 상품을 최근에 본 상품을 추가합니다.')
	}

	const deleteRecentProduct = productId => {
		console.log(productId + ' 상품을 최근에 본 상품에서 제거합니다.')
	}

	return {
		getDetailProduct,
		getMainProductList,
		getRecentProduct,
		getSearchKeyWordList,
		registerProduct,
		wishAdd,
		deleteProduct,
		completeProduct,
		addRecentProduct,
		deleteRecentProduct,
		getProductList,
	}
}
