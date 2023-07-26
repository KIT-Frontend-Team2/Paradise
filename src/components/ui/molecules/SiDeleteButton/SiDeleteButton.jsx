import ClearIcon from '@mui/icons-material/Clear'
import React from 'react'
import styled from 'styled-components'

import useViewListApi from '../../../../hooks/service/useViewList'
import useMove from '../../../../hooks/useMovePage'

const SiDeleteButton = ({ product }) => {
	const { linkDetailPage } = useMove()
	const { mutate } = useViewListApi.useDeleteViewList(product.id)

	return (
		<S.ImgBox key={product.id}>
			<S.DeleteButton onClick={() => mutate(product.id)}>
				<ClearIcon sx={{ fontSize: '15px', color: 'white' }} />
			</S.DeleteButton>
			<img
				onClick={() => linkDetailPage(product.id)}
				src={product.img}
				alt={product.id}
				width={80}
				height={80}
			/>
		</S.ImgBox>
	)
}

export default SiDeleteButton

const S = {}

S.ImgBox = styled.div`
	width: 80px;
	cursor: pointer;
	position: relative;
`

S.DeleteButton = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	background-color: black;
	width: 15px;
	height: 15px;
`
