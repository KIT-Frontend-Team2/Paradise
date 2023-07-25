import styled from 'styled-components'

const Container = ({ children }) => <S.Container>{children}</S.Container>

export default Container

const S = {}

S.Container = styled.div`
	max-width: 1100px;
	margin: 0 auto 95px;
`
