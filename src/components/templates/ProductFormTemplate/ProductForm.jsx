import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import productAxios from 'apis/service/product.api'
import Container from 'components/layout/Container'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import ProductFormMap from 'components/ui/molecules/Map/ProductFormMap'
import DeFormImagePreviewGroup from 'components/ui/organisms/DeFormImagePreviewGroup/DeFormImagePreviewGroup'
import DeFormTagGroup from 'components/ui/organisms/DeFormTagGroup/DeFormTagGroup'
import { categories } from 'components/ui/organisms/MainHeader/HeaderCategory'
import { REVIEW_MESSAGE } from 'consts/message'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import useMove from 'hooks/useMovePage'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { formatNumberToMoney, moneyToFormatNumber } from 'utils/formatter'
import toastMessage from 'utils/toast-message'

import * as S from './style'
import * as V from './validator'

const ProductForm = ({ userInfo, isSeller, detail }) => {
	const {
		idx,
		title,
		category,
		price,
		img_url,
		ProductImages,
		ProductsTags,
		description,
		region,
	} = detail || {
		category: 0,
		price: 0,
		images: [],
		ProductsTags: [],
		ProductImages: [],
		region: '', // 작성자 지역
	}

	const MAX_IMAGE_CNT = 5
	const MAX_PRICE = 100000000
	const [mainImage, setMainImage] = useState(img_url || undefined)
	const [subImageList, setSubImageList] = useState([])
	const [imageFileList, setImageFileList] = useState([])
	const [imagePreviews, setImagePreviews] = useState([])
	const [isFreeProduct, setIsFreeProduct] = useState(category ? 1 : 0)
	const [categoryTag, setCategoryTag] = useState('')
	const [tagList, setTagList] = useState([])
	const [address, setAddress] = useState(region)
	const [koPrice, setKoPrice] = useState('')
	const [removeBgUrl, setRemoveBgUrl] = useState(null)

	const imageRef = useRef()
	const tagRef = useRef()
	const addressRef = useRef()

	useEffect(() => {
		const tag = ProductsTags.map(ProductTag => ProductTag.Tag.tag)
		setTagList(tag)
		setCategoryTag(tag[0])
		const images = ProductImages.map(ProductImage => ProductImage.img_url)
		setSubImageList(images)
		price && geKoreanNumber(price)
		if (userInfo) {
			setAddress(userInfo.region)
		}
	}, [detail, userInfo])

	const { linkMainPage, linkDetailPage } = useMove()

	const [isHighlight, setIsHighlight] = useState(false)
	const { isDesktop, isTabletAndLaptop, isTablet } = useDevice()

	const isDesk = isDesktop || isTabletAndLaptop || isTablet

	// 숫자를 한글로 변환
	function geKoreanNumber(num) {
		num = moneyToFormatNumber(num)
		let result = ''
		let digits = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
		let units = [
			'',
			'십',
			'백',
			'천',
			'만',
			'십만',
			'백만',
			'천만',
			'억',
			'십억',
			'백억',
			'천억',
			'조',
			'십조',
			'백조',
			'천조',
		]

		let numStr = num.toString() // 문자열로 변환
		let numLen = numStr.length // 문자열의 길이

		for (let i = 0; i < numLen; i++) {
			let digit = parseInt(numStr.charAt(i)) // i번째 자릿수 숫자
			let unit = units[numLen - i - 1] // i번째 자릿수 단위

			// 일의 자리인 경우에는 숫자를 그대로 한글로 변환
			if (i === numLen - 1 && digit === 1 && numLen !== 1) {
				result += '일'
			} else if (digit !== 0) {
				// 일의 자리가 아니거나 숫자가 0이 아닐 경우
				result += digits[digit] + unit
			}
		}
		result += '원'

		setKoPrice(result)
	}

	const {
		register,
		unregister,
		getValues,
		setValue,
		trigger,
		setError,
		clearErrors,
		setFocus,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			title: title,
			category: category ? 1 : 0,
			price: formatNumberToMoney(price),
			description: description,
			region: address,
		},
	})

	// React-Hook-Form 등록 및 유효성 검사
	const titleRegister = register('title', V.validateTitle())
	const isFreeRegister = register('category')
	const priceRegister = register('price', V.validatePrice(100000000))
	const contentRegister = register('description', V.validateContent())
	const placeRegister = register('region', V.validatePlace())

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
					return alert('이미지는 최대 5장까지 등록 가능합니다.')
				}
				setImagePreviews([...imagePreviewsArray])
				setImageFileList([...imageFileArray])
			}

			reader.readAsDataURL(files[i])
		}
		// e.target.value = ''
		clearErrors('image')
	}

	// 판매, 나눔 변경
	const onClickIsFree = isFree => {
		setValue('category', isFree)
		setIsFreeProduct(isFree)
		if (isFree) {
			setValue('price', 0)
			trigger('price')
			setKoPrice('')
		}
	}

	// 카테고리 태그 선택
	const onChangeCategoryTag = event => {
		const newTag = event.target.value
		if (tagList.find(tag => tag === newTag)) return
		setTagList([newTag, ...tagList])
		setCategoryTag(newTag)
		clearErrors('tag')
		unregister('tag')
	}

	// 태그 리스트 변경에 따라 폼 요소 값 변경
	useEffect(() => {
		tagList.forEach((tag, index) => {
			setValue(`tag.${index}`, tag)
		})
	}, [tagList])

	// 태그 추가
	const onAddTag = () => {
		const newTag = tagRef.current.value
		if (!newTag) return
		if (tagList.find(tag => tag === newTag)) return

		setTagList([...tagList, newTag])
		unregister('tag')
		tagRef.current.value = ''
	}

	// 태그 엔터 입력 시
	const onTagEnter = e => {
		if (e.key === 'Enter') {
			e.preventDefault()
			onAddTag()
		}
	}

	// 태그 삭제
	const onDeleteTag = deleteIndex => {
		const _tagList = tagList.filter((_tag, index) => index !== deleteIndex)
		setTagList(_tagList)
		if (deleteIndex === 0) {
			const isCategory = categories.findIndex(category => {
				return category.label === _tagList[0]
			})
			if (isCategory > 0) {
				setCategoryTag(_tagList[0])
			} else {
				setCategoryTag('')
			}
		}
		unregister(`tag.${tagList.length - 1}`)
	}

	// 태그 유효성 검사 시 포커스 옮김
	const onFocusHiddenTag = () => {
		tagRef.current.focus()
	}

	// 주소 검색
	const onSearchMap = () => {
		const addr = addressRef.current.value
		if (addr) {
			setAddress(addr)
		} else {
			setValue('region', undefined)
			setError('region', {
				message: '거래 희망 장소를 입력해주세요',
			})
		}
	}

	// 주소 유효성 검사 시 포커스 옮김
	const onFocusHiddenMap = () => {
		addressRef.current.focus()
	}

	// 판매 금액 입력 숫자만 제한
	const onChangePrice = event => {
		setValue(
			'price',
			formatNumberToMoney(moneyToFormatNumber(event.target.value)),
		)
		trigger('price')
		geKoreanNumber(event.target.value)
	}

	// 등록 버튼을 누를 때
	const onSubmit = async data => {
		const formData = new FormData()

		// 이미지 체크
		if (!mainImage && imagePreviews.length === 0) {
			imageRef.current.scrollIntoView()
			setError('image', {
				message: '이미지를 하나 이상 추가해주세요.',
			})
			return
		}

		// 판매가격 숫자 변환
		if (data.price) {
			data.price = moneyToFormatNumber(data.price)
			if (data.price >= MAX_PRICE) {
				setError('price', {
					message: '일억원 이상 등록하실 수 없습니다.',
				})
				setFocus('price')
				return
			}
		}

		const convertImage = async () => {
			for (let index = 0; index < imageFileList.length; index++) {
				const el = imageFileList[index]

				if (index === 0 && !detail) {
					try {
						const response = await fetch(removeBgUrl)
						const blob = await response.blob()

						const bgRemoveFile = new File([blob], 'image.png', {
							type: blob.type,
						})
						formData.append('images', bgRemoveFile)
					} catch (err) {
						console.error('이미지 가져오기 실패', err)
					}
				} else {
					formData.append('images', el)
				}
			}
		}

		formData.append('title', data.title)
		formData.append('price', data.price)
		formData.append('description', data.description)
		formData.append('category', data.category)
		formData.append('region', data.region)
		formData.append('tag', data.tag)
		await convertImage()

		const mode = detail ? '수정' : '등록'

		if (confirm(`물품을 ${mode}하시겠습니까?`)) {
			// 수정
			if (detail) {
				formData.append('idx', idx)
				if (mainImage) {
					formData.append('main_url', mainImage)
				}
				formData.append('img_url', subImageList)
				// for (const value of formData.values()) {
				// 	console.log(value)
				// }
				try {
					const response = await productAxios.patchProductInfo(formData)
					if (response.status === 200) {
						// window.alert(`물품 ${mode}이 완료되었습니다.`)
						toastMessage.success(`물품 ${mode}이 완료되었습니다.`)
						linkDetailPage(idx)
					}
				} catch (err) {
					console.log(err)
					toastMessage.error(REVIEW_MESSAGE.ERROR_MESSAGE)
				}
			} else {
				// 등록
				try {
					const response = await productAxios.addRegisterProduct(formData)
					if (response.status === 200) {
						const product_id = response.data.message
						toastMessage.success(`물품 ${mode}이 완료되었습니다.`)
						linkDetailPage(product_id)
					}
				} catch (err) {
					console.log(err)
					toastMessage.error(REVIEW_MESSAGE.ERROR_MESSAGE)
				}
			}
		}
	}

	/* 본인이 등록한 상품을 수정하는 것인지 검사하는 로직 */
	useEffect(() => {
		if (detail && !isSeller) {
			alert('옳지 않은 접근입니다.')
			linkMainPage()
		}
	}, [detail, isSeller])

	return (
		<>
			{detail && !isSeller ? (
				<Container></Container>
			) : (
				<Container>
					<S.Wrapper>
						{/* 타이틀 시작 */}
						<S.TitleArea>
							<S.Title2>{detail ? '물품 수정' : '물품 등록'}</S.Title2>
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
							{/* 물품 이미지 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>
									물품 이미지
									<span id="cnt">
										(
										{detail
											? mainImage
												? subImageList.length + imagePreviews.length + 1
												: subImageList + imagePreviews.length
											: imagePreviews.length}
										/{MAX_IMAGE_CNT})
									</span>
								</S.FormLabel>
								<S.FormRegister>
									<div>
										<DeFormImagePreviewGroup
											detail={detail}
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
											removeBgUrl={removeBgUrl}
											setRemoveBgUrl={setRemoveBgUrl}
										/>
									</div>
									{errors.image && (
										<S.ErrorMessage className="error">
											{errors.image.message}
										</S.ErrorMessage>
									)}
								</S.FormRegister>
							</S.FormGroup>
							{/* 제목 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>제목</S.FormLabel>
								<S.FormRegister>
									<Input
										placeholder={'제목을 입력해주세요'}
										width={'500'}
										{...titleRegister}
										error={errors.title && errors.title.message}
										onKeyPress={event => {
											if (event.key === 'Enter') {
												event.preventDefault()
											}
										}}
									/>
								</S.FormRegister>
							</S.FormGroup>
							{/* 거래방식 (판매/나눔) */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>거래방식</S.FormLabel>
								<Input type="hidden" {...isFreeRegister} />
								<S.FormRegister>
									<InputGroup>
										<Button
											className={isFreeProduct === 0 && 'selected'}
											type="button"
											label={'판매'}
											variant={'gray-outlined'}
											onClick={() => onClickIsFree(0)}
										/>
										<Button
											className={isFreeProduct === 1 && 'selected'}
											type="button"
											label={'나눔'}
											variant={'gray-outlined'}
											onClick={() => onClickIsFree(1)}
										/>
									</InputGroup>
								</S.FormRegister>
							</S.FormGroup>
							{/* 가격 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>가격</S.FormLabel>
								<S.FormRegister>
									<S.CustomInput className="price">
										<Input
											placeholder={'가격을 입력해주세요'}
											width={'348'}
											disabled={isFreeProduct}
											{...priceRegister}
											onChange={onChangePrice}
											error={errors.price && errors.price.message}
										/>
										<span>{koPrice}</span>
									</S.CustomInput>
								</S.FormRegister>
							</S.FormGroup>
							{/* 태그 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>태그</S.FormLabel>
								<S.FormRegister>
									<S.TagWrapper>
										<FormControl>
											<InputLabel id="category-tag-label">카테고리</InputLabel>
											<Select
												name="categoryTag"
												labelId="category-tag-label"
												label="카테고리"
												value={categoryTag ? categoryTag : ''}
												sx={{
													width: isDesk ? '200px' : '100%',
													height: '50px',
													padding: '0 16px',
													lineHeight: '50px',
													fontSize: '18px',
												}}
												onChange={onChangeCategoryTag}
											>
												{categories.map(category => (
													<MenuItem
														key={`cate-${category.path}`}
														value={category.label}
														selected={categoryTag === category.label}
													>
														{category.label}
													</MenuItem>
												))}
											</Select>
										</FormControl>
										<InputGroup display={isDesk ? 'inline-flex' : 'flex'}>
											<S.CustomInput className="tag">
												<Input
													ref={tagRef}
													className="tag"
													placeholder={'태그를 입력해주세요'}
													width={isDesk ? '348' : ''}
													onKeyPress={onTagEnter}
												/>
											</S.CustomInput>
											<Button
												type="button"
												label={'추가'}
												variant={'outlined'}
												onClick={onAddTag}
											/>
										</InputGroup>
									</S.TagWrapper>
									{tagList.length > 0 ? (
										<DeFormTagGroup
											register={register}
											tagList={tagList}
											errors={errors}
											categoryTag={categoryTag}
											onDeleteTag={onDeleteTag}
										/>
									) : (
										<>
											<Input
												type="text"
												value={''}
												{...register('tag', {
													required: '태그를 하나 이상 등록해주세요.',
												})}
												style={{
													width: '0',
													height: '0',
													border: 'none',
												}}
												onFocus={onFocusHiddenTag}
											/>
											{errors.tag && (
												<S.ErrorMessage className="error">
													{errors.tag.message}
												</S.ErrorMessage>
											)}
										</>
									)}
								</S.FormRegister>
							</S.FormGroup>
							{/* 내용 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>내용</S.FormLabel>
								<S.FormRegister>
									<S.Textarea
										placeholder={'텍스트를 적어주세요'}
										row={'5'}
										{...contentRegister}
										error={errors.description && errors.description.message}
									></S.Textarea>
									{errors.description && (
										<S.ErrorMessage className="error">
											{errors.description.message}
										</S.ErrorMessage>
									)}
								</S.FormRegister>
							</S.FormGroup>
							{/* 거래 희망 장소 */}
							<S.FormGroup>
								<S.FormLabel required={'required'}>거래 희망 장소</S.FormLabel>
								<S.FormRegister>
									<Input
										type="text"
										{...placeRegister}
										style={{
											marginBottom: '-12px',
											width: '0px',
											height: '0',
											border: 'none',
										}}
										onFocus={onFocusHiddenMap}
									/>
									<InputGroup display={'flex'}>
										<Input
											placeholder={'ex. 서울시 강남구 역삼동'}
											defaultValue={address}
											onBlur={onSearchMap}
											ref={addressRef}
											error={errors.region && errors.region.message}
										/>
										<Button
											type="button"
											label={'주소 검색'}
											variant={'outlined'}
											onClick={onSearchMap}
										/>
									</InputGroup>
									<S.Map>
										<ProductFormMap
											formAddress={address}
											setValue={setValue}
											setError={setError}
											clearErrors={clearErrors}
											setAddress={setAddress}
										/>
									</S.Map>
								</S.FormRegister>
							</S.FormGroup>
							{/* 버튼 그룹 시작 */}
							<S.ButtonWrap>
								<Button
									type="button"
									label={'취소'}
									variant={'cancel'}
									size={'large'}
								/>
								<Button
									label={detail ? '물품 수정 완료' : '물품 등록 완료'}
									variant={'primary'}
									size={'large'}
								/>
							</S.ButtonWrap>
							{/* 버튼 그룹 끝 */}
						</form>
					</S.Wrapper>
				</Container>
			)}
		</>
	)
}

export default ProductForm
