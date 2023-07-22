import CloseIcon from '@mui/icons-material/Close'
import Tag from 'components/ui/atoms/Tag/Tag'
import TagGroup from 'components/ui/molecules/TagGroup/TagGroup'

const DeFormTagGroup = ({ tagList, onDeleteTag }) => {
	const tags = tagList || []

	return (
		<TagGroup>
			{tags.map((tag, index) => (
				<Tag
					key={tag}
					label={tag}
					endicon={<CloseIcon onClick={() => onDeleteTag(index)} />}
				/>
			))}
		</TagGroup>
	)
}

export default DeFormTagGroup
