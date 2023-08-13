import MenuIcon from '@mui/icons-material/Menu'
import useMove from 'hooks/useMovePage'
import styled from 'styled-components'

export const categories = [
	{
		label: '디지털기기',
		path: 'digital',
	},
	{
		label: '생활가전',
		path: 'appliances',
	},
	{
		label: '가전/인테리어',
		path: 'interior',
	},
	{
		label: '생활/주방',
		path: 'living',
	},
	{
		label: '유아동',
		path: 'children',
	},
	{
		label: '유아도서',
		path: 'children-books',
	},
	{
		label: '여셩의류',
		path: 'women-clothing',
	},
	{
		label: '여성잡화',
		path: 'women-accessories',
	},
	{
		label: '식물',
		path: 'plant',
	},
	{
		label: '남성패션/잡화',
		path: 'men-fashion',
	},
	{
		label: '뷰티/미용',
		path: 'beauty',
	},
	{
		label: '스포츠/레저',
		path: 'sports',
	},
	{
		label: '취미/게임/음반',
		path: 'hobby',
	},
	{
		label: '도서',
		path: 'books',
	},
	{
		label: '티켓/교환권',
		path: 'ticket',
	},
	{
		label: '가공식품',
		path: 'processed-food',
	},
	{
		label: '반려동물용품',
		path: 'animal',
	},
	{
		label: '기타중고물품',
		path: 'etc',
	},
]
const HeaderCategory = () => {
	const { linkSearchProduct } = useMove()

	const handleCategoryClick = (e, categoryPath) => {
		e.preventDefault()
		linkSearchProduct(categoryPath)
	}
	return (
		<>
			<S.InnerBox>
				<S.IconWrapper>
					<MenuIcon />
					카테고리
				</S.IconWrapper>
				<S.DropdownMenu>
					{categories.map((category, index) => (
						<li key={index}>
							<div onClick={e => handleCategoryClick(e, category.label)}>
								{category.label}
							</div>
						</li>
					))}
				</S.DropdownMenu>
			</S.InnerBox>
		</>
	)
}

export default HeaderCategory

export const S = {}

S.InnerBox = styled.div`
	position: relative;
	cursor: pointer;
	&:hover ${() => S.DropdownMenu} {
		display: block;
	}
	${() => S.DropdownMenu}:hover {
		display: block;
	}
`

S.IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	&:hover {
		color: #009d91;
	}
`
S.DropdownMenu = styled.ul`
	width: ${({ theme }) =>
		theme.isTablet || theme.isMobileAndTablet ? '180px' : '100%'};
	position: absolute;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 8px;
	border-radius: 5px;
	z-index: 10;
	list-style: none;
	display: none;
	top: 10px;
	li {
		padding: 5px;
		cursor: pointer;
		font-size: 14px;
		width: 100%;

		&:hover {
			background-color: #f5f5f5;
		}
	}
`
