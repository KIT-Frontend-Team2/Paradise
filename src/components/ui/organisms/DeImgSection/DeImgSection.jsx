import { ImageList, ImageListItem } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const DeImgSection = ({ itemData }) => {
	const [useTitleImg, setUseTitleImg] = useState(itemData[0].img)
	const inputRef = useRef(null)
	const [useWidth, setUseWidth] = useState(0)
	window.addEventListener('resize', () => {
		setUseWidth(() => inputRef.current.offsetWidth - 30)
	})
	useEffect(() => {
		setUseWidth(() => inputRef.current.offsetWidth - 30)
	}, [])

	return (
		<S.LeftSection ref={inputRef}>
			<S.ImgBoxSticky>
				<S.TitleImg size={useWidth} image={useTitleImg} />
				<ImageList
					sx={{ width: useWidth }}
					cols={itemData.length}
					rowHeight={Math.floor(useWidth / itemData.length - 10)}
				>
					{itemData.map(item => (
						<ImageListItem
							key={item.id}
							sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
						>
							<S.ImgBox
								size={useWidth / itemData.length - 10}
								onClick={() => setUseTitleImg(item.img)}
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
	background-image: ${({ image }) => `url(${image})`};
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
