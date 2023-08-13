import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import SellCheck from 'components/modal/mypage/SellCheck'
import Button from 'components/ui/atoms/Button/Button'
import { CHAGE_USERINFO } from 'consts/message'
import useChatApi from 'hooks/service/useChat.service'
import useMypageApi from 'hooks/service/useMypage.service'
import useMove from 'hooks/useMovePage'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import toastMessage from 'utils/toast-message'

const SellMenuBar = ({ prod_idx, filter }) => {
	const { linkModifyProduct } = useMove()
	const id = prod_idx


	const [changeIcon, setChangeIcon] = useState(true)
	const [openMenu, setOpenMenu] = useState(false)
	const [handleState, setHandleState] = useState(false)
	const [searchParams, _] = useSearchParams()

	const handleIcon = () => {
		setChangeIcon(!changeIcon)
		setOpenMenu(!openMenu)
	}

	const page = searchParams.get('page')
	const { data } = useChatApi.useGetChatProduct(page, prod_idx)
	const chatUser = data.data
	const { mutateAsync } = useMypageApi.useDeleteProduct()

	const hadleDelete = async () => {
		const confirmDelete = window.confirm('물품을 삭제하시겠습니까?')
		const prod_idx = id 
		if (confirmDelete) {
			await toastMessage.promise(
				mutateAsync(prod_idx),
				CHAGE_USERINFO.DELETE_LOADING,
				CHAGE_USERINFO.DELETE_SUCCESS,
				CHAGE_USERINFO.DELETE_ERROR,
			)
		}
	}

	const hadnleState = () => {
		if (!handleState) return setHandleState(true)
		setHandleState(false)
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
								onClick={() => {
									linkModifyProduct(id)
								}}
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
			{handleState ? (
				<SellCheck
					chatUser={chatUser}
					prod_idx={prod_idx}
					setHandleState={setHandleState}
					setOpenMenu={setOpenMenu}
					filter={filter}
				/>
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
