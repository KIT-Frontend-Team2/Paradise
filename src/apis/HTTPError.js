export class HTTPError extends Error {
	constructor(statusCode, message) {
		super(message)

		this.name = 'HTTPError'
		this.statusCode = statusCode

		Object.setPrototypeOf(this, HTTPError.prototype)
	}
}
