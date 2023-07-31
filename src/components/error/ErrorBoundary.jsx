import {Component} from 'react'
import {HTTPError} from "../../apis/HTTPError";

const initialState = {
    hasError: false,
    error: null,
};

class ErrorBoundary extends Component {
    state = initialState;

    resetErrorBoundary = () => {
        this.props.onReset?.(this.state.error)
        this.setState({
            hasError: false,
            error: null,
        })
    };

    static getDerivedStateFromError(error) {
        return {hasError: true, error}
    }

    render() {
        const {Fallback} = this.props
        const {error} = this.state

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
