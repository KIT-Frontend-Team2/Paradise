import { yupResolver } from '@hookform/resolvers/yup'
import CloseIcon from '@mui/icons-material/Close'
import { Rating } from '@mui/material'
import wonIcon from 'assets/images/ico-won.png'
import { ReviewValidation } from 'components/modal/Review/validator'
import Button from 'components/ui/atoms/Button/Button'
import DeFormImagePreviewGroup from 'components/ui/organisms/DeFormImagePreviewGroup/DeFormImagePreviewGroup'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { REVIEW_MESSAGE } from '../../../consts/message'
import { Product_Info } from '../../../consts/product'
import reviewService from '../../../hooks/service/review.service'
import toastMessage from '../../../utils/toast-message'


const Review = ({ page, isUpdate, detail, handleClose, ReviewId }) => {
	const { img_url, ReviewImages, title, content, ondo, idx } = (isUpdate &&
		detail) || {
		title: '',
		content: '',
		ondo: 0,
		images: [],
		ReviewImages: [],
	}
	const { postMutate } = reviewService.postReview(page)
	const { patchMutate } = reviewService.patchReview(page)

	const [mainImage, setMainImage] = useState(img_url || undefined)
	const [subImageList, setSubImageList] = useState([])
	const [imageFileList, setImageFileList] = useState([])
	const [imagePreviews, setImagePreviews] = useState([])
	const [ondoState, setOndoState] = useState(Math.ceil(ondo / 20))

	const imageRef = useRef()

	useEffect(() => {
		const images = ReviewImages.map(ReviewImage => ReviewImage.imgUrl)
		setSubImageList(images)
		setOndoState(Math.ceil(ondo / 20))
	}, [detail])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(ReviewValidation),
	})

	// 이미지 변경
	const handleImageChange = files => {
		const imagePreviewsArray = [...imagePreviews]
		const imageFileArray = [...imageFileList]

		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader()

			reader.onload = event => {
				imagePreviewsArray.push({ id: i, img_url: event.target.result })
				imageFileArray.push(files[i])
				let totalImageCnt = imagePreviewsArray.length + subImageList.length

				if (mainImage) totalImageCnt++
				if (totalImageCnt > 5) {
					return toastMessage.error(REVIEW_MESSAGE.IMAGE_MAX_ERROR)
				}
				setImagePreviews([...imagePreviewsArray])
				setImageFileList([...imageFileArray])
			}

			reader.readAsDataURL(files[i])
		}
	}

	// 등록 버튼을 누를 때
	const onSubmit = async data => {
		const formData = new FormData()
		formData.append('title', data.title)
		formData.append('content', data.content)
		formData.append('ondo', data.ondo * 20)
		if (imagePreviews.length !== 0) {
			imageFileList.forEach(el => {
				formData.append('images', el)
			})
		}

		if (isUpdate && detail) {
			if (mainImage) {
				formData.append('main_url', mainImage)
			}
			formData.append('img_url', subImageList)
			const response = await toastMessage.promise(
				patchMutate({
					idx,
					formData,
				}),
				REVIEW_MESSAGE.PATCH_LOADING,
				REVIEW_MESSAGE.PATCH_SUCCESS,
				REVIEW_MESSAGE.ERROR_MESSAGE,
			)
			if (response.status === 200) {
				handleClose()
			}
			// 수정
		} else {
			// 등록
			const response = await toastMessage.promise(
				postMutate({
					ReviewId,
					formData,
				}),
				REVIEW_MESSAGE.POST_LOADING,
				REVIEW_MESSAGE.POST_SUCCESS,
				REVIEW_MESSAGE.ERROR_MESSAGE,
			)
			if (response.status === 200) {
				handleClose()
			}
		}
	}

	return (
		<>
			<S.Con>
				<S.BackgroundColor>
					<S.Wrapper>
						<S.CloseButton onClick={handleClose}>
							<CloseIcon />
						</S.CloseButton>
						{/* 타이틀 시작 */}
						<S.TitleArea>
							<S.Title2>
								{isUpdate && detail ? '리뷰 수정' : '리뷰 등록'}
							</S.Title2>
							<S.RightArea>
								<span>
									<span className="secondary">*필수항목</span>은 꼭 입력해주세요
								</span>
							</S.RightArea>
						</S.TitleArea>
						{/* 타이틀 끝 */}
						<form
							onSubmit={handleSubmit(onSubmit)}
							encType="multipart/form-data"
						>
							{/* 제목 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>제목</S.FormLabel>
								<S.FormRegister>
									<S.Textarea
										defaultValue={title}
										placeholder={'제목을 적어주세요'}
										row={'3'}
										{...register('title')}
										error={errors.title?.message}
									></S.Textarea>
									{errors.title?.message && (
										<S.ErrorMessage className="error">
											{errors.title.message}
										</S.ErrorMessage>
									)}
								</S.FormRegister>
							</S.FormGroup>
							{/* 내용 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>후기</S.FormLabel>
								<S.FormRegister>
									<S.Textarea
										defaultValue={content}
										placeholder={'텍스트를 적어주세요'}
										row={'5'}
										{...register('content')}
										error={errors.content?.message}
									></S.Textarea>
									{errors.content?.message && (
										<S.ErrorMessage className="error">
											{errors.content.message}
										</S.ErrorMessage>
									)}
								</S.FormRegister>
							</S.FormGroup>
							{/* 내용 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>만족도</S.FormLabel>
								<S.FormRegister>
									<input
										style={{ display: 'none' }}
										type={'number'}
										value={ondoState}
										{...register('ondo')}
										error={errors.ondo?.message}
									/>
									<Rating
										name="simple-controlled"
										value={ondoState}
										{...register('ondo')}
										onChange={(event, newValue) => {
											setOndoState(newValue)
										}}
										error={errors.ondo?.message}
									/>
									{errors.ondo?.message && (
										<S.ErrorMessage className="error">
											{errors.ondo.message}
										</S.ErrorMessage>
									)}
								</S.FormRegister>
							</S.FormGroup>
							{/* 물품 이미지 */}
							<S.FormGroup>
								<S.FormLabel required={false}>
									물품 이미지
									<span id="cnt">
										(
										{detail
											? mainImage
												? subImageList.length + imagePreviews.length + 1
												: subImageList + imagePreviews.length
											: imagePreviews.length}
										/{Product_Info.MAX_IMAGE_CNT})
									</span>
								</S.FormLabel>
								<S.FormRegister>
									<div>
										<DeFormImagePreviewGroup
											ref={imageRef}
											register={register}
											handleImageChange={handleImageChange}
											mainImage={mainImage}
											setMainImage={setMainImage}
											subImageList={subImageList}
											setSubImageList={setSubImageList}
											imagePreviews={imagePreviews}
											setImagePreviews={setImagePreviews}
											imageFileList={imageFileList}
											setImageFileList={setImageFileList}
										/>
									</div>
									<ul className="infoMessage">
										<li>클릭 또는 이미지를 드래그하여 등록할 수 있습니다.</li>
										<li>드래그하여 상품 이미지 순서를 변경할 수 있습니다.</li>
									</ul>
								</S.FormRegister>
							</S.FormGroup>
							{/* 버튼 그룹 시작 */}
							<S.ButtonWrap>
								<Button
									onClick={handleClose}
									type="button"
									label={'취소'}
									variant={'cancel'}
									size={'large'}
								/>
								<Button
									label={
										isUpdate && detail ? '리뷰 수정 완료' : '리뷰 등록 완료'
									}
									variant={'primary'}
									size={'large'}
								/>
							</S.ButtonWrap>
						</form>
					</S.Wrapper>
				</S.BackgroundColor>
			</S.Con>
		</>
	)
}

