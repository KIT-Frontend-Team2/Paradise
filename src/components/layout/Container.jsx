import styled from 'styled-components'

const Container = ({ children }) => <S.Container>{children}</S.Container>

export default Container

const S = {}

S.Container = styled.div`
	position: relative;
	max-width: 1100px;
	margin: 0 auto 495px;
`
