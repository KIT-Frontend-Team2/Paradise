import { ImageList, ImageListItem } from '@mui/material'
import defaultImg from 'assets/images/기본프로필/default_profile_3.png'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const DeImgSection = ({ Images, containerWidth }) => {
	const [useTitleImg, setUseTitleImg] = useState(null)
	useEffect(() => {
		setUseTitleImg(Images[0])
	}, [Images])
	return (
		<S.LeftSection>
			<S.ImgBoxSticky>
				<S.TitleImg size={containerWidth} image={useTitleImg || defaultImg} />
				<ImageList
					sx={{ width: containerWidth }}
					cols={Images.length}
					rowHeight={Math.floor(containerWidth / Images.length - 10)}
				>
					{Images.length !== 1 &&
						itemData.map(item => (
							<ImageListItem
								key={item}
								sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
							>
								<S.ImgBox
									size={containerWidth / Images.length - 10}
									onClick={() => setUseTitleImg(item)}
								>
									<img src={item} alt={item} />
								</S.ImgBox>
							</ImageListItem>
						))}
				</ImageList>
			</S.ImgBoxSticky>
		</S.LeftSection>
	)
}

export default DeImgSection

const S = {}

S.LeftSection = styled.div`
	position: relative;
	height: inherit;
	margin-right: 20px;
`

S.ImgBoxSticky = styled.div`
	position: sticky;
	top: 0;
`

S.TitleImg = styled.div`
	background-image: ${({ image }) => `url(${image})`};
	background-size: cover;
	aspect-ratio: 1/1;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray['300']};
	background-position: center;
`
S.ImgBox = styled.div`
	aspect-ratio: 1/1;
	overflow: hidden;
	margin: 0 auto;
	cursor: pointer;
	border: 1px solid #dddddd;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray['300']};

	img {
		text-align: center;
		width: 100%;
		height: 100%;
	}
`
