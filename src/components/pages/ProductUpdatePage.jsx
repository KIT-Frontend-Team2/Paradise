import axios from 'axios'
import ProductForm from 'components/templates/ProductFormTemplate/ProductForm'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductUpdatePage = () => {
	const [detail, setDetail] = useState(null)
	const { productId } = useParams()

	const getDetail = async () => {
		const response = await axios.get(`/detail/${productId}`)
		setDetail(response.data.data)
	}

	useEffect(() => {
		getDetail()
	}, [])

	return (
		<>
			<ProductForm detail={detail} />
		</>
	)
}

export default ProductUpdatePage
