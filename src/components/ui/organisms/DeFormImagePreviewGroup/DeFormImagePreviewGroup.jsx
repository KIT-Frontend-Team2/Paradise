import registerIcon from 'assets/images/ico-image-register.png'
import deleteIcon from 'assets/images/ico-preview-del.png'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import { forwardRef, useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { styled } from 'styled-components'

const DeFormImagePreviewGroup = forwardRef(
	(
		{
			register,
			handleImageChange,
			mainImage,
			setMainImage,
			subImageList,
			setSubImageList,
			imagePreviews,
			setImagePreviews,
			imageFileList,
			setImageFileList,
		},
		ref,
	) => {
		const [isHighlight, setIsHighlight] = useState(false)
		const [isModalOpen, setIsModalOpen] = useState(false)

		const { isDesktop, isTabletAndLaptop } = useDevice()

		const isDesk = isDesktop || isTabletAndLaptop

		const onDragEnd = ({ source, destination }) => {
			if (!destination) return
			const _imagePreviews = [...imagePreviews]
			const [targetPreview] = _imagePreviews.splice(source.index, 1)
			_imagePreviews.splice(destination.index, 0, targetPreview)
			setImagePreviews(_imagePreviews)

			const _imageFileList = [...imageFileList]
			const [targetFile] = _imageFileList.splice(source.index, 1)
			_imageFileList.splice(destination.index, 0, targetFile)
			setImageFileList(_imageFileList)
		}

		const onDeleteImage = deleteIndex => {
			const _imagePreviews = imagePreviews.filter((_preview, index) => {
				return index !== deleteIndex
			})
			const _imageFileList = imageFileList.filter((_file, index) => {
				return index != deleteIndex
			})

			setImagePreviews(_imagePreviews)
			setImageFileList(_imageFileList)
		}

		const onDeleteSubImage = deleteIndex => {
			const _subImageList = subImageList.filter((_, index) => {
				return index != deleteIndex
			})
			setSubImageList(_subImageList)
		}

		const onDeleteMainImage = () => {
			if (subImageList.length > 0) {
				setMainImage(subImageList[0])
				const _subImageList = [...subImageList]
				_subImageList.shift()
				setSubImageList(_subImageList)
			} else {
				setMainImage(undefined)
			}
		}

		const highlight = event => {
			event.preventDefault()
			event.stopPropagation()
			setIsHighlight(true)
		}

		const unhighlight = event => {
			event.preventDefault()
			event.stopPropagation()
			setIsHighlight(false)
		}

		const handleDrop = event => {
			unhighlight(event)
			event.preventDefault()
			event.stopPropagation()
			let dt = event.dataTransfer
			let files = dt.files
			handleImageChange(files)
		}

		const alertDragDisable = () => {
			setIsModalOpen(true)
		}

		// 토스트 메세지 1.5초뒤 닫힘
		useEffect(() => {
			const timer = setTimeout(() => {
				setIsModalOpen(false)
			}, 1500)
			return () => {
				clearTimeout(timer)
			}
		}, [isModalOpen])

		return (
			<S.PreviewGroup>
				<S.ToastMessageWrap isModalOpen={isModalOpen}>
					<S.ToastMessage>
						기존에 등록된 이미지는 순서 변경이 불가능합니다. <br />
						순서 변경을 원하시면 이미지를 다시 등록해주세요.
					</S.ToastMessage>
				</S.ToastMessageWrap>
				<input
					type="file"
					name="file"
					id="file"
					accept="image/*"
					multiple
					onChange={event => handleImageChange(event.target.files)}
				/>
				<label
					htmlFor="file"
					role="button"
					className={isHighlight ? 'highlight' : ''}
					onDragEnter={highlight}
					onDragOver={highlight}
					onDragLeave={unhighlight}
					onDrop={handleDrop}
				>
					<img className="registerIcon" src={registerIcon} ref={ref} />
				</label>
				{mainImage && (
					<>
						{!isDesk && <p>기존 이미지 (순서 변경 불가)</p>}
						<div className="previewBoxWrap">
							{mainImage && (
								<div className="previewBox" onDragEnter={alertDragDisable}>
									<img src={mainImage} alt="메인이미지" />
									<S.DeleteButton onClick={onDeleteMainImage}>
										<img src={deleteIcon} />
									</S.DeleteButton>
								</div>
							)}
							{subImageList.length > 0 &&
								subImageList.map((preview, index) => (
									<div
										key={`img-${index}`}
										className="previewBox"
										onDragEnter={alertDragDisable}
									>
										<img src={preview} alt={`Preview ${index + 1}`} />
										{/* <input type="hidden" {...register(`images.${index}`)} /> */}
										<S.DeleteButton onClick={() => onDeleteSubImage(index)}>
											<img src={deleteIcon} />
										</S.DeleteButton>
									</div>
								))}
						</div>
					</>
				)}
				{imagePreviews.length > 0 && (
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="droppable" direction="horizontal">
							{provided => (
								<>
									{!isDesk && <p>신규 등록 이미지</p>}
									<div
										className="previewBoxWrap"
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										{imagePreviews.map((preview, index) => (
											<Draggable
												className="previewBox"
												key={`Preview-${index}`}
												draggableId={`Preview-${index}`}
												index={index}
											>
												{provided => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<img
															src={preview.img_url}
															alt={`Preview ${index + 1}`}
														/>
														<input
															type="hidden"
															{...register(`images.${index}`)}
														/>
														<S.DeleteButton
															onClick={() => onDeleteImage(index)}
														>
															<img src={deleteIcon} />
														</S.DeleteButton>
													</div>
												)}
											</Draggable>
										))}
									</div>
								</>
							)}
						</Droppable>
					</DragDropContext>
				)}
			</S.PreviewGroup>
		)
	},
)

