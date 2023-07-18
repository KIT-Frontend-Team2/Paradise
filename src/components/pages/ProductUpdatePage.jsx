import axios from 'axios'
import ProductForm from 'components/templates/ProductForm'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductUpdatePage = () => {
	const [detail, setDetail] = useState([])
	const { detailId } = useParams()

	const getDetail = async () => {
		const response = await axios.get(`/detail/${detailId}`)
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
