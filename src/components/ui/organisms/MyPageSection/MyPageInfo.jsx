import { yupResolver } from '@hookform/resolvers/yup'
import PopUp from 'components/modal/MapModal/AddressModal'
import { Validation3 } from 'components/templates/AuthPageTemplate/validation'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import MyChangePw from './MyChangePw'
import useMypageApi from 'hooks/service/useMypage.service'


const MyPageInfo = () => {
	const [isPopUp, setIsPopUp] = useState(false)


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
		reset
	} = useForm({
		mode: 'onchange',
		resolver: yupResolver(Validation3),
	})

	const nickname  = watch('nickname')
	const { mutate } = useMypageApi.useChagneInfo()
	const {mutate : checkmutate } = useMypageApi.useCheckNicName(
		nickname 
	)



	const onSubmit = data => {
		console.log(data)
		const UserInfo = {
			region: watch('address') ,
			nickName: watch('nickname'),
			phone: watch('phone'),
		}
		mutate(UserInfo)
		reset()
	}

	const handleOpen = e => {
		e.preventDefault()
		setIsPopUp(true)
	}

	const handleClose = () => {
		setIsPopUp(false)
	}

	const handleAddress = fullAddress => {
		setValue('address', fullAddress)
	}


	const hadleCheckNicName = () => {
		checkmutate()
	}

	return (
		<S.Wrap>
			<S.Wrapper>
				<S.Title>회원 정보 수정</S.Title>
				<S.Notice>
					<span>
						<span className="secondary">*필수항목</span>은 꼭 입력해주세요
					</span>
				</S.Notice>
				<MyChangePw />
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.CheckContent>
						<S.FromLabel>이메일</S.FromLabel>
						<InputGroup className="readonly">
							<Input
								readOnly={true}
								name="email"
								placeholder={'이메일을 입력해주세요'}
								{...register('email')}
								error={errors.email?.message}
							/>
						</InputGroup>
					</S.CheckContent>
					<S.CheckContent>
						<S.FromLabel>
							닉네임<span className="secondary">*</span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="nickname"
								placeholder={'닉네임을 입력헤주세요'}
								width={'322'}
								{...register('nickname')}
								error={errors.nickname?.message}
							/>
							<S.CommonButton
								type="button"
								label={'중복확인'}
								variant={'primary-outlined'}
								onClick = {hadleCheckNicName}
							/>
						</InputGroup>
					</S.CheckContent>
					<S.CheckContent>
						<S.FromLabel>
							휴대폰 번호<span className="secondary">* </span>
						</S.FromLabel>
						<InputGroup>
							<Input
								name="phone"
								placeholder={'휴대폰 번호를 입력해주세요 (ex. 010-0000-0000)'}
								{...register('phone')}
								error={errors.phone?.message}
							/>
						</InputGroup>
					</S.CheckContent>
					<S.CheckContent>
						<S.FromLabel>
							지역선택<span className="secondary">*</span>
						</S.FromLabel>
						<InputGroup>
							<Input
								readOnly
								name="address"
								placeholder={'검색 버튼을 눌러주세요'}
								width={'322'}
								{...register('address')}
								error={errors.address?.message}
							/>
							<S.CommonButton
								type="button"
								label={'검색'}
								variant={'primary-outlined'}
								onClick={handleOpen}
							/>
							{isPopUp && (
								<PopUp
									handleClose={handleClose}
									handleAddress={handleAddress}
								/>
							)}
						</InputGroup>
					</S.CheckContent>
					<S.SignUpButton>
						<Button
							type="button"
							label={'탈퇴하기'}
							size={'large'}
							variant={'primary-outlined'}
						/>
						<Button
							type="submit"
							label={'회원정보 수정'}
							size={'large'}
							variant={'primary'}
						/>
					</S.SignUpButton>
				</S.Form>
			</S.Wrapper>
		</S.Wrap>
	)
}

export default MyPageInfo

const S = {}

S.Wrap = styled.div`
	margin-left: ${({ theme }) => (theme.isDesktop ? 'auto' : '20px')};
	margin-right: ${({ theme }) => (theme.isDesktop ? 'auto' : '20px')};
`

S.Wrapper = styled.div`
	width: 100%;
	max-width: 480px;
	margin: 90px auto 100px;
	position: relative;
`
S.Title = styled.h2`
	font-size: 32px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-align: center;
	margin-bottom: 48px;
`
S.Notice = styled.div`
	text-align: right;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	margin-bottom: 20px;

	.secondary {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`
S.Form = styled.form`
	margin-bottom: 48px;
`

S.CheckContent = styled.div`
	padding: 15px 0;

	.readonly {
		:focus {
			outline: none;
		}
	}
`
S.Content = styled.div`
	padding: 15px 0;
`

S.FromLabel = styled.div`
	padding-bottom: 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

	.secondary {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`

S.SignUpButton = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	gap: 10px;
`

S.CommonButton = styled(Button)`
	text-overflow: ellipsis;
`
