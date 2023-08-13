import styled from 'styled-components'

const Container = ({ children }) => <S.Container>{children}</S.Container>

export default Container

const S = {}

S.Container = styled.div`
	position: relative;
	max-width: 1100px;
	padding: ${({ theme }) => (theme.isMobile ? '0 16px 100px' : '0 0 200px')};
	margin: 0 auto;
`
