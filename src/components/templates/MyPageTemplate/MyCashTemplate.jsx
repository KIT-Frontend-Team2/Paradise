import Pagination from 'components/ui/molecules/Pagination/Pagination'
import MonthPrice from 'components/ui/organisms/MyPageSection/MyMonthPrice'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import TotalPrice from 'components/ui/organisms/MyPageSection/MyTotalPrice'
import useMypageApi from 'hooks/service/useMypage.service'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import Calendar from 'utils/calendar'
import { dateFomatter } from 'utils/formatter'

const MyCashTemplate = () => {
	const nowDate = new Date()
	const startDate = dateFomatter(
		new Date(nowDate.getFullYear(), nowDate.getMonth()),
	)
	const endDate = dateFomatter(
		new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0),
	)

	const MonthDate = nowDate.getMonth() + 1

	const { data: getUserInfo } = useMypageApi.useGetinfo()
	const { nick_name } = getUserInfo.data

	const [catagory, setCatagory] = useState('seller')
	const [start, setStartDate] = useState(startDate)
	const [end, setEndDate] = useState(endDate)
	const [curPage, setCurPage] = useState(1)
	const { data } = useMypageApi.useAccountPage(curPage, catagory, start, end)
	const { amount } = data.data
	const { page_size, count } = data.data.pagination
	const [searchParams, _] = useSearchParams()

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
				{nick_name}님의 {MonthDate}월 <br />
				가계부 입니다.
			</S.Title>
			<S.TotalPrice>
				<MonthPrice amount={amount} />
				<TotalPrice amount={amount} />
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
	padding: 0 ${({ theme }) => (theme.isDesktop ? '0' : '16px')};
`
S.Content = styled.div`
	margin-bottom: 50px;
`

S.TotalPrice = styled.div`
	display: flex;
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
	gap: 10px;
	margin: 60px 0;
`
