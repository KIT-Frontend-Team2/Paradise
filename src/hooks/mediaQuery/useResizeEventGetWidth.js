import { useEffect, useRef, useState } from 'react'

const useResizeEventGetWidth = () => {
	const [targetWidth, setTargetWidth] = useState(0)
	const targetRef = useRef(null)

	const ResizeWidth = () => {
		setTargetWidth(targetRef.current.offsetWidth)
	}

	useEffect(() => {
		setTargetWidth(targetRef.current.offsetWidth)
	}, [])

	useEffect(() => {
		window.addEventListener('resize', ResizeWidth)
		return () => {
			window.removeEventListener('resize', ResizeWidth)
		}
	}, [])

	return [targetWidth, targetRef]
}

export default useResizeEventGetWidth
