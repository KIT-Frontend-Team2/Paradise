import { ImageList, ImageListItem } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

const DeImgSection = ({ size, itemData }) => {
	const [titleImg, setTitleImg] = useState(itemData[0].img)
	return (
		<S.LeftSection>
			<S.ImgBoxSticky>
				<S.TitleImg size={size} titleImg={titleImg} />
				<ImageList
					sx={{ width: size }}
					cols={itemData.length}
					rowHeight={size / itemData - 10}
				>
					{itemData.map(item => (
						<ImageListItem
							key={item.id}
							sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
						>
							<S.ImgBox
								size={size / itemData - 10}
								onClick={() => setTitleImg(item.img)}
							>
								<img src={item.img} alt={item.title} loading={'lazy'} />
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
`

S.ImgBoxSticky = styled.div`
	position: sticky;
	top: 0;
	margin-right: 10px;
`

S.TitleImg = styled.div`
	background-image: ${({ titleImg }) => `url(${titleImg})`};
	background-size: cover;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray['300']};
`
S.ImgBox = styled.div`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	overflow: hidden;
	margin: 0 auto;
	cursor: pointer;
	border: 1px solid #dddddd;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray['300']};

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
