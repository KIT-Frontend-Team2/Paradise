import EditIcon from '@mui/icons-material/Edit'
import { myMenuAtom } from 'atom/mypage/atom'
import LoadUserApi from 'hooks/pageQuery/useLoadUser'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'

const MyHeader = () => {
	const [myMenu, setMyMenu] = useRecoilState(myMenuAtom)

	const { getMyPageHeader } = LoadUserApi()
	const { data } = getMyPageHeader()

	console.log(`ㅎ더데이터 `, data.data)

	const { User, ondo, productsCount, likeCount, chatCount } = data.data
	const { nickName, profileUrl } = User

	const user_address = '서울시 강남구 역삼동'

	const onClickMenu = path => {
		setMyMenu(path)
	}

	return (
		<S.Header>
			<S.Container>
				<S.ProfileBox>
					<S.UserImg onClick={() => onClickMenu('profile')}>
						<S.EditButton>
							<EditIcon sx={{ color: '#333' }} />
						</S.EditButton>
						<img src={profileUrl || ''} alt={nickName} loading={'lazy'} />
					</S.UserImg>
					<div>
						<S.FlexWrap>
							<S.UserNick>{nickName}</S.UserNick>
							<S.UserOndo>{ondo}℃</S.UserOndo>
						</S.FlexWrap>
						<S.UserAddress>{user_address}</S.UserAddress>
					</div>
				</S.ProfileBox>
				<S.BoxContainer>
					<S.Box>
						<S.Title>등록상품</S.Title>
						<S.Link
							className={myMenu === 'mySell' ? 'on' : ''}
							onClick={() => onClickMenu('mySell')}
						>
							{productsCount}
						</S.Link>
					</S.Box>
					<S.Box>
						<S.Title>관심상품</S.Title>
						<S.Link
							className={myMenu === 'wish' ? 'on' : ''}
							onClick={() => onClickMenu('wish')}
						>
							{likeCount}
						</S.Link>
					</S.Box>
					<S.Box>
						<S.Title>채팅</S.Title>
						<S.Link
							className={myMenu === 'chat' ? 'on' : ''}
							onClick={() => window.alert('채팅 오픈')}
						>
							{chatCount}
						</S.Link>
					</S.Box>
				</S.BoxContainer>
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
	width: ${({ theme }) => (theme.isDesktop ? '1100px' : '100%')};
	margin: 0 auto;
	padding: 30px 0;
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
`

S.FlexWrap = styled.div`
	display: flex;
	align-items: center;
`

S.ProfileBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
	padding: 30px;
	gap: 15px;
	flex: 1;
	background-color: ${({ theme }) => theme.PALETTE.background.white};
`

S.UserImg = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
	cursor: pointer;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
`

S.EditButton = styled.div`
	position: absolute;
	top: -6px;
	right: -6px;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[600]};
	background-color: ${({ theme }) => theme.PALETTE.white};
	border-radius: 50%;

	svg {
		width: 15px;
		height: 15px;
	}
`

S.UserNick = styled.span`
	font-size: 20px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.normal};
`

S.UserOndo = styled.span`
	margin-left: 15px;
	color: ${({ theme }) => theme.PALETTE.gray[800]};
	font-size: ${({ theme }) => theme.FONT_SIZE.normal};
`

S.UserAddress = styled.div`
	margin-top: 4px;
	color: ${({ theme }) => theme.PALETTE.gray[800]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
`
S.BoxContainer = styled.div`
	flex-direction: row;
	display: ${({ theme }) => (theme.isDesktop ? 'flex' : 'none')};
`
S.Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
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
