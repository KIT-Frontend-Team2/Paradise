import DaumPostcode from 'react-daum-postcode'
import { styled } from 'styled-components'
import { useDevice } from 'hooks/mediaQuery/useDevice'


const PopUp = ({ handleClose, handleAddress }) => {
	

	const { isTablet, isMobileAndTablet, isTabletAndLaptop, isMobile } = useDevice()
	const isDesk =  isTablet || isTabletAndLaptop || isMobile || isMobileAndTablet


	const handlePostCode = data => {
		let fullAddress = ''
		console.log(data)
		console.log(fullAddress)

		if (data.userSelectedType === 'R') {
			fullAddress = `${data.sido} ${data.sigungu} ${data.bname2}`
			handleAddress(fullAddress)
		} else {
			fullAddress = `${data.sido} ${data.sigungu} ${data.bname2}`
			handleAddress(fullAddress)
		}
		handleClose()
	}

	const handleCloseButtonClick = () => {
		handleClose()
	}

	return (
		<S.Wrraper >
			<S.Center isdesk={isDesk.toString()}>
				<S.Close>
					<S.Text>우편번호 서비스</S.Text>
					<S.Button onClick={handleCloseButtonClick}>X</S.Button>
				</S.Close>
				<DaumPostcode onComplete={handlePostCode} autoClose={true} />
			</S.Center>
		</S.Wrraper>
	)
}

export default PopUp

const S = {}

S.Wrraper = styled.div`
`
S.Center = styled.div`
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${({ isdesk }) => (isdesk === 'true' ? '100%' : '600px')};
	height: auto;
	padding: 7px;
	border: 1px solid black;
`

S.Close = styled.div`
	width: 100%;
	height: 30px;
	background-color: ${({ theme }) => theme.PALETTE.gray[300]};
	position: absolute;
	top: -30px;
	left: -0.5px;
	right: 0;
	border: 1px solid ${({ theme }) => theme.PALETTE.black};
	display: flex;
	justify-content: space-between;
	align-items: center;
`

S.Text = styled.div`
	margin-left: 30px;
`
S.Button = styled.div`
	margin-right: 20px;
	cursor: pointer;
`
