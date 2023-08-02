import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import useMove from '../../../../hooks/useMovePage'
import { MChip } from '../../atoms/Chip/MChip'
import DeSectionTitle from '../../molecules/DeSectionTitle/DeSectionTitle'

const DeProductCategoryTag = ({ category }) => {
	const { linkSearchProduct } = useMove()
	return (
		<>
			<DeSectionTitle title={'태그'} />
			<S.CategoryBox>
				{category.map(item => (
					<MChip
						key={item.Tag.tag}
						onClick={() => linkSearchProduct(item.Tag.tag)}
						label={item.Tag.tag}
					/>
				))}
			</S.CategoryBox>
		</>
	)
}

export default DeProductCategoryTag

const S = {}

S.CategoryBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	div {
		height: 36px;
		line-height: 36px;
		background-color: white;
		border: 1px solid #cccccc;
		border-radius: 10px;
		max-width: 130px;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		color: ${({ theme }) => theme.PALETTE.black};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`
DeProductCategoryTag.propTypes = {
	/**
	 * 태그의 이름, 배열을 알려주세요
	 */
	category: PropTypes.array,
}
