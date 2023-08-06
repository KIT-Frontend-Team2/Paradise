import Box from '@mui/material/Box'
import { myMenuAtom } from 'atom/mypage/atom'
import Container from 'components/layout/Container'
import Button from 'components/ui/atoms/Button/Button'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { styled } from 'styled-components'

import Customchecbox from '../../../../assets/images/checkbox.png'
import Myselect from './MySelect'
import MyUploadCard from './MyUploadCard'

const MyPageContent = ({ products, setCatagory }) => {
	const MyContentValue = useRecoilValue(myMenuAtom)

	const {
		isDesktop,
		isTabletAndLaptop,
		isTablet,
		isMobileAndTablet,
		isMobile,
	} = useDevice()
	let repeat = 4
	if (isDesktop || isTabletAndLaptop) {
		repeat = 4
	}
	if (isTablet) {
		repeat = 3
	}
	if (isMobileAndTablet) {
		repeat = 2
	}

	if (isMobile) {
		repeat = 1
	}

	const handleFilter = filter => {
		switch (filter) {
			case '0':
				setCatagory(0)
				break
			case '1':
				setCatagory(1)
				break
			case 'seller':
				setCatagory('seller')
				break
			case 'buyer':
				setCatagory('buyer')
				break
			default:
				return products
		}
	}

	return (
		<S.Wrapper>
			<Container>
				<S.Filter>
					{MyContentValue !== 'cash' ? (
						<S.Left>
							<Button
								type="button"
								label={'판매'}
								variant={'primary-outlined'}
								size={'small'}
								onClick={() => handleFilter('0')}
							/>
							<Button
								type="button"
								label={'나눔'}
								size={'small'}
								variant={'outlined'}
								onClick={() => handleFilter('1')}
							/>
						</S.Left>
					) : (
						''
					)}
					{MyContentValue === 'mySell' ? (
						<S.Right>
							<input type="checkbox" />
							<label className="checklabel">판매완료</label>
						</S.Right>
					) : (
						''
					)}
				</S.Filter>
				{MyContentValue === 'cash' ? (
					<S.BottomFilter>
						<S.BLeftFilter>
							<li onClick={() => handleFilter('seller')}>판매 내역</li>
							<li onClick={() => handleFilter('buyer')}>구매 내역</li>
						</S.BLeftFilter>
						<S.BRightFilter>
							<Box sx={{ minWidth: 60 }}>
								<Myselect handleFilter={handleFilter} />
							</Box>
						</S.BRightFilter>
					</S.BottomFilter>
				) : (
					''
				)}
				<S.Content repeat={repeat}>
					{MyContentValue === 'mySell'
						? products.map(item => (
								<MyUploadCard
									MyContentValue={MyContentValue}
									key={item.idx}
									price={item.price} // 없음
									isLike={item.isLike} //없음
									chat_count={item.createdAt} //없음
									img_url={item.img_url}
									like={item.product_like} //없음
									name={item.title}
									id={item.idx}
									place={item.region}
									time={item.createdAt} //없음
									state={item.status}
									content={item.product_content} //없음
								/>
						  ))
						: ''}
					{MyContentValue === 'wish'
						? products.map(item => (
								<MyUploadCard
									MyContentValue={MyContentValue}
									key={item.Product.idx}
									price={item.Product.price}
									isLike={item.Product.isLike}
									chat_count={item.Product.createdAt}
									img_url={item.Product.img_url}
									like={item.Product.liked}
									name={item.Product.title}
									id={item.Product.idx}
									place={item.Product.region}
									time={item.Product.createdAt}
									state={item.Product.status}
									content={item.Product.product_content}
								/>
						  ))
						: ''}
					{MyContentValue === 'recent'
						? products.map(item => (
								<MyUploadCard
									MyContentValue={MyContentValue}
									key={item.Product.idx}
									price={item.Product.price}
									isLike={item.Product.isLike}
									chat_count={item.Product.createdAt}
									img_url={item.Product.img_url}
									like={item.Product.liked}
									name={item.Product.title}
									id={item.Product.idx}
									place={item.Product.region}
									time={item.Product.createdAt}
									state={item.Product.status}
									content={item.Product.product_content}
								/>
						  ))
						: ''}
				</S.Content>
				{/* <Pagination
      page={1} // 현재 페이지 번호
      item_length={10} // 한 페이지에서 보여지는 아이템들의 개수
      total={100} // 아이템들의 총 길이
    /> */}
			</Container>
		</S.Wrapper>
	)
}

export default MyPageContent

const S = {}

S.Wrapper = styled.div``
S.Filter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.black};
`
S.Left = styled.div`
	gap: 15px;
	display: flex;
`
S.Right = styled.div`
	gap: 15px;
	vertical-align: -10px;

	.checklabel {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	}

	> [type='checkbox'] {
		appearance: none;
		width: 1.25em;
		height: 1.25em;
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
		cursor: pointer;
		transition: 0.6s;
		margin-right: 10px;
		vertical-align: -6px;
	}

	> [type='checkbox']:checked {
		background-image: url(${Customchecbox});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
`

S.BottomFilter = styled.div`
	display: flex;
	justify-content: space-between;
`
S.BLeftFilter = styled.div`
	display: flex;
	list-style: none;
	cursor: pointer;

	> li {
		font-size: ${({ theme }) => (theme.isDesktop ? '16px' : '13px')};
	}

	::after {
		content: '|';
		margin-left: 10px;
		margin-right: 10px;
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
	}
	:last-child::after {
		content: '';
	}
`
S.BRightFilter = styled.div``

S.Content = styled.div`
	display: grid;
	grid-template-columns: repeat(${({ repeat }) => repeat}, minmax(0, 1fr));
	justify-items: center;
	gap: 30px;
	padding-top: 40px;
`
