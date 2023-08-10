import wonIcon from 'assets/images/ico-won.png'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
	margin-top: 80px;
	padding: ${({ theme }) => !theme.isDesktop && !theme.isMobile && '0 16px'};
`

export const TitleArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 6px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[800]};
`

export const Title2 = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`

export const RightArea = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};

	.secondary {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`

export const FormGroup = styled.dl`
	margin: 0;
	padding: 35px 0;
	display: flex;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};

	&:first-child {
		align-items: flex-start;
	}

	&:last-child {
		border-bottom-color: ${({ theme }) => theme.PALETTE.gray[800]};
	}

	${({ theme }) =>
		!theme.isDesktop &&
		!theme.isTabletAndLaptop &&
		`
		flex-direction: column;
		align-items: flex-start;
		gap:20px;
		border-bottom:0;
	`}
`

export const FormLabel = styled.dd`
	position: relative;
	margin: 0;
	min-width: 168px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	${({ theme, required }) =>
		required &&
		`&::after {
		content: '*';
		margin-left: 4px;
		color: ${theme.PALETTE.secondary};
	}`}
	#cnt {
		position: absolute;
		top: 26px;
		left: 0;
		color: ${({ theme }) => theme.PALETTE.gray[700]};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-weight: 300;
	}
`

export const FormRegister = styled.dt`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 12px;
	${({ theme }) =>
		!theme.isDesktop && !theme.isTabletAndLaptop && 'width:100%;'}

	.infoMessage {
		padding-left: 15px;
		color: ${({ theme }) => theme.PALETTE.gray[700]};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`

export const CustomInput = styled.div`
	position: relative;
	display: ${({ theme }) =>
		!theme.isDesktop && !theme.isTabletAndLaptop && 'flex'};
	width: ${({ theme }) =>
		!theme.isDesktop && !theme.isTabletAndLaptop && '100%'};

	input {
		padding-left: 40px;
	}

	&:before {
		position: absolute;
		left: 16px;
		top: 0;
		line-height: 50px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}

	&.price {
		display: flex;
		flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
		gap: 20px;
		align-items: ${({ theme }) => (theme.isDesktop ? 'center' : 'flex-end')};

		input {
			text-align: right;
			padding-right: 40px;
			&::placeholder {
				text-align: left;
			}
		}
		& > div {
			position: relative;
		}
		& > div:before {
			content: '';
			position: absolute;
			left: 16px;
			top: 18px;
			width: 14px;
			height: 14px;
			background-image: url(${wonIcon});
			background-size: 13px;
			background-repeat: no-repeat;
		}
		& > div:after {
			content: '원';
			position: absolute;
			right: 16px;
			top: 0;
			line-height: 50px;
		}
	}

	&.tag {
		&:before {
			content: '#';
		}
	}
`

export const Textarea = styled.textarea`
	width: 100%;
	height: 168px;
	border: 1px solid
		${({ theme, error }) =>
			error ? theme.PALETTE.secondary : theme.PALETTE.gray[500]};
	box-sizing: border-box;
	border-radius: 6px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-family: 'Noto Sans CJK KR';
	padding: 16px;
	&::placeholder {
		color: ${({ theme }) => theme.PALETTE.gray[700]};
	}
`

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`

export const TagWrapper = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop || theme.isTablet
			? 'row'
			: 'column'};
`

export const Map = styled.div`
	width: 100%;
	aspect-ratio: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '5 / 2' : '4 / 3'};
	border-radius: 6px;
	background-color: #eee;
`

export const ButtonWrap = styled.div`
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? `50%` : `100%`};
	margin: 45px auto 0;
	display: flex;
	justify-content: space-between;
	gap: 12px;
`
