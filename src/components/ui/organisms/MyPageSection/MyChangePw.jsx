import { yupResolver } from '@hookform/resolvers/yup'
import { Validation4 } from 'components/templates/AuthPageTemplate/validation'
import Button from 'components/ui/atoms/Button/Button'
import Input from 'components/ui/atoms/Input/Input'
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup'
import useMypageApi from 'hooks/service/useMypage.service'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

const MyChangePw = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Validation4),
	})

	const pw = watch('password')
	const { mutate } = useMypageApi.useChangePw(pw)

	const onSubmit = data => {
		mutate()
	}

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Content>
				<S.FromLabel>
					새 비밀번호<span className="secondary"> * </span>
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
					새 비밀번호 확인<span className="secondary">* </span>
				</S.FromLabel>
				<InputGroup>
					<Input
						type="password"
						name="passwordconfirm"
						placeholder={'비밀번호 확인을 입력해주세요'}
						{...register('passwordconfirm')}
						error={errors.passwordconfirm?.message}
					/>
				</InputGroup>
			</S.Content>
			<Button
				type="submit"
				label={'비밀번호 변경하기'}
				size={'full'}
				variant={'primary-outlined'}
			></Button>
		</S.Form>
	)
}

export default MyChangePw

const S = {}

S.Form = styled.form`
	margin-bottom: 48px;
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
