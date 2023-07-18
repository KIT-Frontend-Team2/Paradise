import registerIcon from 'assets/images/ico-image-register.png'
import wonIcon from 'assets/images/ico-won.png'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import { useState } from 'react'
import { styled } from 'styled-components'

const ProductForm = ({ detail }) => {
	const MAX_IMAGE_CNT = 5
	const [imageList, setImageList] = useState([])

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
				<form>
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
								<input type="file" multiple />
								<img className="registerIcon" src={registerIcon} />
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
								placeholder={'제목을 입력해주세요'}
								width={'500'}
								defaultValue={detail ? detail.product_name : ''}
							/>
						</S.FormRegister>
					</S.FormGroup>
					{/* 거래방식 (판매/나눔) */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>거래방식</S.FormLabel>
						<S.FormRegister>
							<InputGroup>
								<Button
									className="selected"
									label={'판매'}
									variant={'gray-outlined'}
								/>
								<Button label={'나눔'} variant={'gray-outlined'} />
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
									defaultValue={detail ? detail.product_price : ''}
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
										className="tag"
										placeholder={'태그를 입력해주세요'}
										width={'348'}
									/>
								</S.CustomInput>
								<Button label={'추가'} variant={'outlined'} />
							</InputGroup>
						</S.FormRegister>
					</S.FormGroup>
					{/* 내용 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>내용</S.FormLabel>
						<S.FormRegister>
							<S.Textarea
								row={'5'}
								placeholder={'텍스트를 적어주세요'}
								defaultValue={detail ? detail.product_content : ''}
							></S.Textarea>
						</S.FormRegister>
					</S.FormGroup>
					{/* 거래 희망 장소 */}
					<S.FormGroup>
						<S.FormLabel required={'required'}>거래 희망 장소</S.FormLabel>
						<S.FormRegister>
							<InputGroup display={'flex'}>
								<Input
									placeholder={'ex. 서울시 강남구 역삼동'}
									defaultValue={detail ? detail.product_place : ''}
								/>
								<Button label={'주소 검색'} variant={'outlined'} />
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
						<Button label={'취소'} variant={'cancel'} size={'large'} />
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
