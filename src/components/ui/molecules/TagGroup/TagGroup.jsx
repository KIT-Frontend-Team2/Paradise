import S from './style'

const TagGroup = ({ ...args }) => {
	return <S.TagGroup {...args}>{args.children}</S.TagGroup>
}

export default TagGroup
