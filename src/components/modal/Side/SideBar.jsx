import { showChatState } from 'atom/chat/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { isMainAtom } from '../../../atom/main/atom'
import useViewListApi from '../../../hooks/service/useViewList.service'
import SideBarSection from '../../ui/organisms/SideBarSection/SideBarSection'
import SideChatButton from '../../ui/organisms/SideChatButton/SideChatButton'
import Chat from '../chat/Chat'

const SideBar = () => {
	const setShowChat = useSetRecoilState(showChatState)
	const { data } = useViewListApi.useGetViewList()
	const isMain = useRecoilValue(isMainAtom)
	return (
		<>
			<S.SideBarBanner ismain={isMain.toString()}>
				<SideBarSection products={data.data.productList} />
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
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
	position: absolute;
	top: ${({ ismain }) => (ismain === 'true' ? 100 : 550)}px;
	right: 20px;
	bottom: 0;
	z-index: 1;
	margin-top: 216px;
`
S.SideBarChat = styled.div`
	z-index: 100;
	bottom: 10%;
	position: fixed;
	right: 5%;
`
