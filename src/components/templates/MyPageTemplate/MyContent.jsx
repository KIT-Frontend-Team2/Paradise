import { myMenuAtom } from 'atom/mypage/atom'
import { useRecoilValue } from 'recoil'

import MyAccountTemplate from './MyAccountTemplate'
import MyCashTemplate from './MyCashTemplate'
import MyProfileTemplate from './MyProfileTemplate'
import MyRecentTemplate from './MyRecentTemplate'
import MySellTemplate from './MySellTemplate'
import MyWishTemplate from './MyWishTemplate'
import MyReviewTemplate from "./MyReviewTemplate";

const MyContent = () => {
	const myMenu = useRecoilValue(myMenuAtom)

	switch (myMenu) {
		case 'mySell':
			return <MySellTemplate />
		case 'wish':
			return <MyWishTemplate />
		case 'recent':
			return <MyRecentTemplate />
		case 'cash':
			return <MyCashTemplate />
		case 'account':
			return <MyAccountTemplate />
		case 'profile':
			return <MyProfileTemplate />
		case'review':
			return <MyReviewTemplate/>
		default:
			return <div>:)</div>
	}
}

export default MyContent
