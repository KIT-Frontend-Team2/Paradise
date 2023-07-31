import registerIcon from 'assets/images/ico-image-register.png'
import deleteIcon from 'assets/images/ico-preview-del.png'
import { forwardRef } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { styled } from 'styled-components'

const DeFormImagePreviewGroup = forwardRef(
	(
		{
			register,
			handleImageChange,
			imagePreviews,
			setImagePreviews,
			imageFileList,
			setImageFileList,
		},
		ref,
	) => {
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

		return (
			<S.PreviewGroup>
				<input
					type="file"
					name="file"
					id="file"
					accept="image/*"
					multiple
					onChange={handleImageChange}
				/>
				<label htmlFor="file">
					<img className="registerIcon" src={registerIcon} ref={ref} />
				</label>
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
			</S.PreviewGroup>
		)
	},
)

export default DeFormImagePreviewGroup

const S = {}

S.PreviewGroup = styled.div`
	display: flex;
	flex-direction: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? `row` : `column`};
	gap: 8px;

	input[type='file'] {
		display: none;
	}

	label {
		font-size: 0;

		img {
			width: ${({ theme }) =>
				theme.isDesktop || theme.isTabletAndLaptop ? `148px` : `30%`};
		}
	}

	.registerIcon {
		cursor: pointer;
	}

	.previewBoxWrap {
		display: flex;
		flex-wrap: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop ? `no-wrap` : `wrap`};

		& > div {
			position: relative;
			min-width: 148px;
			aspect-ratio: 1 / 1;
			margin-right: 8px;
			border-radius: 10px;
			box-sizing: border-box;

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
