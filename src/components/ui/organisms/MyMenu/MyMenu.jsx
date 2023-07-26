import { myMenuAtom } from 'atom/mypage/atom'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'

const MyMenu = () => {
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
		<S.MyMenu>
			<S.MyTitle>나의 활동</S.MyTitle>
			<ul>
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
	width: 174px;

	ul {
		margin: 0;
		padding: 0;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};
	}

	li {
		position: relative;
		list-style: none;
		height: 50px;
		line-height: 50px;
		padding: 0 20px;
		border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};

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
`