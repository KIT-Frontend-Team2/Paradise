import ClearIcon from '@mui/icons-material/Clear'
import React from 'react'
import styled from 'styled-components'

import useViewListApi from '../../../../hooks/service/useViewList.service'
import useMove from '../../../../hooks/useMovePage'

const SiDeleteButton = ({ product }) => {
	const { linkDetailPage } = useMove()
	const { mutate } = useViewListApi.useDeleteViewList(product.id)

	return (
		<S.ImgBox key={product.id}>
			<S.DeleteButton onClick={() => mutate(product.id)}>
				<ClearIcon sx={{ fontSize: '15px', color: 'grey' }} />
			</S.DeleteButton>
			<img
				onClick={() => linkDetailPage(product.id)}
				src={product.img}
				alt={product.id}
				width={60}
				height={80}
			/>
		</S.ImgBox>
	)
}

export default SiDeleteButton

const S = {}

S.ImgBox = styled.div`
	cursor: pointer;
	position: relative;
	height: 80px;
`

S.DeleteButton = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	width: 15px;
	height: 15px;
`
