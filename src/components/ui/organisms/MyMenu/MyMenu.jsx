import { myMenuAtom } from 'atom/mypage/atom'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'

const MyMenu = () => {

	const { isTablet, isMobileAndTablet, isTabletAndLaptop, isMobile } = useDevice()
	const isDesk =  isTablet || isTabletAndLaptop || isMobile || isMobileAndTablet


	const [myMenu, setMyMenu] = useRecoilState(myMenuAtom)
	const myCategories = [
		{
			path: 'mySell',
			label: '등록 상품',
		},
		{
			path: 'wish',
			label: '관심 상품',
		},
		{
			path: 'recent',
			label: '최근 본 상품',
		},
		{
			path: 'cash',
			label: '가계부',
		},
		{
			path: 'account',
			label: '계정관리',
		},
	]
	const onClickMenu = path => {
		setMyMenu(path)
	}
	return (
		<S.MyMenu isdesk={isDesk.toString()}>
			<S.MyTitle isdesk={isDesk.toString()}>나의 활동</S.MyTitle>
			<ul >
				{myCategories.map(category => (
					<li
						key={category.label}
						onClick={() => onClickMenu(category.path)}
						className={myMenu === category.path ? 'on' : ''}
					>
						<a>{category.label}</a>
					</li>
				))}
			</ul>
		</S.MyMenu>
	)
}

export default MyMenu

const S = {}

S.MyMenu = styled.div`
	width: ${({ isdesk }) => (isdesk === 'true' ? '100%' : '174px')};

	ul {
		margin: 0;
		padding: 0;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}

	li {
		position: relative;
		list-style: none;
		height: ${({ isdesk }) => (isdesk === 'true' ? '50px' : '50px')};
		line-height: 50px;
		padding: 0 ${({ isdesk }) => (isdesk === 'true' ? '7px' : '20px')};;
		border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};
		text-align: ${({ isdesk }) => (isdesk === 'true' ? 'center' : 'left')};
		flex: 1;
		white-space: normal;
		overflow: hidden;
		font-size: ${({ isdesk }) => (isdesk === 'true' ? '12px' : '16px')};;
		&:first-child {
			border-top: 0;
		}

		&.on {
			::after {
				content: '';
				position: absolute;
				inset: -1px;
				z-index: 1;
				border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
			}
			a {
				color: ${({ theme }) => theme.PALETTE.primary[200]};
			}
		}
	}
`

S.MyTitle = styled.div`
	margin-bottom: 30px;
	font-size: 28px;
	font-weight: ${({ theme }) => theme.FONT_SIZE.medium};
	display: ${({ isdesk }) => (isdesk === 'true' ? 'none' : 'block')};
`
