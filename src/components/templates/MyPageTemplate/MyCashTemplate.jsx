import Pagination from 'components/ui/molecules/Pagination/Pagination'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import TotalPrice from 'components/ui/organisms/MyPageSection/MyTotalPrice'
import useMypageApi from 'hooks/service/useMypage.service'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import Calendar from 'utils/calendar'

const MyCashTemplate = () => {
	const nowDate = new Date()
	const startDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1 + 1)
	const endDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0)
	const NewstartDate = startDate.toISOString().split('T')[0]
	const NEwendDate = endDate.toISOString().split('T')[0]

	const [catagory, setCatagory] = useState('seller')
	const [start, setStartDate] = useState(NewstartDate)
	const [end, setEndDate] = useState(NEwendDate)
	const [curPage, setCurPage] = useState(1)
	const { data } = useMypageApi.useAccountPage(curPage, catagory, start, end)
	const { page_size, count } = data.data.pagination
	const [searchParams, _] = useSearchParams()

	console.log(start, end)

	const handlePageChange = newpage => {
		setCurPage(newpage)
		searchParams.set('page', curPage)
	}

	useEffect(() => {
		const pageParam = searchParams.get('page')
		if (pageParam) {
			setCurPage(pageParam)
		}
	}, [searchParams])

	return (
		<S.Wrapper>
			<S.Title>
				님의 {}월 <br />
				가계부 입니다.
			</S.Title>
			<S.TotalPrice>
				<TotalPrice />
			</S.TotalPrice>
			<Calendar
				setStartDate={setStartDate}
				setEndDate={setEndDate}
				end={end}
				start={start}
			/>
			<S.Content>
				<MyPageContent products={data.data.payList} setCatagory={setCatagory} />
			</S.Content>
			<Pagination
				page={curPage}
				item_length={page_size}
				total={count}
				onClick={handlePageChange}
			></Pagination>
		</S.Wrapper>
	)
}

export default MyCashTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ theme }) => (theme.isDesktop ? '873px' : '100%')};
	min-height: 100vh;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
`
S.Content = styled.div``

S.TotalPrice = styled.div`
	margin: 60px 0;
`
