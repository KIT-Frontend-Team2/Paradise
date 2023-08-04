import { atom } from 'recoil'

/**
 * @TODO
 * 렌딩페이지, 회원가입 페이지를 제외하고는 전부 로그인된상태로 보이게 됩니다. 전역상태가 필요가 없습니다.
 */
export const isLoggedInAtom = atom({
	key: 'isLoggedInAtom',
	default: true,
})
