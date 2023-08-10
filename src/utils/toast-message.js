import toast from 'react-hot-toast'

const toastMessage = {
	success: message => toast.success(message),
	error: message => toast.error(message),
	promise: (promiseFn, loading, success, error) =>
		toast.promise(promiseFn, {
			loading,
			success,
			error,
		}),
}

export default toastMessage