export default Review

export const S = {}

S.BackgroundColor = styled.div`
	background: white;
	padding: 50px;

`

S.Con = styled.div`
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	overflow-y: scroll;
`

S.Wrapper = styled.div`
	margin-top: 80px;
	padding: ${({ theme }) => !theme.isDesktop && !theme.isMobile && '0 16px'};
`

S.TitleArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 6px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[800]};
`

S.Title2 = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`

S.RightArea = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};

	.secondary {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`

S.FormGroup = styled.dl`
	margin: 0;
	padding: 35px 0;
	display: flex;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};

	&:first-child {
		align-items: flex-start;
	}

	&:last-child {
		border-bottom-color: ${({ theme }) => theme.PALETTE.gray[800]};
	}

	${({ theme }) =>
		!theme.isDesktop &&
		!theme.isTabletAndLaptop &&
		`
		flex-direction: column;
		align-items: flex-start;
		gap:20px;
		border-bottom:0;
	`}
`

S.FormLabel = styled.dd`
	position: relative;
	margin: 0;
	min-width: 168px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

	${({ theme, required }) =>
		required &&
		`&::after {
		content: '*';
		margin-left: 4px;
		color: ${theme.PALETTE.secondary};
	}`}
	#cnt {
		position: absolute;
		top: 26px;
		left: 0;
		color: ${({ theme }) => theme.PALETTE.gray[700]};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-weight: 300;
	}
