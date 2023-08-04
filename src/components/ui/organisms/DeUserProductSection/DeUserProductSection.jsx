import defaultImg from 'assets/images/기본프로필/default_profile_5.png'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import DeSectionTitle from '../../molecules/DeSectionTitle/DeSectionTitle'
import DeUserCard from '../../molecules/DeUserCard/DeUserCard'
import DeUserProductButton from '../../molecules/DeUserProductButton/DeUserProductButton'
import DeImageList from '../../molecules/ImageList/DeImageList'

const DeUserProductSection = ({
	imgProfile,
	productCount,
	userTemplate,
	userName,
	userId,
	itemData = [],
	containerWidth,
}) => {
	return (
		<S.ProductBox>
			<DeSectionTitle title={'판매자 정보'} />
			<DeUserCard
				imgProfile={imgProfile}
				productCount={productCount}
				userTemplate={userTemplate}
				userName={userName}
			/>
			{itemData.length > 1 ? (
				<>
					<DeImageList
						width={containerWidth}
						height={containerWidth * 0.65}
						cols={3}
						rowHeight={containerWidth * 0.31}
						itemData={itemData}
					/>
					{productCount && (
						<DeUserProductButton
							width={containerWidth}
							productCount={productCount}
							userId={userId}
						/>
					)}
				</>
			) : (
				<S.DefaultProductList>
					<img src={defaultImg} alt={'사용자의 데이터가 없습니다.'} />
					"해당 사용자의 판매 상품이 존재하지 않습니다.
				</S.DefaultProductList>
			)}
		</S.ProductBox>
	)
}

export default DeUserProductSection

DeUserProductSection.propTypes = {
	/**
	 * 사용자의 이미지를 넣어주세요
	 */
	imgProfile: PropTypes.string,
	/**
	 * 상품의 갯수를 넣어주세요
	 */
	productCount: PropTypes.number,
	/**
	 * 판매자의 온도를 알려주세요
	 */
	userTemplate: PropTypes.number.isRequired,
	/**
	 * 판매자의 이름을 알려주세요
	 */
	userName: PropTypes.string.isRequired,
	/**
	 * 판매자가 파는 품목을 알려주세요
	 */
	itemData: PropTypes.array,
	/**
	 * 해당 판매자의 아이디로 조회하기 위해 아이디를 받아옵니다.
	 */
	userId: PropTypes.number.isRequired,
}

const S = {}

S.ProductBox = styled.div`
	max-width: 540px;
`

S.DefaultProductList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
