import LinkedCameraIcon from '@mui/icons-material/LinkedCamera'
import Button from 'components/ui/atoms/Button/Button'
import useMypageApi from 'hooks/service/useMypage.service'
import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'

import defaultImage from '../../../assets/images/기본프로필/default_profile_1.png'

const MyProfileTemplate = () => {
	const { data } = useMypageApi.useGetinfo()
	const { profile_url, nick_name } = data.data
	const inputRef = useRef(null)
	const [image, setImage] = useState('')

	const handleImageClick = () => {
		inputRef.current.click()
	}

	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			setImage(file)
			inputRef.current.value = ''
		}
	}

	const { mutate } = useMypageApi.useChangeProfile()

	const handleFormSubmit = e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('image', image)
		mutate(formData)
	}

	return (
		<S.Wrapper>
			<S.Title>프로필 변경</S.Title>
			<S.Form onSubmit={handleFormSubmit}>
				<S.UserImg onClick={handleImageClick}>
					<S.Overay>
						<LinkedCameraIcon />
					</S.Overay>
					{image ? (
						<img src={URL.createObjectURL(image)} alt={nick_name} />
					) : (
						<img src={profile_url || defaultImage} alt={nick_name} />
					)}
				</S.UserImg>
				<S.Right>
					<S.SubTitle>프로필 이미지 변경</S.SubTitle>
					<S.Button>
						<S.EditButton
							type="file"
							ref={inputRef}
							onChange={handleImageChange}
							name="picture"
						></S.EditButton>
						<Button
							type="submit"
							label={'수정완료'}
							variant={'primary-outlined'}
						/>
					</S.Button>
				</S.Right>
			</S.Form>
		</S.Wrapper>
	)
}

export default MyProfileTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ theme }) => (theme.isDesktop ? '873px' : '100%')};
	min-height: 100vh;
`
S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	padding-bottom: 36px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.black};
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
`
S.Form = styled.form`
	display: flex;
	justify-content: ${({ theme }) =>
		theme.isDesktop ? 'flex-start' : 'center'};
	align-items: center;
`
S.UserImg = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	display: flex;
	margin-right: 30px;
	cursor: pointer;

	> img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

S.Overay = styled.div`
	position: absolute;
	bottom: 0;
	right: 6px;
	background-color: ${({ theme }) => theme.PALETTE.primary[100]};
	border-radius: 50%;
	width: 30px;
	height: 30px;
	text-align: center;

	> SVG {
		color: ${({ theme }) => theme.PALETTE.white};
		font-size: ${({ theme }) => theme.FONT_SIZE.large};
		vertical-align: -5px;
	}
`
S.Right = styled.div``

S.SubTitle = styled.p``
S.Button = styled.div`
	display: flex;
	gap: 10px;
`
S.EditButton = styled.input`
	display: none;
`
