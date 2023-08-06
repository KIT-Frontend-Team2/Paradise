import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Button from 'components/ui/atoms/Button/Button'
import useMypageApi from 'hooks/service/useMypage.service'
import React, { useState } from 'react'
import { styled } from 'styled-components'

const SellMenuBar = ({ prod_idx }) => {
	const [changeIcon, setChangeIcon] = useState(true)
	const [openMenu, setOpenMenu] = useState(false)
	const [handleState, setHandleState] = useState(false)

	const handleIcon = () => {
		setChangeIcon(!changeIcon)
		setOpenMenu(!openMenu)
	}

	const { mutate } = useMypageApi.useDeleteProduct()
	const { mutate: chageState } = useMypageApi.useChangeState(prod_idx)

	const hadleDelete = () => {
		const confirmDelete = window.confirm('물품을 삭제하시겠습니까?')

		if (confirmDelete) {
			mutate(prod_idx)
		} else {
			alert('물품 삭제를 취소하셨습니다.')
		}
	}

	const hadnleState = () => {
		setHandleState(true)
		if (handleState) {
			chageState()
		}
	}

	return (
		<>
			<S.Toggle onClick={handleIcon}>
				{changeIcon ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
			</S.Toggle>
			{openMenu ? (
				<S.Wraaper>
					<S.Container>
						<Button
							style={{ width: '199px', height: '42px', fontSize: '13px' }}
							label={'판매완료로 변경'}
							variant={'outlined'}
							onClick={hadnleState}
						/>
						<S.Bottom>
							<Button
								style={{ width: '96px', height: '42px', fontSize: '13px' }}
								label={'수정'}
								variant={'outlined'}
							/>
							<Button
								style={{ width: '96px', height: '42px', fontSize: '13px' }}
								label={'삭제'}
								variant={'outlined'}
								onClick={hadleDelete}
							/>
						</S.Bottom>
					</S.Container>
				</S.Wraaper>
			) : (
				''
			)}
		</>
	)
}

export default SellMenuBar

const S = {}

S.Wraaper = styled.div`
	width: 200px;
	height: 120px;
	position: absolute;
	top: 200px;
	right: 0;
	z-index: 100;
	background-color: ${({ theme }) => theme.PALETTE.white};
`
S.Toggle = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 24px;
	height: 24px;
	background-color: ${({ theme }) => theme.PALETTE.background.white};
	text-align: center;
	align-items: center;
	cursor: pointer;
	margin-bottom: 200px;
`

S.Container = styled.div`
	width: 200px;
	position: absolute;
	top: 0;
	right: 0;
	font-size: 13px;
	z-index: 1000;
`
S.Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`
