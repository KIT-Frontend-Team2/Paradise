import axios from 'axios'

const viewListService = () => {
	const getRecentProduct = async () => {
		try {
			return await axios.get('/product/viewed-list')
		} catch (err) {
			throw new Error(err)
		}
	}

	const postRecentProduct = async productId => {
		try {
			return await axios.post(`/product/viewed-list/${productId}`)
		} catch (err) {
			throw new Error(err)
		}
	}

	const deleteRecentProduct = async productId => {
		try {
			return await axios.delete(`/product/viewed-list/${productId}`)
		} catch (err) {
			throw new Error(err)
		}
	}

	return { getRecentProduct, postRecentProduct, deleteRecentProduct }
}

export default viewListService
