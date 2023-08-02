import styled from 'styled-components'

import useViewListApi from '../../../hooks/service/useViewList.service'
import SideBarSection from '../../ui/organisms/SideBarSection/SideBarSection'
import SideChatButton from '../../ui/organisms/SideChatButton/SideChatButton'

const SideBar = () => {
	const { data } = useViewListApi.useGetViewList()
	return (
		<>
			<S.SideBarBanner>
				<SideBarSection products={data.data.productList} />
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
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
	position: absolute;
	top: 550px;
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
