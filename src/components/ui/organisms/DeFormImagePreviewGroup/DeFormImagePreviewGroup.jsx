import registerIcon from 'assets/images/ico-image-register.png'
import deleteIcon from 'assets/images/ico-preview-del.png'
import { forwardRef, useState } from 'react'
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
			alert(
				'기존에 등록된 이미지는 순서 변경이 불가능합니다.\n순서 변경을 원하시면 이미지를 다시 등록해주세요.',
			)
		}

		return (
			<S.PreviewGroup>
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
					class={isHighlight ? 'highlight' : ''}
					onDragEnter={highlight}
					onDragOver={highlight}
					onDragLeave={unhighlight}
					onDrop={handleDrop}
				>
					<img className="registerIcon" src={registerIcon} ref={ref} />
				</label>
				{mainImage && (
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
				)}
				{imagePreviews && (
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="droppable" direction="horizontal">
							{provided => (
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
													<S.DeleteButton onClick={() => onDeleteImage(index)}>
														<img src={deleteIcon} />
													</S.DeleteButton>
												</div>
											)}
										</Draggable>
									))}
								</div>
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
				theme.isDesktop || theme.isTabletAndLaptop ? '148px' : '30%'};
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

	.previewBoxWrap {
		display: flex;
		flex-wrap: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop ? 'no-wrap' : 'wrap'};

		& > div {
			position: relative;
			min-width: 148px;
			aspect-ratio: 1 / 1;
			margin-right: 8px;
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

	.previewBoxWrap + .previewBoxWrap {
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
