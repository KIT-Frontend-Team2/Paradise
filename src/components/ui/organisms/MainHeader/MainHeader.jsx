import { Box } from '@mui/material'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import useMove from 'hooks/useMovePage'
import React from 'react'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import HeaderMobile from '../HeaderMobile/HeaderMobile'
import HeaderCategory from './HeaderCategory'
import HeaderChatAlarm from './HeaderChatAlarm'
import HeaderScroll from './HeaderScroll'
import HeaderSearch from './HeaderSearch'

const MainHeader = props => {
	const { linkMainPage, linkShareList, linkMyPage } = useMove()
	const { isMobile, isMobileAndTablet } = useDevice()

	return (
		<>
			{isMobile ? (
				<HeaderMobile />
			) : (
				<>
					<HeaderScroll />

					<Box
						sx={{
							position: 'relative',
							maxWidth: { xs: '100%', md: '1100px' },
							width: '100%',
							height: '200px',
							backgroundColor: '#FFFFFF',
							padding: '16px',
							boxSizing: 'border-box',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							margin: 'auto',
							zIndex: 30,
						}}
					>
						<HeaderSearch />

						<S.Container>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									height: 40,
									padding: '10px 0 10px 0',
									fontSize: '20px',
								}}
							>
								<HeaderCategory />
							</Box>
							<Box
								onClick={linkMainPage}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									height: 40,
									padding: '10px 0 10px 0',
									fontSize: '20px',
									'&:hover': {
										color: '#009d91',
									},
								}}
							>
								<span>메인페이지</span>
							</Box>
							<Box
								onClick={linkShareList}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									height: 40,
									padding: '10px 0 10px 0',
									fontSize: '20px',
									'&:hover': {
										color: '#009d91',
									},
								}}
							>
								<span>무료나눔</span>
							</Box>
							<Box
								onClick={linkMyPage}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									height: 40,
									padding: '10px 0 10px 0',
									fontSize: '20px',
									'&:hover': {
										color: '#009d91',
									},
								}}
							>
								<span>마이페이지</span>
							</Box>

							<S.ParadiseSection>
								<span>파라다이스</span> 서비스 소개
							</S.ParadiseSection>
							<HeaderChatAlarm />
						</S.Container>
					</Box>
				</>
			)}
		</>
	)
}

export default MainHeader

const Container = styled.div`
	width: 100%;
	position: relative;
	${flexCenter}
	margin-top: 20px;
	span {
		cursor: pointer;
	}
`

const ParadiseSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	font-size: ${({ isMobileAndTablet }) =>
		isMobileAndTablet ? '14px' : '16px'};
	border: 1px solid #999;
	border-radius: 20px;
	color: #999;
	margin-left: ${({ isMobileAndTablet }) => (isMobileAndTablet ? '10px' : '0')};
	margin-right: ${({ isMobileAndTablet }) =>
		isMobileAndTablet ? '10px' : '0'};

	cursor: pointer;
	span {
		color: #009d91;
		font-weight: bold;
		margin-right: 5px;
	}
`

const S = {
	Container,
	ParadiseSection,
}
