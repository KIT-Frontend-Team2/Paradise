import React from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../hooks/mediaquery/useDevice'
import randomMaker from '../../../utils/random-number-maker'
import LineBar from '../../ui/atoms/Linebar/LineBar'
import MSkeleton from '../../ui/atoms/Skeleton/MSkeleton'

const ProductSkeletonTemplate = () => {
	const { isDesktop, isTablet, isTabletAndLaptop } = useDevice()
	const isDesk = isDesktop || isTablet || isTabletAndLaptop
	return (
		<S.Wrapper>
			<S.Container isDesk={isDesk}>
				<S.FlexBox isDesk={isDesk}>
					{isDesk ? (
						<S.LeftSection>
							<S.ImgBox>
								<S.SelectImg>
									<MSkeleton
										variant={'rectangular'}
										sx={{ paddingTop: '100%' }}
									/>
								</S.SelectImg>
								<S.Images>
									<S.Image>
										<MSkeleton
											sx={{ paddingTop: '100%' }}
											variant={'rectangular'}
										/>
									</S.Image>
									<S.Image>
										<MSkeleton
											sx={{ paddingTop: '100%' }}
											variant={'rectangular'}
										/>
									</S.Image>
									<S.Image>
										<MSkeleton
											sx={{ paddingTop: '100%' }}
											variant={'rectangular'}
										/>
									</S.Image>
								</S.Images>
							</S.ImgBox>
						</S.LeftSection>
					) : (
						''
					)}
					<S.RightSection>
						{
							<div>
								{!isDesk ? (
									<MSkeleton height={500} variant={'rectangular'} />
								) : (
									''
								)}
							</div>
						}
						<S.ProductBox>
							<S.ProductTitle>
								<MSkeleton width={200} height={35} />
							</S.ProductTitle>
							<S.ProductTitleBox>
								<MSkeleton width={100} height={22} />
							</S.ProductTitleBox>
							<MSkeleton width={randomMaker(150, 300)} height={50} />
							<LineBar />
							<S.ProductInfo>
								<MSkeleton width={randomMaker(150, 300)} height={50} />
								<MSkeleton width={randomMaker(150, 300)} height={50} />
								<MSkeleton width={randomMaker(150, 300)} height={50} />
								<MSkeleton width={randomMaker(150, 300)} height={50} />
								<MSkeleton width={randomMaker(150, 300)} height={50} />
							</S.ProductInfo>
							<S.DepsTitle>
								<MSkeleton width={100} height={50} />
							</S.DepsTitle>
							<S.ProductTagBox>
								<MSkeleton width={randomMaker(70, 100)} height={50} />
								<MSkeleton width={randomMaker(70, 100)} height={50} />
							</S.ProductTagBox>
							<S.MapBox>
								<S.MapInfo>
									<S.DepsTitle>
										<MSkeleton width={120} height={40} />
									</S.DepsTitle>
								</S.MapInfo>
								<S.Map>
									<MSkeleton height={300} variant={'rectangular'} />
								</S.Map>
							</S.MapBox>
							<S.DepsTitle>
								<MSkeleton width={100} height={50} />
							</S.DepsTitle>
							<S.UserProfile>
								<S.UserFlexBox>
									<S.UserImg>
										<MSkeleton height={50} width={50} variant={'circular'} />
									</S.UserImg>
									<S.UserInfoBox>
										<S.UserName>
											<MSkeleton
												height={24}
												width={100}
												variant={'rectangular'}
											/>
										</S.UserName>
										<S.UserInfo>
											<MSkeleton
												height={16}
												width={70}
												variant={'rectangular'}
											/>
										</S.UserInfo>
									</S.UserInfoBox>
								</S.UserFlexBox>
							</S.UserProfile>
							<S.UserProductBox>
								<MSkeleton height={170} variant={'text'} />
							</S.UserProductBox>
							<S.UserProductButton>
								<MSkeleton height={90} width={undefined} />
							</S.UserProductButton>
							<S.ChartTitle>
								<MSkeleton height={50} width={200} />
							</S.ChartTitle>
							<S.ChartImg>
								<MSkeleton height={250} variant={'rectangular'} />
							</S.ChartImg>
						</S.ProductBox>
					</S.RightSection>
				</S.FlexBox>
				<S.DepsTitle>
					<MSkeleton width={150} height={50} />
				</S.DepsTitle>
				<S.Carousel>
					<S.ProductCard>
						<MSkeleton height={200} variant={'rectangular'} />
					</S.ProductCard>
				</S.Carousel>
			</S.Container>
		</S.Wrapper>
	)
}

export default ProductSkeletonTemplate

export const S = {}

S.Wrapper = styled.div`
	width: 100%;
	height: auto;
`
S.Container = styled.div`
	max-width: 1100px;
	width: ${({ deskTop }) => (deskTop ? 90 : 100)}%;
	margin: 0 auto;
`

S.Flex = styled.div`
	display: flex;
`
S.PhoneBox = styled.div``

S.FlexBox = styled.div`
	padding-bottom: 30px;
	display: ${({ deskTop }) => (!deskTop ? 'flex' : 'block')};

	> div {
		width: ${({ deskTop }) => (deskTop ? 50 : 100)}%;
	}
`

S.LeftSection = styled.div`
	position: relative;
	height: inherit;
`

S.RightSection = styled.div`
	overflow: hidden;
`

S.ImgBox = styled.div`
	position: sticky;
	top: 0;
	margin-right: 10px;
`

S.SelectImg = styled.div``

S.Images = styled(S.Flex)`
	margin: 10px 0 0 0;
	gap: 10px;
	width: 100%;
`

S.Image = styled.div`
	width: 100%;
`

S.ProductBox = styled.div``

S.ProductTitle = styled.div``
S.ProductTitleBox = styled(S.Flex)`
	justify-content: space-between;
`

S.ProductCreateAt = styled.div``

S.ProductCountInfo = styled.div``

S.ProductFlexBox = styled(S.Flex)`
	justify-content: space-between;
`

S.ProductPrice = styled.div`
	line-height: 50px;
`

S.ProductButtons = styled(S.Flex)`
	justify-content: space-between;
	gap: 5px;
`
S.ProductSmallButton = styled.div``

S.ProductActionButton = styled.div``

S.ProductInfo = styled.div``

S.DepsTitle = styled.div`
	margin-top: 40px;
`

S.ProductTagBox = styled(S.Flex)`
	gap: 10px;
`

S.Tag = styled.div``

S.MapInfo = styled(S.Flex)`
	justify-content: space-between;
	margin-bottom: 0;

	> div {
		margin-top: 0;
	}
`

S.MapPlace = styled.div``

S.MapBox = styled.div``

S.Map = styled.div``

S.UserProfile = styled.div``

S.UserFlexBox = styled(S.Flex)``

S.UserImg = styled.div``

S.UserInfoBox = styled(S.Flex)`
	flex-direction: column;
	margin-left: 10px;
	justify-content: space-between;
`

S.UserName = styled.div``

S.UserInfo = styled.div``

S.UserProductBox = styled.div``

S.UserProductButton = styled.div``

S.ChartTitle = styled.div``

S.ChartImg = styled.div`
	margin-top: 5px;
`

S.Carousel = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`

S.ProductCard = styled.div`
	width: 100%;
`
