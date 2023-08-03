import { yupResolver } from '@hookform/resolvers/yup'
import Container from 'components/layout/Container'
import PopUp from 'components/modal/MapModal/AddressModal'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import { ERROR_MESSAGE } from '../../../consts/api'
import useUserAPi from '../../../hooks/service/user.service'
import { Validation } from './validation'

const SignUp = ({ setState }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Validation),
	})
	const [isPopUp, setIsPopUp] = useState(false)
	const [checkState, setCheckState] = useState([false, false])

	const { mutateAsync: checkEmail } = useUserAPi.checkEmail(watch('email'))
	const { mutateAsync: checkNickName } = useUserAPi.checkNickName(
		watch('nickname'),
	)
	const { mutateAsync: signUp } = useUserAPi.signup()

	const onSubmit = async e => {
		try {
			if (checkState.filter(prev => prev === true).length === 2) {
				const userInfo = {
					region: e.address,
					email: e.email,
					nickName: e.nickname,
					pw: e.password,
					phone: e.phone,
				}
				await signUp(userInfo)
				alert('축하합니다 회원가입이 완료되었습니다.')
				setState(true)
			} else {
				alert('유효성 검사를 진행해주세요')
			}
		} catch (err) {
			alert(ERROR_MESSAGE)
		}
	}

	const handleOpen = () => {
		setIsPopUp(true)
	}

	const handleClose = () => {
		setIsPopUp(false)
	}

	const handleAddress = fullAddress => {
		setValue('address', fullAddress)
	}

	const handleEmail = async () => {
		try {
			if(watch('email').trim().length === 0) return alert("값을 입력해주세요")
			if (errors.email) return alert('이메일 양식을 지켜주세요')
			await checkEmail(watch('email'))
			if (confirm('해당 이메일로 확정하시겠습니까?')) {
				setCheckState(prev => {
					let newState = [...prev]
					newState[0] = true
					return newState
				})
			}
		} catch (err) {
			alert(err.message)
		}
	}

	const handleNickName = async () => {
		try {
			if(watch('nickname').trim().length === 0) return alert("값을 입력해주세요")
			if (errors.nickname) return alert('닉네임 양식을 지켜주세요')
			await checkNickName(watch('nickname'))
			if (confirm('해당 닉네임으로 확정하시겠습니까?')) {
				setCheckState(prev => {
					let newState = [...prev]
					newState[1] = true
					return newState
				})
			}
		} catch (err) {
			alert(err.message)
		}
	}

	return (
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
								readOnly={checkState[0]}
								name="email"
								placeholder={'이메일을 입력해주세요'}
								width={'322'}
								{...register('email')}
								error={errors.email?.message}
							/>
							<S.CommonButton
								disabled={checkState[0]}
								onClick={handleEmail}
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
								type="password"
								name="password"
								placeholder={'비밀번호를 입력해주세요'}
								{...register('password')}
								error={errors.password?.message}
							/>
						</InputGroup>
					</S.Content>
					<S.Content>
						<S.FromLabel>
							비밀번호 확인<span className="secondary">* </span>
						</S.FromLabel>
						<InputGroup>
							<Input
								type="password"
								name="passwordConfirm"
								placeholder={'비밀번호 확인을 입력해주세요'}
								{...register('passwordConfirm')}
								error={errors.passwordConfirm?.message}
							/>
						</InputGroup>
					</S.Content>
					<S.CheckContent>
						<S.FromLabel>
							닉네임<span className="secondary">*</span>
						</S.FromLabel>
						<InputGroup>
							<Input
								readOnly={checkState[1]}
								name="nickname"
								placeholder={'닉네임을 입력헤주세요'}
								width={'322'}
								{...register('nickname')}
								error={errors.nickname?.message}
							/>
							<S.CommonButton
								disabled={checkState[1]}
								onClick={handleNickName}
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
						<Button type="submit" label={'회원가입'} size={'full'} />
					</S.SignUpButton>
					<S.LoginButton onClick={() => setState(true)}>
						<Button type="button" label={'로그인'} size={'full'} />
					</S.LoginButton>
				</S.Form>
			</S.Wrapper>
		</Container>
	)
}

export default SignUp

export const S = {}

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

	button {
		margin-bottom: 15px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	}
`

S.CommonButton = styled(Button)`
	text-overflow: ellipsis;
`

S.LoginButton = styled(S.SignUpButton)`
	button {
		background-color: rgba(255, 255, 255, 100%);
		border: 1px solid #cccccc;
		color: ${({ theme }) => theme.PALETTE.black};

		&:hover {
			border: 1px solid #cccccc;
			background-color: rgba(255, 255, 255, 65%);
		}
	}
`
