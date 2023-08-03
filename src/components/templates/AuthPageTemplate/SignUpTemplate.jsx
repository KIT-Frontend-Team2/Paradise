import { yupResolver } from '@hookform/resolvers/yup'
import Container from 'components/layout/Container'
import PopUp from 'components/modal/MapModal/AddressModal'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import { Validation } from './validation'
import userApi from 'hooks/pageQuery/useSignUp'

const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
	} = useForm({
		mode: 'onchange',
		resolver: yupResolver(Validation),
	})



	const [isPopUp, setIsPopUp] = useState(false)
	const {mutate} = userApi.useSignup()

	const onSubmit =  (data) => {
		console.log(data);
		const userInfo = {
			email: watch('email'),
			pw: watch('pw'),
			nickName : watch('nickName'),
			phone: watch('phone'),
			region: watch('region')
		}
		console.log(userInfo)
			mutate(userInfo)
	};
	

	const handleOpen = e => {
		e.preventDefault()
		setIsPopUp(true)
	}

	const handleClose = () => {
		setIsPopUp(false)
	}

	const handleAddress = fullAddress => {
		setValue('region', fullAddress)
	}

	return (
		<S.Wrap>
			<Container>
				<S.Wrapper>
					<S.Title>회원가입</S.Title>
					<S.Notice>
						<span>
							<span className="secondary">*필수항목</span>은 꼭 입력해주세요
						</span>
					</S.Notice>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<S.CheckContent>
							<S.FromLabel>
								이메일<span className="secondary">*</span>
							</S.FromLabel>
							<InputGroup>
								<Input
									name="email"
									placeholder={'이메일을 입력해주세요'}
									width={'322'}
									{...register('email')}
									error={errors.email?.message}
								/>
								<S.CommonButton
									type="button"
									label={'중복확인'}
									variant={'primary-outlined'}
								/>
							</InputGroup>
						</S.CheckContent>
						<S.Content>
							<S.FromLabel>
								비밀번호<span className="secondary"> * </span>
							</S.FromLabel>
							<InputGroup>
								<Input
									name="pw"
									placeholder={'비밀번호를 입력해주세요'}
									{...register('pw')}
									error={errors.pw?.message}
								/>
							</InputGroup>
						</S.Content>
						<S.Content>
							<S.FromLabel>
								비밀번호 확인<span className="secondary">* </span>
							</S.FromLabel>
							<InputGroup>
								<Input
									name="passwordconfirm"
									placeholder={'비밀번호 확인을 입력해주세요'}
									{...register('passwordconfirm')}
									error={errors.passwordconfirm?.message}
								/>
							</InputGroup>
						</S.Content>
						<S.CheckContent>
							<S.FromLabel>
								닉네임<span className="secondary">*</span>
							</S.FromLabel>
							<InputGroup>
								<Input
									name="nickName"
									placeholder={'닉네임을 입력헤주세요'}
									width={'322'}
									{...register('nickName')}
									error={errors.nickName?.message}
								/>
								<S.CommonButton
									type="button"
									label={'중복확인'}
									variant={'primary-outlined'}
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
									name="region"
									placeholder={'검색 버튼을 눌러주세요'}
									width={'322'}
									{...register('region')}
									error={errors.region?.message}
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
							<Button type="submit" label={'회원가입'} size={'full'} />
						</S.SignUpButton>
					</S.Form>
				</S.Wrapper>
			</Container>
		</S.Wrap>
	)
}

export default SignUp

const S = {}

S.Wrap = styled.div`
	margin-left: ${({ theme }) => (theme.isDesktop ? 'auto' : '20px')};
	margin-right: ${({ theme }) => (theme.isDesktop ? 'auto' : '20px')};
`

S.Wrapper = styled.div`
	width: 100%;
	max-width: 480px;
	margin: 90px auto 200px;
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
`

S.CommonButton = styled(Button)`
	text-overflow: ellipsis;
`
