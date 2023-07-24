import CloseIcon from '@mui/icons-material/Close'
import Tag from 'components/ui/atoms/Tag/Tag'
import TagGroup from 'components/ui/molecules/TagGroup/TagGroup'

const DeFormTagGroup = ({ register, tagList, onDeleteTag }) => {
	const tags = tagList || []

	return (
		<TagGroup>
			{tagList &&
				tagList.map((tag, index) => (
					<div key={tag}>
						<Tag
							label={tag}
							endicon={<CloseIcon onClick={() => onDeleteTag(index)} />}
						/>
						<input
							type="hidden"
							value={tag}
							{...register(`tag.${index}`, {
								required: '하나 이상의 태그를 등록해주세요',
							})}
						/>
					</div>
				))}
		</TagGroup>
	)
}

export default DeFormTagGroup
