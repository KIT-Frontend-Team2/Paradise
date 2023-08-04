import { useState } from 'react'

import { ERROR_MESSAGE } from '../../consts/api'

const useOneRequest = (mutateAsync, setState) => {
	const [loading, setLoading] = useState(false)

	return async () => {
		if (loading) return
		try {
			setLoading(true)
			setState(prev => !prev)
			await mutateAsync()
		} catch (err) {
			setState(prev => !prev)
			alert(ERROR_MESSAGE)
		} finally {
			setLoading(false)
		}
	}
}

export default useOneRequest
