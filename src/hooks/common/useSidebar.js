import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { isMainAtom } from '../../atom/main/atom'

const useSidebar = () => {
	const setAtom = useSetRecoilState(isMainAtom)

	useEffect(() => {
		setAtom(false)
		return () => setAtom(true)
	}, [])
}

export default useSidebar
