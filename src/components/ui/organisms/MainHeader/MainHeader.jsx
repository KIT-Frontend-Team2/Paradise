import { Box } from '@mui/material'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import useMove from 'hooks/useMovePage'
import React from 'react'
import styled from 'styled-components'

import HeaderMobile from '../HeaderMobile/HeaderMobile'
import HeaderCategory from './HeaderCategory'
import HeaderScroll from './HeaderScroll'
import HeaderSearch from './HeaderSearch'

const MainHeader = props => {
	const { linkSellList, linkShareList, linkMyPage, linkAbout } = useMove()

	const { isDesktop, isTabletAndLaptop, isMobile } = useDevice()
	// const [showChatModal, setShowChatModal] = useState(false)
	// const [newChat, setNewChat] = useState()
	// const socket = useSocket()
	// useEffect(() => {
	// 	socket.on('newMessage', data => {
	// 		setNewChat(data)
	// 		setShowChatModal(true)
	// 	})
	// })

	return (
		<>
			{isMobile ? (
				<HeaderMobile />
			) : (
				<S.HeaderWrapper>
					<S.HeaderContainer>
						<HeaderScroll />
						<Box
							sx={{
								position: 'relative',
								// maxWidth: { xs: '100%', md: '1100px' },
								width: '100%',
								height: '180px',
								backgroundColor: '#FFFFFF',
								boxSizing: 'border-box',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								margin: 'auto',
								zIndex: 100,
							}}
						>
							<HeaderSearch
							// newChat={newChat}
							/>
							<S.Container>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										height: 40,
										padding: '10px 0 10px 0',
										fontSize: isDesktop || isTabletAndLaptop ? '20px' : '16px',
									}}
								>
									<HeaderCategory />
								</Box>
								<Box
									onClick={linkSellList}
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent:
											isDesktop || isTabletAndLaptop
												? 'flex-start'
												: 'space-around',
										alignItems: 'center',
										height: 40,
										padding: '10px 0 10px 0',
										fontSize: isDesktop || isTabletAndLaptop ? '20px' : '16px',
										'&:hover': {
											color: '#009d91',
										},
									}}
								>
									<span>판매상품</span>
								</Box>
								<Box
									onClick={linkShareList}
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent:
											isDesktop || isTabletAndLaptop
												? 'flex-start'
												: 'space-around',
										alignItems: 'center',
										height: 40,
										padding: '10px 0 10px 0',
										fontSize: isDesktop || isTabletAndLaptop ? '20px' : '16px',
										'&:hover': {
											color: '#009d91',
										},
									}}
								>
									<span>중고상품</span>
								</Box>
								<Box
									onClick={linkMyPage}
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent:
											isDesktop || isTabletAndLaptop
												? 'flex-start'
												: 'space-around',
										alignItems: 'center',
										height: 40,
										padding: '10px 0 10px 0',
										fontSize: isDesktop || isTabletAndLaptop ? '20px' : '16px',
										'&:hover': {
											color: '#009d91',
										},
									}}
								>
									<span>마이페이지</span>
								</Box>
								{(isDesktop || isTabletAndLaptop) && (
									<S.ParadiseSection onClick={linkAbout}>
										<span>파라다이스</span> 서비스 소개
									</S.ParadiseSection>
								)}

								{/* <HeaderChatAlarm
							newChat={newChat}
							showChatModal={showChatModal}
							setShowChatModal={setShowChatModal}
							/> */}
							</S.Container>
						</Box>
					</S.HeaderContainer>
				</S.HeaderWrapper>
			)}
		</>
	)
}

export default MainHeader

const S = {}

S.HeaderWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
`

S.HeaderContainer = styled.div`
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '1100px' : '100%'};
	padding: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '0' : '0 16px'};
	margin: 0 auto;
	box-sizing: border-box;
`

S.Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		cursor: pointer;
	}
`

S.ParadiseSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 0;
	font-size: 13px;
	border: 1px solid #ddd;
	border-radius: 20px;
	color: #999;

	cursor: pointer;
	span {
		color: #009d91;
		font-size: 13px;
		font-weight: bold;
		margin-right: 5px;
	}
`
