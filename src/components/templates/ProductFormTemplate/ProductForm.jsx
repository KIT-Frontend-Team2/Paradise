import registerIcon from 'assets/images/ico-image-register.png'
import wonIcon from 'assets/images/ico-won.png'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import DeFormTagGroup from 'components/ui/organisms/DeFormTagGroup/DeFormTagGroup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

const ProductForm = ({ detail }) => {
	const MAX_IMAGE_CNT = 5
	const [imageList, setImageList] = useState([])
	const [isFreeProduct, setIsFreeProduct] = useState(false)
	const [tagList, setTagList] = useState([])

	const {
		product_name,
		is_free_product,
		product_price,
		product_tag,
		product_content,
		product_place,
	} = detail || {
		product_tag: [],
	}

	useEffect(() => {
		setTagList(product_tag)
		setIsFreeProduct(is_free_product)
	}, [detail])

	const onClickFile = () => {}

	// 판매, 나눔 변경
	const onClickIsFree = isFree => {
		setIsFreeProduct(isFree)
		if (isFree) {
			setValue('price', 0)
			trigger('price')
		}
	}

	// 판매 금액 입력 숫자만 제한
	const onChangePrice = event => {
		let inputValue = event.target.value.replace(/\D/g, '')
		inputValue = Number(inputValue).toLocaleString()

		setValue('price', inputValue)
		trigger('price')
	}

	// 태그 추가
	const onAddTag = () => {
		const newTag = getValues('tag')
		if (!newTag) return

		setTagList([...tagList, newTag])
		setValue('tag', '')
	}
	// 태그 삭제
	const onDeleteTag = deleteIndex => {
		const _tagList = tagList.filter((_tag, index) => index !== deleteIndex)
		console.log(_tagList)
		setTagList(_tagList)
	}

	const {
		register,
		getValues,
		setValue,
		trigger,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' })

	const onSubmitProductForm = () => {
		window.alert('물품 등록이 완료되었습니다.')
	}

	return (
		<>
			<S.Container>
				<S.TitleArea>
					<S.Title2>{detail ? '물품 수정' : '물품 등록'}</S.Title2>
					<S.RightArea>
						<span>
							<span className="secondary">*필수항목</span>은 꼭 입력해주세요
						</span>
					</S.RightArea>
				</S.TitleArea>
				<form onSubmit={handleSubmit(onSubmitProductForm)}>
					{/* 물품 이미지 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>
							물품 이미지
							<span id="cnt">
								({imageList.length}/{MAX_IMAGE_CNT})
							</span>
						</S.FormLabel>
						<S.FormRegister>
							<div>
								<input type="file" id="file" accept="image/*" multiple />
								<label htmlFor="file">
									<img
										className="registerIcon"
										src={registerIcon}
										onClick={onClickFile}
									/>
								</label>
							</div>
							<ul className="infoMessage">
								<li>클릭 또는 이미지를 드래그하여 등록할 수 있습니다.</li>
								<li>드래그하여 상품 이미지 순서를 변경할 수 있습니다.</li>
							</ul>
						</S.FormRegister>
					</S.FormGroup>
					{/* 제목 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>제목</S.FormLabel>
						<S.FormRegister>
							<Input
								name="title"
								placeholder={'제목을 입력해주세요'}
								width={'500'}
								defaultValue={detail ? product_name : ''}
								{...register('title', {
									required: '제목을 입력해주세요',
								})}
								error={errors.title && errors.title.message}
							/>
						</S.FormRegister>
					</S.FormGroup>
					{/* 거래방식 (판매/나눔) */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>거래방식</S.FormLabel>
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
									name="price"
									placeholder={'가격을 입력해주세요'}
									width={'348'}
									defaultValue={detail ? product_price : ''}
									disabled={isFreeProduct}
									{...register('price', {
										required: '물품 가격을 입력해주세요',
									})}
									onChange={onChangePrice}
									error={errors.price && errors.price.message}
								/>
							</S.CustomInput>
						</S.FormRegister>
					</S.FormGroup>
					{/* 태그 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>태그</S.FormLabel>
						<S.FormRegister>
							<InputGroup display={'inline-flex'}>
								<S.CustomInput className="tag">
									<Input
										name="tag"
										className="tag"
										placeholder={'태그를 입력해주세요'}
										width={'348'}
										{...register('tag')}
									/>
								</S.CustomInput>
								<Button
									type="button"
									label={'추가'}
									variant={'outlined'}
									onClick={onAddTag}
								/>
							</InputGroup>
							{/* <ProductTagList tagList={product_tag} /> */}
							<DeFormTagGroup tagList={tagList} onDeleteTag={onDeleteTag} />
						</S.FormRegister>
					</S.FormGroup>
					{/* 내용 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>내용</S.FormLabel>
						<S.FormRegister>
							<S.Textarea
								name="content"
								row={'5'}
								placeholder={'텍스트를 적어주세요'}
								defaultValue={detail ? product_content : ''}
								{...register('content', {
									required: '내용을 입력해주세요',
								})}
							></S.Textarea>
							{errors.content && (
								<S.ErrorMessage className="error">
									{errors.content.message}
								</S.ErrorMessage>
							)}
						</S.FormRegister>
					</S.FormGroup>
					{/* 거래 희망 장소 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>거래 희망 장소</S.FormLabel>
						<S.FormRegister>
							<InputGroup display={'flex'}>
								<Input
									name="place"
									placeholder={'ex. 서울시 강남구 역삼동'}
									defaultValue={detail ? product_place : ''}
									{...register('place', {
										required: '거래 희망 장소을 입력해주세요',
									})}
									error={errors.place && errors.place.message}
								/>
								<Button
									type="button"
									label={'주소 검색'}
									variant={'outlined'}
								/>
							</InputGroup>
							<S.Map></S.Map>
							<ul className="infoMessage">
								<li>지도를 클릭해서 거래 희망 장소를 표시해주세요.</li>
								<li>지도를 드래그하여 이동할 수 있습니다.</li>
							</ul>
						</S.FormRegister>
					</S.FormGroup>
					{/* 버튼 그룹 */}
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
				</form>
			</S.Container>
		</>
	)
}

export default ProductForm

export const S = {}

S.Container = styled.div`
	max-width: 1100px;
	margin: 120px auto 95px;
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

	img {
		width: 160px;
	}

	input[type='file'] {
		display: none;
	}

	.registerIcon {
		cursor: pointer;
	}

	.infoMessage {
		padding-left: 15px;
		color: ${({ theme }) => theme.PALETTE.gray[700]};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`

S.CustomInput = styled.div`
	position: relative;

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
	border: 1px solid #ccc;
	box-sizing: border-box;
	border-radius: 6px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-family: 'Noto Sans CJK KR';
	padding: 16px;
	&::placeholder {
		color: ${({ theme }) => theme.PALETTE.gray[700]};
	}
`

S.ErrorMessage = styled.span`
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`

S.Map = styled.div`
	width: 100%;
	aspect-ratio: 5 / 2;
	border-radius: 6px;
	background-color: #eee;
`

S.ButtonWrap = styled.div`
	width: 50%;
	margin: 45px auto 0;
	display: flex;
	justify-content: space-between;
	gap: 12px;
`
