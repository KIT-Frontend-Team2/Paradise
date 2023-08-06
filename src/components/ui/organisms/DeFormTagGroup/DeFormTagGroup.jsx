import CloseIcon from '@mui/icons-material/Close'
import Tag from 'components/ui/atoms/Tag/Tag'
import TagGroup from 'components/ui/molecules/TagGroup/TagGroup'
import { styled } from 'styled-components'

const DeFormTagGroup = ({
	register,
	tagList,
	errors,
	categoryTag,
	onDeleteTag,
}) => {
	return (
		<>
			<TagGroup>
				{tagList &&
					tagList.map((tag, index) => (
						<div key={`tag-${index}`}>
							<Tag
								label={tag}
								endicon={<CloseIcon onClick={() => onDeleteTag(index)} />}
							/>
							<input
								type="hidden"
								{...register(`tag.${index}`, {
									validate: () => {
										if (!categoryTag) {
											return '카테고리를 선택해주세요.'
										}
									},
								})}
							/>
						</div>
					))}
			</TagGroup>
			{errors.tag && (
				<ErrorMessage className="error">{errors.tag[0].message}</ErrorMessage>
			)}
		</>
	)
}

export default DeFormTagGroup

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
