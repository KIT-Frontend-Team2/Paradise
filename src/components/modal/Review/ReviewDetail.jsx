import CloseIcon from '@mui/icons-material/Close'
import { Rating } from '@mui/material'
import defaultImg from 'assets/images/기본프로필/default_profile_5.png'
import { S } from 'components/modal/Review/Review'
import React from 'react'
import styled from 'styled-components'

import reviewService from '../../../hooks/service/review.service'
import useMove from '../../../hooks/useMovePage'
import { formatNumberToMoney } from '../../../utils/formatter'

const ReviewDetail = ({ updateOpen, detail, deletehandling, handleClose }) => {
	const { data } = reviewService.getDetailReview(detail.idx).data
	const { title, content, ondo, img_url, ReviewImages } = data
	const Image_Array = [img_url, ...ReviewImages.map(v => v.imgUrl)]
	const productInfo = data.PayList.Product

	const { linkDetailPage } = useMove()
	const detailMove = () => {
		handleClose()
		linkDetailPage(productInfo.idx)
	}
	return (
		<>
			<S.Con>
				<S.BackgroundColor>
					<S.Wrapper>
						{/* 타이틀 시작 */}
						<S.TitleArea>
							<S.Title2>상세 리뷰</S.Title2>
							<RE.CloseButton onClick={handleClose}>
								<CloseIcon />
							</RE.CloseButton>
							<RE.Buttons>
								<RE.UpdateButton
									onClick={() =>
										updateOpen({
											title,
											content,
											ondo,
											img_url,
											ReviewImages,
											idx: detail.idx,
										})
									}
								>
									수정
								</RE.UpdateButton>
								<RE.UpdateButton onClick={() => deletehandling(detail.idx)}>
									삭제
								</RE.UpdateButton>
							</RE.Buttons>
						</S.TitleArea>
						<S.FormGroup>
							<S.FormLabel required={false}>상품 정보</S.FormLabel>
							<S.FormRegister>
								<>
									<RE.ProductImg>
										<img
											src={productInfo.img_url}
											alt={productInfo.idx}
											onClick={detailMove}
										/>
									</RE.ProductImg>
									<>
										<RE.ProductUserBox>
											<RE.UserProfileBox>
												판매자 :
												<RE.UserProfileImg
													src={productInfo.User.profile_url || defaultImg}
													alt={productInfo.User.idx}
													width={30}
													height={30}
												/>
											</RE.UserProfileBox>
											<RE.ProductSeller>
												{productInfo.User.nick_name}
											</RE.ProductSeller>
										</RE.ProductUserBox>
										<RE.UserProfileNickName>
											{' '}
											매너온도 : {productInfo.User.Ondo.ondo}°C
										</RE.UserProfileNickName>
										<RE.ProductTitle>
											{' '}
											상품 이름 : {productInfo.title}
										</RE.ProductTitle>
										<RE.UserProfileNickName>
											{' '}
											{productInfo.price === 0
												? '나눔 상품'
												: '가격 : ' +
												  formatNumberToMoney(productInfo.price) +
												  '원'}
										</RE.UserProfileNickName>
									</>
								</>
							</S.FormRegister>
						</S.FormGroup>
						<S.FormGroup>
							<S.FormLabel required={false}>제목</S.FormLabel>
							<S.FormRegister>{title}</S.FormRegister>
						</S.FormGroup>
						<S.FormGroup>
							<S.FormLabel required={false}>후기</S.FormLabel>
							<S.FormRegister>{content}</S.FormRegister>
						</S.FormGroup>
						<S.FormGroup>
							<S.FormLabel required={false}>별점</S.FormLabel>
							<S.FormRegister>
								<Rating
									name="simple-controlled"
									value={Math.floor(ondo / 20)}
									readOnly={true}
								/>
							</S.FormRegister>
						</S.FormGroup>
						<S.FormGroup>
							<S.FormLabel required={false}>사진</S.FormLabel>
							<S.FormRegister>
								{Image_Array[0] !== null ? (
									<RE.BannerSection>
										{Image_Array.map(v => (
											<RE.IMG key={v} src={v} alt={v} />
										))}
									</RE.BannerSection>
								) : (
									'없음'
								)}
							</S.FormRegister>
						</S.FormGroup>
						{/* 타이틀 끝 */}
					</S.Wrapper>
				</S.BackgroundColor>
			</S.Con>
		</>
	)
}

export default ReviewDetail

const RE = {}

RE.CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	cursor: pointer;
	background-color: white;
`

RE.UpdateButton = styled.button`
	border: none;
	background-color: white;
	cursor: pointer;
`

RE.Buttons = styled.div`
	display: flex;
`

RE.BannerSection = styled.div`
	height: 170px;
	display: flex;
	gap: 5px;
	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
	}
`
RE.IMG = styled.img``

RE.ProductTitle = styled.div``

RE.ProductContent = styled.div``

RE.ProductSeller = styled.div``

RE.ProductUserBox = styled.div`
	display: flex;
`
RE.CusorPointer = styled.div`
	div,
	img {
		cursor: pointer;
	}
`

RE.UserProfileImg = styled.img`
	margin-left: 10px;
`

RE.UserProfileNickName = styled.div``

RE.UserProfileBox = styled.div`
	display: flex;
	height: 30px;
	line-height: 30px;
`

RE.ProductImg = styled.div`
	width: 300px;
	height: 300px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		cursor: pointer;
	}
`
