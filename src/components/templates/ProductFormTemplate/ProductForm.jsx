import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Container from 'components/layout/Container'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import ProductFormMap from 'components/ui/molecules/Map/ProductFormMap'
import DeFormImagePreviewGroup from 'components/ui/organisms/DeFormImagePreviewGroup/DeFormImagePreviewGroup'
import DeFormTagGroup from 'components/ui/organisms/DeFormTagGroup/DeFormTagGroup'
import { categories } from 'components/ui/organisms/MainHeader/HeaderCategory'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './style'
import * as V from './validator'

const ProductForm = ({ detail }) => {
	const {
		isBuyer,
		product_title,
		is_free_product,
		product_price,
		product_imgs,
		product_tag,
		product_content,
		product_place,
	} = detail || {
		is_free_product: false,
		product_imgs: [],
		product_tag: [],
		product_place: '서울시 강남구 역삼동', // 작성자 지역
	}
	const MAX_IMAGE_CNT = 5
	const [imageFileList, setImageFileList] = useState([])
	const [imagePreviews, setImagePreviews] = useState(product_imgs)
	const [isFreeProduct, setIsFreeProduct] = useState(is_free_product)
	const [categoryTag, setCategoryTag] = useState('')
	const [tagList, setTagList] = useState(product_tag)
	const [address, setAddress] = useState(product_place)

	const imageRef = useRef()
	const categoryRef = useRef()
	const tagRef = useRef()
	const addressRef = useRef()

	// 숫자 -> 천단위 문자로 포매팅 함수
	const numToStr = number => {
		if (!number) return
		return number.toLocaleString()
	}

	// 문자 -> 숫자
	const strToNum = str => {
		let num = str.replace(/\D/g, '')
		num = Number(num)
		return num
	}

	const {
		register,
		unregister,
		getValues,
		setValue,
		trigger,
		setError,
		clearErrors,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			product_title: product_title,
			is_free_product: is_free_product,
			product_price: numToStr(product_price),
			product_content: product_content,
			product_place: product_place,
		},
	})

	// React-Hook-Form 등록 및 유효성 검사
	const titleRegister = register('product_title', V.validateTitle())
	const isFreeRegister = register('is_free_product')
	const priceRegister = register(
		'product_price',
		V.validatePrice(getValues('is_free_product')),
	)
	const contentRegister = register('product_content', V.validateContent())
	const placeRegister = register('product_place', V.validatePlace())

	/* TODO: 본인이 등록한 상품을 수정하는 것인지 검사하는 로직 */
	useEffect(() => {
		if (isBuyer) {
			// 로직
		} else {
			// 로직
		}
	}, [detail])

	// 이미지 변경
	const handleImageChange = e => {
		const files = e.target.files
		const imagePreviewsArray = [...imagePreviews]

		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader()

			reader.onload = event => {
				imagePreviewsArray.push({ id: i, img_url: event.target.result })
				if (imagePreviewsArray.length > 5) {
					return alert('이미지는 최대 5장까지 등록 가능합니다.')
				}
				setImagePreviews([...imagePreviewsArray])
				setImageFileList([...imageFileList, ...files])
			}

			reader.readAsDataURL(files[i])
		}
		// e.target.value = ''
		clearErrors('image')
	}

	// 판매, 나눔 변경
	const onClickIsFree = isFree => {
		setValue('is_free_product', isFree)
		setIsFreeProduct(isFree)
		if (isFree) {
			setValue('product_price', 0)
			trigger('product_price')
		}
	}

	// 카테고리 태그 선택
	const onChangeCategoryTag = event => {
		const newTag = event.target.value
		if (tagList.find(tag => tag === newTag)) return
		setTagList([newTag, ...tagList])
		setCategoryTag(newTag)
		clearErrors('product_tag')
		unregister('tag')
	}

	// 태그 리스트 변경에 따라 폼 요소 값 변경
	useEffect(() => {
		tagList.forEach((tag, index) => {
			// console.log(`product_tag.${index}: ${tag}`)
			setValue(`product_tag.${index}`, tag)
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
		if (deleteIndex === 0) setCategoryTag('')
		unregister(`product_tag.${tagList.length - 1}`)
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
			setValue('product_place', undefined)
			setError('product_place', {
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
		setValue('product_price', numToStr(strToNum(event.target.value)))
		trigger('product_price')
	}

	// 등록 버튼을 누를 때
	const onSubmit = data => {
		// 이미지 체크
		if (imagePreviews.length === 0) {
			imageRef.current.scrollIntoView()
			setError('image', {
				message: '이미지를 하나 이상 추가해주세요.',
			})
			return
		}

		// 판매가격 숫자 변환
		if (data.product_price) {
			data.product_price = strToNum(data.product_price)
		}
		data.product_imgs = imageFileList
		console.log(data)
		const mode = detail ? '수정' : '등록'
		window.alert(`물품 ${mode}이 완료되었습니다.`)
	}

	return (
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
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* 물품 이미지 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>
							물품 이미지
							<span id="cnt">
								({imagePreviews.length}/{MAX_IMAGE_CNT})
							</span>
						</S.FormLabel>
						<S.FormRegister>
							<div>
								<DeFormImagePreviewGroup
									ref={imageRef}
									register={register}
									handleImageChange={handleImageChange}
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
								error={errors.product_title && errors.product_title.message}
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
									className={!isFreeProduct && 'selected'}
									type="button"
									label={'판매'}
									variant={'gray-outlined'}
									onClick={() => onClickIsFree(false)}
								/>
								<Button
									className={isFreeProduct && 'selected'}
									type="button"
									label={'나눔'}
									variant={'gray-outlined'}
									onClick={() => onClickIsFree(true)}
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
									error={errors.product_price && errors.product_price.message}
								/>
							</S.CustomInput>
						</S.FormRegister>
					</S.FormGroup>
					{/* 태그 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>태그</S.FormLabel>
						<S.FormRegister>
							<InputGroup display={'inline-flex'}>
								<FormControl>
									<InputLabel id="product_tag">카테고리</InputLabel>
									<Select
										ref={categoryRef}
										labelId="product_tag"
										value={categoryTag}
										sx={{
											width: '200px',
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
											>
												{category.label}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<S.CustomInput className="tag">
									<Input
										ref={tagRef}
										className="tag"
										placeholder={'태그를 입력해주세요'}
										width={'348'}
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
								error={errors.product_content && errors.product_content.message}
							></S.Textarea>
							{errors.product_content && (
								<S.ErrorMessage className="error">
									{errors.product_content.message}
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
									error={errors.product_place && errors.product_place.message}
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
	)
}

export default ProductForm
