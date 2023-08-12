import { Modal } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

import { HTTPError } from '../../../apis/HTTPError'
import { REVIEW_MESSAGE } from '../../../consts/message'
import { useDevice } from '../../../hooks/mediaQuery/useDevice'
import reviewService from '../../../hooks/service/review.service'
import ToastMessage from '../../../utils/toast-message'
import Review from '../../modal/Review/Review'
import ReviewDetail from '../../modal/Review/ReviewDetail'
import Pagination from '../../ui/molecules/Pagination/Pagination'
import EmptySection from '../../ui/organisms/EmptySection/EmptySection'
import ReviewProducts from '../../ui/organisms/ReviewProducts/ReviewIsNullProducts'

const MyReviewTemplate = () => {
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data } = reviewService.getReview(page)
	const { pagination, reviewList } = data.data
	// 상세 모달이 열린 유무를 확인
	const [isDetail, setIsDetail] = useState(false)
	// 수정, 삭제 모달이 열린 유무를 확인
	const [isOpen, setIsOpen] = useState(false)

	// 리뷰를 등록할 아이디
	const [changeId, setChangeId] = useState(0)
	// 보고있는 상세 페이지 정보
	const [detailInfo, setDetailInfo] = useState(null)
	const [isUpdate, setIsUpdate] = useState(false)

	const { deleteMutate } = reviewService.deleteReview(page)
	// 리뷰 상세 열기
	const detailOpen = detail => {
		setIsDetail(true)
		setDetailInfo(detail)
	}

	// 리뷰 상세 닫기
	const detailClose = () => setIsDetail(false)

	// 리뷰 수정 페이지

	const updateOpen = detail => {
		setIsDetail(false)
		setIsOpen(true)
		setIsUpdate(true)
		setDetailInfo(detail)
	}

	const updateClose = () => {
		if (isUpdate) {
			setIsDetail(true)
			setIsUpdate(false)
		}
		setIsOpen(false)
	}

	// 수정, 추가 열기
	const handleOpen = id => {
		setIsOpen(true)
		setChangeId(id)
	}

	const deletehandling = async id => {
		if (confirm('정말 삭제하시겠습니까?')) {
			await ToastMessage.promise(
				deleteMutate(id),
				REVIEW_MESSAGE.DELETE_LOADING,
				REVIEW_MESSAGE.DELETE_SUCCESS,
				REVIEW_MESSAGE.ERROR_MESSAGE,
			)
			detailClose()
		}
	}

	if (page !== 1 && reviewList.length === 0) {
		throw new HTTPError(400, '옳지않은 접근입니다.')
	}

	const {
		isDesktop,
		isTabletAndLaptop,
		isTablet,
		isMobileAndTablet,
		isMobile,
	} = useDevice()
	let repeat = 4
	if (isDesktop || isTabletAndLaptop) {
		repeat = 4
	}
	if (isTablet) {
		repeat = 3
	}
	if (isMobileAndTablet) {
		repeat = 2
	}

	if (isMobile) {
		repeat = 2
	}
	return (
		<S.Wrapper>
			{/*리뷰 작성, 수정하기 모달*/}
			<Modal
				open={isOpen}
				onClose={() => updateClose()}
				children={
					<S.ModalContainer mobile={isMobile.toString()}>
						<Review
							page={page}
							isUpdate={isUpdate}
							detail={detailInfo}
							ReviewId={changeId}
							handleClose={updateClose}
						/>
					</S.ModalContainer>
				}
			/>
			{/*리뷰 상세 모달*/}
			<Modal
				open={isDetail}
				onClose={() => detailClose()}
				children={
					<Suspense fallback={<></>}>
						<S.ModalContainer mobile={isMobile.toString()}>
							<ReviewDetail
								deletehandling={deletehandling}
								updateOpen={updateOpen}
								detail={detailInfo}
								handleClose={detailClose}
							/>
						</S.ModalContainer>
					</Suspense>
				}
			/>
			<S.Title>리뷰 관리</S.Title>
			<S.Content>
				<S.Filter></S.Filter>
				{reviewList.length !== 0 ? (
					<S.ProductList repeat={repeat}>
						<ReviewProducts
							handleOpen={handleOpen}
							reviewList={reviewList}
							detailOpen={detailOpen}
						/>
					</S.ProductList>
				) : (
					<EmptySection titleMessage={'구매한 상품이 없습니다'} />
				)}
			</S.Content>
			<Pagination
				page={page}
				item_length={pagination.page_size}
				total={pagination.count}
			/>
		</S.Wrapper>
	)
}

export default MyReviewTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ theme }) => (theme.isDesktop ? '873px' : '100%')};
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
`
S.Content = styled.div``

S.Filter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.black};
`
S.Left = styled.div`
	gap: 15px;
	display: flex;
`

S.ProductList = styled.div`
	display: grid;
	grid-template-columns: repeat(${({ repeat }) => repeat}, minmax(0, 1fr));
	justify-items: center;
	gap: 30px;
	padding-top: 40px;
`
S.ModalContainer = styled.div`
  position: relative;
  height: ${({ mobile }) => (mobile === 'true' ? 100 : 70)}vh;
  top: ${({ mobile }) => mobile === 'false' && 40}%;
  left: ${({ mobile }) => mobile === 'false' && 50}%;
  transform: ${({ mobile }) => mobile === 'false' && `translate(-50%, -50%)`};
}
`