export default DeFormImagePreviewGroup

const S = {}

S.PreviewGroup = styled.div`
	display: flex;
	flex-direction: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? 'row' : 'column'};
	gap: 8px;

	input[type='file'] {
		display: none;
	}

	label {
		font-size: 0;
		position: relative;

		img {
			width: ${({ theme }) =>
				theme.isDesktop
					? '148px'
					: `
					${theme.isTabletAndLaptop ? '130px' : '30%'}
				`};
		}

		&.highlight:before {
			content: '';
			position: absolute;
			inset: 0;
			border: 1px solid ${({ theme }) => theme.PALETTE.white};
			border-radius: 8px;
		}

		&.highlight:after {
			content: '';
			position: absolute;
			inset: 0;
			border: 2px dashed ${({ theme }) => theme.PALETTE.primary[100]};
			border-radius: 8px;
		}
	}

	.registerIcon {
		cursor: pointer;
	}

	p {
		margin: 8px 0 2px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
		color: ${({ theme }) => theme.PALETTE.gray[900]};
	}

	.previewBoxWrap {
		display: flex;
		flex-wrap: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop ? 'no-wrap' : 'wrap'};

		& > div {
			position: relative;
			min-width: ${({ theme }) =>
				theme.isDesktop
					? '148px'
					: `
					${theme.isTabletAndLaptop ? '130px' : '30%'}
				`};
			aspect-ratio: 1 / 1;
			margin-right: 8px;
			margin-bottom: ${({ theme }) =>
				theme.isDesktop || theme.isTabletAndLaptop ? '0' : '8px'};
			border-radius: 10px;
			box-sizing: border-box;

			&.previewBox:last-child {
				margin-right: 0;
			}

			&:first-child:before {
				content: '대표';
				position: absolute;
				top: 0;
				left: 0;
				font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
				color: ${({ theme }) => theme.PALETTE.white};
				background-color: ${({ theme }) => theme.PALETTE.primary[100]};
				padding: 4px 12px;
				z-index: 10;
			}

			& > img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 10px;
			}
		}
	}

	.previewBoxWrap ~ .previewBoxWrap {
		& > div {
			&:first-child:before {
				display: none;
			}
		}
	}
`
S.DeleteButton = styled.div`
	position: absolute;
	top: 2px;
	right: 2px;
	cursor: pointer;

	img {
		width: 30px;
		height: 30px;
	}
`

S.ToastMessageWrap = styled.div`
	display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
	position: absolute;
	top: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '-30px' : '10em'};
	left: 0;
	right: 0;
	z-index: 11;
	align-items: center;
	justify-content: center;
`

S.ToastMessage = styled.div`
	display: inline-block;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	color: ${({ theme }) => theme.PALETTE.white};
	font-size: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop
			? theme.FONT_SIZE.medium
			: theme.FONT_SIZE.small};
`
