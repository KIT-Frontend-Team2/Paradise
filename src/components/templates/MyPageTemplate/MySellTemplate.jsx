import Pagination from 'components/ui/molecules/Pagination/Pagination'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import useMypageApi from 'hooks/service/useMypage.service'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

const MySellTemplate = () => {
	const [catagory, setCatagory] = useState()
	const [curPage, setCurPage] = useState(1)
	const filter = { page: curPage, category: catagory }
	const { data } = useMypageApi.useSellPage(filter)
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
			<S.Title>등록상품</S.Title>
			<S.Content>
				<MyPageContent
					products={data.data.products}
					setCatagory={setCatagory}
				/>
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

export default MySellTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ theme }) => (theme.isDesktop ? '873px' : '100%')};
	min-height: 100vh;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
`
S.Content = styled.div``
