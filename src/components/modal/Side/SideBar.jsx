import styled from 'styled-components'

import useViewListApi from '../../../hooks/service/useViewList'
import SideBarSection from '../../ui/organisms/SideBarSection/SideBarSection'
import SideChatButton from '../../ui/organisms/SideChatButton/SideChatButton'

const SideBar = () => {
	const { data, isLoading, isError } = useViewListApi.useGetViewList()
	return (
		<>
			<button onClick={() => console.log('버튼 눌러짐')}>버튼</button>
			<S.SideBarBanner>
				<SideBarSection
					products={!isLoading || isError ? data.data.products : []}
				/>
			</S.SideBarBanner>
			<S.SideBarChat>
				<SideChatButton isNew={false} />
			</S.SideBarChat>
		</>
	)
}

export default SideBar

const S = {}

S.SideBarBanner = styled.div`
	display: ${({ theme }) => (theme.Sidebar ? 'none' : 'block')};
	top: 15%;
	position: fixed;
	right: calc(50% - 700px);
`
S.SideBarChat = styled.div`
	z-index: 100;
	bottom: 10%;
	position: fixed;
	right: 5%;
`
