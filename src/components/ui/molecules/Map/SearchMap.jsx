import { AddressAtom } from "atom/map/mapAtom"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"
import MapComponent from "./UploadMap"
import { styled } from "styled-components"






const SearchMap = () => {
	const { register, handleSubmit, mode, watch } = useForm({
		mode: 'onblue',
	})

	const [address, setAddress] = useRecoilState(AddressAtom)
	const searchAddress = watch('address')

	const onSubmit = () => {
		let extractedAddress = searchAddress
		setAddress(extractedAddress)
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
	padding-left: 30px;
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