import { myMenuAtom } from 'atom/mypage/atom'
import { useRecoilValue } from 'recoil'

import MyAccountTemplate from './MyAccountTemplate'
import MyCashTemplate from './MyCashTemplate'
import MyProfileTemplate from './MyProfileTemplate'
import MyRecentTemplate from './MyRecentTemplate'
import MyReviewTemplate from './MyReviewTemplate'
import MySellTemplate from './MySellTemplate'
import MyWishTemplate from './MyWishTemplate'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'


const MyContent = () => {
	const myMenu = useRecoilValue(myMenuAtom)
  const [_, setSearchParams] = useSearchParams()

  useEffect(() => {
    setSearchParams({})
  }, [myMenu, setSearchParams])


	switch (myMenu) {
		case 'mySell':
			return <MySellTemplate/>
		case 'wish':
			return <MyWishTemplate/>
		case 'recent':
			return <MyRecentTemplate />
		case 'cash':
			return <MyCashTemplate />
		case 'account':
			return <MyAccountTemplate />
		case 'profile':
			return <MyProfileTemplate />
		case 'review':
			return <MyReviewTemplate />
		default:
			return <div>:)</div>
	}
}

export default MyContent
