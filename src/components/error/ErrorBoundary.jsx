import { Component } from 'react'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		console.log('Error:', error)
		console.log('Info:', info)
	}

	render() {
		if (this.state.hasError) {
			// 에러가 있을시 보여줄 컴포넌트를 지정을 해줄수 있습니다.
			return <></>
		}

		return this.props.children
	}
}

export default ErrorBoundary
