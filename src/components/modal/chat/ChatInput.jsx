import { InsertPhoto, Send } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useRef } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ChatInput = () => {
	const [image, setImage] = useState(null)
	const [imagePrev, setImagePrev] = useState(null)

	const imageRef = useRef(null)

	const handleSubmit = e => {
		e.preventDefault()
	}

	const chooseImage = () => {
		imageRef.current.click()
	}

	const previewImage = e => {
		if (e.target.files.length === 0) {
			return
		}
		const file = e.target.files[0]
		setImage(file)
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			setImagePrev(reader.result)
		}
	}

	const removeImage = () => {
		setImagePrev(null)
		setImage(null)
	}
	return (
		<S.Form onSubmit={handleSubmit}>
			<S.Input type="text" placeholder="메시지를 입력해주세요." />
			{imagePrev && (
				<S.ImageContainer>
					<S.Img src={imagePrev} alt="image" />
					<S.CloseIconContainer onClick={removeImage}>
						<CloseIcon />
					</S.CloseIconContainer>
				</S.ImageContainer>
			)}
			<S.FileInput
				type="file"
				ref={imageRef}
				multiple={false}
				accept="image/*"
				onChange={e => previewImage(e, setImagePrev, setImage)}
			/>
			<S.IconContainer>
				<IconButton onClick={chooseImage}>
					<InsertPhoto />
				</IconButton>
				<IconButton>
					<Send />
				</IconButton>
			</S.IconContainer>
		</S.Form>
	)
}

export default ChatInput

export const S = {}

S.Form = styled.form`
	border-top: 1px solid #999999;
	width: 100%;
	height: 100px;
	padding-top: 8px;

	position: relative;
`

S.Input = styled.textarea`
	border: none;
	outline: none;
	width: 550px;
	height: 60px;
	resize: none;
	padding-left: 8px;
`

S.IconContainer = styled.div`
	position: absolute;
	right: 10px;
	bottom: 15px;
	display: flex;
	cursor: pointer;
`

S.FileInput = styled.input`
	display: none;
`

S.ImageContainer = styled.div`
	position: absolute;
	top: -160px;
	right: 16px;
	width: 150px;
	height: 150px;
`
S.Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
S.CloseIconContainer = styled.span`
	position: absolute;
	top: -10px;
	right: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	background-color: #fff;
	border-radius: 50%;
	cursor: pointer;
`
