import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

/**
 * 리액트 라우터와 동일하게 움직이기에 스토리북 작성이 어렵습니다 하지만 ListPage 를 본다면 정상적으로 작동하는걸 확인할 수 있습니다.
 */
const Pagination = ({ total, page, item_length }) => {
	const [pageState, setPageState] = useState(page)
	const [_, setSearchParam] = useSearchParams()
	const Buttons = new Array(Math.ceil(total / item_length))
		.fill('')
		.map((_, i) => i + 1)
	const ShowPageNumber = Math.ceil(pageState / 10)
	const ShowButtons = Buttons.filter(
		i => (ShowPageNumber - 1) * 10 + 1 <= i && ShowPageNumber * 10 + 1 > i,
	)
	const TopPage = Buttons.length

	if (pageState > TopPage) {
		return
	}

	if (Buttons.length === 1) {
		return null
	}

	const ChangePage = newPage => {
		window.scrollTo({ top: 0 })
		setPageState(newPage)
		setSearchParam({ page: newPage })
	}

	return (
		<S.PaginationBox>
			{/*<S.Button disabled={pageState === 1} onClick={() => ChangePage(1)}></S.Button>*/}
			<S.Button
				disabled={pageState === 1}
				onClick={() => ChangePage(pageState - 1)}
			>
				<NavigateBeforeOutlinedIcon />
			</S.Button>
			{ShowButtons.map(number => (
				<S.Button
					key={number}
					onClick={() => ChangePage(number)}
					select={(pageState === number).toString()}
					disabled={pageState === number}
				>
					{number}
				</S.Button>
			))}
			<S.Button
				disabled={pageState === TopPage}
				onClick={() => ChangePage(pageState + 1)}
			>
				<NavigateNextOutlinedIcon />
			</S.Button>
			{/*<S.Button disabled={pageState === TopPage} onClick={() => ChangePage(TopPage)}></S.Button>*/}
		</S.PaginationBox>
	)
}

const S = {}

S.PaginationBox = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;

	:disabled {
		cursor: inherit;
	}
`

S.Button = styled.button`
	width: 20px;
	height: 20px;
	display: flex;
	font-size: 18px;
	justify-content: center;
	background-color: white;
	align-items: center;
	border: none;
	cursor: pointer;
	border-radius: 12px;
	padding: 15px;
	color: ${({ select, theme }) =>
		select === 'true' ? theme.PALETTE.primary[100] : 'black'};
`

Pagination.proptype = {
	/**
	 * 현재 페이지 번호를 나타냅니다.
	 */
	page: PropTypes.number.isRequired,
	/**
	 * 해당 페이지 네이션을 만들 한 페이지에서 보여지는 아이템들의 개수를 나타냅니다.
	 */
	item_length: PropTypes.number.isRequired,
	/**
	 * 해당 페이지 네이션을 만들 아이템들의 총 길이를 나타냅니다.
	 */
	total: PropTypes.number.isRequired,
}

export default Pagination
