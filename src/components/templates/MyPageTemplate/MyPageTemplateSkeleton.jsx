import Container from 'components/layout/Container'
import MSkeleton from 'components/ui/atoms/Skeleton/MSkeleton'
import { styled } from 'styled-components'

const MyPageTemplateSkeleton = () => {
	return (
		<>
			<S.LoadingHeader>
				<MSkeleton height={180} variant={'rectangular'} />
			</S.LoadingHeader>
			<Container>
				<S.Wrapper>
					<S.MyMenu>
						<S.MyTitle>
							<MSkeleton height={38} variant={'rectangular'} />
						</S.MyTitle>
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</S.MyMenu>
					<S.ContentWrap>
						<MSkeleton height={500} variant={'rectangular'} />
					</S.ContentWrap>
				</S.Wrapper>
			</Container>
		</>
	)
}

export default MyPageTemplateSkeleton

const S = {}

S.LoadingHeader = styled.div`
	margin-bottom: 30px;
`

S.Container = styled.div`
	min-height: 100vh;
`

S.Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
	gap: 50px;
	min-height: 100vh;
`

S.MyMenu = styled.div`
	width: ${({ theme }) => (theme.isDesktop ? '174px' : '100%')};

	ul {
		margin: 0;
		padding: 0;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}

	li {
		position: relative;
		list-style: none;
		height: 50px;
		padding: ${({ theme }) => (theme.isDesktop ? '25px' : '20px')};
		border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[400]};
		flex: 1;
		&:first-child {
			border-top: 0;
		}
	}
`

S.MyTitle = styled.div`
	margin-bottom: 30px;
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
`

S.ContentWrap = styled.div`
	flex: 1;
`
