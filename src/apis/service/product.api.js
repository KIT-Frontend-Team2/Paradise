const productApi = () => {
	const addRegisterProduct = () => {
		console.log('상품을 등록합니다.')
	}

	const postWishAdd = id => {
		console.log(id + ' 상품을 좋아요 또는 취소 요청을 보냅니다.')
	}

	const patchProductInfo = productInfo => {
		console.log(productInfo, ' 상품의 정보를 수정합니다.')
	}

	const deleteProduct = productId => {
		console.log(productId + ' 상품을 삭제합니다')
	}

	const postCompleteProduct = productId => {
		console.log(productId + ' 상품의 상태를 판매완료로 변경합니다.')
	}

	return {
		addRegisterProduct,
		postWishAdd,
		patchProductInfo,
		deleteProduct,
		postCompleteProduct,
	}
}

export default productApi
