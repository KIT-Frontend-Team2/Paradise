import { headerMock } from '__mock__/datas/header.mock'
import { myMenuAtom } from 'atom/mypage/atom'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'

const MyHeader = () => {
	const [myMenu, setMyMenu] = useRecoilState(myMenuAtom)

	const onClickMenu = path => {
		setMyMenu(path)
	}

	return (
		<S.Header>
			<S.Container>
				<S.ProfileBox>{headerMock.data.user_info.user_nick_name}</S.ProfileBox>
				<S.Box>
					<S.Title>등록상품</S.Title>
					<S.Link
						className={myMenu === 'mySell' ? 'on' : ''}
						onClick={() => onClickMenu('mySell')}
					>
						0
					</S.Link>
				</S.Box>
				<S.Box>
					<S.Title>관심상품</S.Title>
					<S.Link
						className={myMenu === 'wish' ? 'on' : ''}
						onClick={() => onClickMenu('wish')}
					>
						0
					</S.Link>
				</S.Box>
				<S.Box>
					<S.Title>채팅</S.Title>
					<S.Link
						className={myMenu === 'chat' ? 'on' : ''}
						onClick={() => window.alert('채팅 오픈')}
					>
						0
					</S.Link>
				</S.Box>
			</S.Container>
		</S.Header>
	)
}

export default MyHeader

const S = {}

S.Header = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	margin-bottom: 30px;
`

S.Container = styled.div`
	display: flex;
	gap: 8px;
	width: 1100px;
	margin: 0 auto;
	padding: 30px 0;
`

S.ProfileBox = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.PALETTE.background.white};
`

S.Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 160px;
	height: 120px;
	background-color: ${({ theme }) => theme.PALETTE.background.white};
`

S.Title = styled.span`
	color: ${({ theme }) => theme.PALETTE.gray[800]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
`

S.Link = styled.span`
	margin-top: 4px;
	font-size: 22px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	cursor: pointer;

	&.on {
		color: ${({ theme }) => theme.PALETTE.primary[100]};
	}
`
