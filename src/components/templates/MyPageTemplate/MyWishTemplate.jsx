import Pagination from 'components/ui/molecules/Pagination/Pagination'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import useMypageApi from 'hooks/service/useMypage.service'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

const MyWishTemplate = () => {
	const [catagory, setCatagory] = useState(false)
	const [curPage, setCurPage] = useState(1)
	const { data } = useMypageApi.useWishPage({ page: curPage })
	const { LikeList } = data.data
	const { page_size, count } = data.data.pagination
	const [searchParams, _] = useSearchParams()

	const handlePageChange = newpage => {
		setCurPage(newpage)
		searchParams.set('page', curPage)
	}

	useEffect(() => {
		const pageParam = searchParams.get('page') 
		if (pageParam) {
			setCurPage(parseInt(pageParam))
		}
	}, [searchParams])

	return (
		<S.Wrapper>
			<S.Title>관심상품</S.Title>
			<S.Content>
				<MyPageContent
					products={LikeList}
					setCatagory={setCatagory}
					catagory={catagory}
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

export default MyWishTemplate

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
S.Content = styled.div`
	margin-bottom: 50px;
`
