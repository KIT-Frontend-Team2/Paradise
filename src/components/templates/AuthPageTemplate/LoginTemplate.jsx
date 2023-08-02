import { yupResolver } from '@hookform/resolvers/yup'
import Container from 'components/layout/Container'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import Checkbox from '../../../assets/images/checkbox.png'
import useUserAPi from '../../../hooks/service/user.service'
import useMove from '../../../hooks/useMovePage'
import { Validation2 } from './validation'

/**
 * @TODO
 * 아이디 기억하기를 넣으신건 쿠키를 사용하시기 위함인가요?
 */
const Login = ({ setState }) => {
	const { linkMainPage } = useMove()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onchange',
		resolver: yupResolver(Validation2),
	})

	const { mutate, isSuccess } = useUserAPi.login(
		watch('email'),
		watch('password'),
	)

	const onSubmit = () => {
		mutate()
	}
	useEffect(() => {
		if (isSuccess === true) {
			linkMainPage()
		}
	}, [isSuccess])

	return (
		<Container>
			<S.Wrapper>
				<S.Title>로그인</S.Title>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.Content>
						<S.FromLabel>이메일</S.FromLabel>
						<InputGroup>
							<Input
								placeholder={'이메일을 입력해주세요'}
								{...register('email')}
								name="email"
								error={errors.email?.message}
							/>
						</InputGroup>
					</S.Content>
					<S.Content>
						<S.FromLabel>비밀번호</S.FromLabel>
						<InputGroup>
							<Input
								type={'password'}
								name="password"
								placeholder={'비밀번호를 입력해주세요'}
								{...register('password')}
								error={errors.password?.message}
							/>
						</InputGroup>
					</S.Content>
					<S.Checkradio>
						<input type="checkbox" />
						<S.FromLabel>
							<label className="checklabel">아이디 기억하기</label>
						</S.FromLabel>
					</S.Checkradio>
					<S.Button type="submit" label={'로그인'} size={'full'} />
					<S.SignUp
						type="button"
						label={'회원가입'}
						size={'full'}
						onClick={() => setState(false)}
					>
						회원가입
					</S.SignUp>
				</S.Form>
			</S.Wrapper>
		</Container>
	)
}

export default Login

const S = {}

S.Wrapper = styled.div`
	width: 100%;
	max-width: 480px;
	margin: 90px auto 200px;
	text-align: center;
`
S.Title = styled.h2`
	font-size: 32px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-align: center;
	margin-bottom: 30px;
`

S.Form = styled.form`
	margin-bottom: 48px;
	text-align: left;
`
S.Content = styled.div`
	&:first-child {
		padding: 20px 0;
	}

	&:last-child {
		padding-bottom: 0;
	}
`

S.Checkradio = styled.div`
	padding: 15px 0;
	display: flex;
	align-items: center;

	> [type='checkbox'] {
		appearance: none;
		width: 1.25em;
		height: 1.25em;
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
		cursor: pointer;
		transition: 0.6s;
		margin-right: 10px;
	}

	> [type='checkbox']:checked {
		background-image: url(${Checkbox});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
`
S.FromLabel = styled.div`
	padding-bottom: 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-align: left;

	.checklabel {
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
		vertical-align: -5px;
	}
`

S.Button = styled(Button)`
	margin-bottom: 15px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`

S.SignUp = styled(Button)`
	background-color: rgba(255, 255, 255, 100%);
	border: 1px solid #cccccc;
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};

	&:hover {
		background-color: rgba(255, 255, 255, 65%);
		border: 1px solid #cccccc;
	}
`
