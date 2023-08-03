import { ImageList, ImageListItem } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

const DeImgSection = ({ itemData, containerWidth }) => {
	const [useTitleImg, setUseTitleImg] = useState(itemData[0])
	return (
		<S.LeftSection>
			<S.ImgBoxSticky>
				<S.TitleImg size={containerWidth} image={useTitleImg} />
				<ImageList
					sx={{ width: containerWidth }}
					cols={itemData.length}
					rowHeight={Math.floor(containerWidth / itemData.length - 10)}
				>
					{itemData.length !== 1 &&
						itemData.map(item => (
							<ImageListItem
								key={item}
								sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
							>
								<S.ImgBox
									size={containerWidth / itemData.length - 10}
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
