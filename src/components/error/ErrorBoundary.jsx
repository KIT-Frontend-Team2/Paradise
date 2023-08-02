import { Component } from 'react'

import { HTTPError } from '../../apis/HTTPError'

const initialState = {
	hasError: false,
	error: null,
}

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = initialState
		this.resetErrorBoundary = this.resetErrorBoundary.bind(this)
	}

	resetErrorBoundary() {
		if (this.props && this.props.onReset) {
			this.props.onReset(this.state.error)
		}
		this.setState({
			hasError: false,
			error: null,
		})
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error }
	}

	render() {
		const { Fallback } = this.props
		const { error } = this.state

		if (error) {
			return (
				<Fallback
					statusCode={error instanceof HTTPError ? error.statusCode : undefined}
					resetError={this.resetErrorBoundary}
				/>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
