import Box from '@mui/material/Box'
import { myMenuAtom } from 'atom/mypage/atom'
import Button from 'components/ui/atoms/Button/Button'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { styled } from 'styled-components'

import Customchecbox from '../../../../assets/images/checkbox.png'
import Myselect from './MySelect'
import MyUploadCard from './MyUploadCard'

// import Pagination from 'components/ui/molecules/Pagination/Pagination';

const MyPageContent = ({
	all,
	free,
	sale,
	threeMonths,
	SixMonths,
	Ninemonths,
	year,
	allState,
	Salesdetails,
	Purchasedetails,
}) => {
	const [selectFilter, setSelectFilter] = useState('all')
	const MyContentValue = useRecoilValue(myMenuAtom)
	console.log(MyContentValue)
	let repeat = 4

	const handleFilter = filter => {
		setSelectFilter(filter)
	}

	const selectItem = () => {
		switch (selectFilter) {
			case 'all':
				return all
			case 'free':
				return free
			case 'sale':
				return sale
			case 'allState':
				return allState
			case 'Salesdetails':
				return Salesdetails
			case 'Purchasedetails':
				return Purchasedetails
			case 'threeMonths':
				return threeMonths
			case 'SixMonths':
				return SixMonths
			case 'Ninemonths':
				return Ninemonths
			case 'year':
				return year
			default:
				return all
		}
	}

	const selectedData = selectItem()

	return (
		<S.Wrapper>
			<S.Filter>
				<S.Left>
					<Button
						type="button"
						label={'판매'}
						variant={'primary-outlined'}
						size={'small'}
						onClick={() => handleFilter('sale')}
					/>
					<Button
						type="button"
						label={'나눔'}
						size={'small'}
						variant={'outlined'}
						onClick={() => handleFilter('free')}
					/>
				</S.Left>
				{MyContentValue === 'mySell' ? (
					<S.Right>
						<input type="checkbox" />
						<label className="checklabel">판매완료 모아보기</label>
					</S.Right>
				) : (
					''
				)}
			</S.Filter>
			{MyContentValue === 'cash' ? (
				<S.BottomFilter>
					<S.BLeftFilter>
						<li onClick={() => handleFilter('allState')}>총 내역</li>
						<li onClick={() => handleFilter('Salesdetails')}>판매 내역</li>
						<li onClick={() => handleFilter('Purchasedetails')}>구매 내역</li>
					</S.BLeftFilter>
					<S.BRightFilter>
						<Box sx={{ minWidth: 104 }}>
							<Myselect handleFilter={handleFilter} />
						</Box>
					</S.BRightFilter>
				</S.BottomFilter>
			) : (
				''
			)}
			<S.Content repeat={repeat}>
				{selectedData ? (
					selectedData.map(item => (
						<MyUploadCard
							MyContentValue={MyContentValue}
							key={item.productId}
							price={item.productPrice}
							isLike={item.isLike}
							chat_count={item.product_chat_count}
							img_url={item.product_img}
							like={item.product_like}
							name={item.productTitle}
							id={item.productId}
							place={item.product_place}
							time={item.product_create_at}
							state={item.product_state}
							content={item.product_content}
						/>
					))
				) : (
					<div>Loading...</div>
				)}
			</S.Content>
			{/* <Pagination
      page={1} // 현재 페이지 번호
      item_length={10} // 한 페이지에서 보여지는 아이템들의 개수
      total={100} // 아이템들의 총 길이
    /> */}
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