`

S.FormRegister = styled.dt`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 12px;

	${({ theme }) =>
		!theme.isDesktop && !theme.isTabletAndLaptop && 'width:100%;'}
	.infoMessage {
		padding-left: 15px;
		color: ${({ theme }) => theme.PALETTE.gray[700]};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`

S.CustomInput = styled.div`
	position: relative;
	display: ${({ theme }) =>
		!theme.isDesktop && !theme.isTabletAndLaptop && 'flex'};
	width: ${({ theme }) =>
		!theme.isDesktop && !theme.isTabletAndLaptop && '100%'};

	input {
		padding-left: 40px;
	}

	&:before {
		position: absolute;
		left: 16px;
		top: 0;
		line-height: 50px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}

	&.price {
		display: flex;
		flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
		gap: 20px;
		align-items: ${({ theme }) => (theme.isDesktop ? 'center' : 'flex-end')};

		input {
			text-align: right;
			padding-right: 40px;

			&::placeholder {
				text-align: left;
			}
		}

		& > div {
			position: relative;
		}

		& > div:before {
			content: '';
			position: absolute;
			left: 16px;
			top: 18px;
			width: 14px;
			height: 14px;
			background-image: url(${wonIcon});
			background-size: 13px;
			background-repeat: no-repeat;
		}

		& > div:after {
			content: '원';
			position: absolute;
			right: 16px;
			top: 0;
			line-height: 50px;
		}
	}

	&.tag {
		&:before {
			content: '#';
		}
	}
`

S.Textarea = styled.textarea`
	width: 100%;
	height: 168px;
	border: 1px solid
		${({ theme, error }) =>
			error ? theme.PALETTE.secondary : theme.PALETTE.gray[500]};
	box-sizing: border-box;
	border-radius: 6px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	padding: 16px;

	&::placeholder {
		color: ${({ theme }) => theme.PALETTE.gray[700]};
	}
`

S.ErrorMessage = styled.span`
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`

S.TagWrapper = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop || theme.isTablet
			? 'row'
			: 'column'};
`

S.Map = styled.div`
	width: 100%;
	aspect-ratio: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '5 / 2' : '4 / 3'};
	border-radius: 6px;
	background-color: #eee;
`

S.ButtonWrap = styled.div`
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? `50%` : `100%`};
	margin: 45px auto 0;
	display: flex;
	justify-content: space-between;
	gap: 12px;
`
S.CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	cursor: pointer;
	background-color: white;
`
