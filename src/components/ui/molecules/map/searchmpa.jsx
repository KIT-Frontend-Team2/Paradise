import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import MapComponent from './map'
import { MapAtom } from './map.atome'

const SearchMap = () => {
	const { register, handleSubmit, errors, mode, watch } = useForm({
		mode: 'onblue',
	})

	const [address, setAddress] = useRecoilState(MapAtom)
	const searchAddress = watch('address')

	const onSubmit = () => {
		const regex = /^(?<address>.*([시도]|광역시|특별시|도).*)\s(?<details>.*)$/
		const match = regex.exec(searchAddress)

		let extractedAddress = searchAddress
		let extractedDetails = ''

		if (match) {
			extractedAddress = match.groups.address
			extractedDetails = match.groups.details
		}

		setAddress(extractedAddress)

		console.log(extractedAddress) // 주소 추출 확인
		console.log(extractedDetails)
	}

	console.log(address)

	return (
		<S.Warrper>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.Input
					placeholder="주소를 입력해주세요 (ex. 역삼동, 삼암동)"
					{...register('address')}
				/>
				<S.Button type="submit">주소찾기</S.Button>
			</S.Form>
			<MapComponent searchaddress={address} />
		</S.Warrper>
	)
}

export default SearchMap

const S = {}

S.Warrper = styled.div`
	width: 931px;
`

S.Form = styled.form`
	margin-bottom: 15px;
	display: flex;
	justify-content: space-between;
`

S.Input = styled.input`
	width: 773px;
	height: 50px;
	border-radius: 10px;
	border: 1px solid #cccccc;

	&::placeholder {
		margin-left: 20px;
	}
`

S.Button = styled.button`
	width: 149px;
	height: 50px;
	border: 1px solid #333;
	font-size: 18px;
	font-weight: bold;
	border-radius: 5px;
	background: white;
	cursor: pointer;
`
