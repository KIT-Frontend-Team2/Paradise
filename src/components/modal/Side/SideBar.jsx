import { showChatState } from 'atom/chat/atom'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import useViewListApi from '../../../hooks/service/useViewList.service'
import SideBarSection from '../../ui/organisms/SideBarSection/SideBarSection'
import SideChatButton from '../../ui/organisms/SideChatButton/SideChatButton'
import Chat from '../chat/Chat'

const SideBar = () => {
	const { data, isLoading, isError } = useViewListApi.useGetViewList()
	const setShowChat = useSetRecoilState(showChatState)

	return (
		<>
			<S.SideBarBanner>
				<SideBarSection
					products={!isLoading || isError ? data.data.products : []}
				/>
			</S.SideBarBanner>
			<S.SideBarChat onClick={() => setShowChat(true)}>
				<SideChatButton isNew={false} />
			</S.SideBarChat>
			<Chat />
		</>
	)
}

export default SideBar

const S = {}

S.SideBarBanner = styled.div`
	top: 15%;
	position: fixed;
	right: calc(50% - 700px);
	opacity: ${({ show }) => (show === 'true' ? 0 : 1)};
`
S.SideBarChat = styled.div`
	z-index: 100;
	bottom: 10%;
	position: fixed;
	right: 5%;
`
