import { queryClient } from 'App'
import productAxios from 'apis/service/product.api'
import userService from 'apis/service/user.api'
import viewListAxios from 'apis/service/viewlist.api'
import API_KEY from 'consts/ApiKey'
import { useMutation, useQuery } from 'react-query'

const useMypageApi = {
	//유저정보 조회
	useGetinfo: () => {
		const { data } = useQuery(['useGetInfo'], () => userService.getUserInfo(), {
			onSuccess: () => queryClient.invalidateQueries([API_KEY.MYPAGE]),
		})
		return { data }
	},

	//비밀번호 수정
	useChangePw: pw => {
		const { mutate } = useMutation(() => userService.changeUserPassword(pw), {
			onSuccess: () => {
				alert('비빌번호 변경에 성공하셨습니다.')
			}
		})
		return { mutate }
	},


	// 회원정보 수정

	useChagneInfo: () => {
		const { mutate } = useMutation(
			UserInfo => userService.changeUserInfo(UserInfo),
			{
				onSuccess: () => {
					alert('회원정보가 수정되었습니다.')
					queryClient.invalidateQueries([API_KEY.MYPAGE])
				}
			},
		)
		return { mutate }
	},

	// 프로필 사진 변경
	useChangeProfile: () => {
		const { mutate } = useMutation(
			image => userService.changeUserProfile(image),
			{
				onSuccess: () => {
					alert('프로필 사진이 변경되었습니다')
				}
			},
		)
		return { mutate }
	},

	//물품삭제
	useDeleteProduct: () => {
		const { mutate } = useMutation(
			prod_idx => productAxios.deleteProduct(prod_idx),
			{
				onSuccess: () => {
					alert('물품이 삭제되었습니다.')
				},
			},
		)
		return { mutate }
	},

	//판매완료 변경
	useChangeState: prod_idx => {
		const { mutate } = useMutation(
			() => productAxios.postCompleteProduct(prod_idx),
			{
				onSuccess: () => queryClient.invalidateQueries(['myPageProductInfo']),
			},
		)
		return { mutate }
	},

	//등록 상품 조회
	useSellPage: filter => {
		const { data } = useQuery(['myPageProductInfo', filter], () =>
			userService.getMyPageProductInfo(filter),
		)
		return { data }
	},

	//관심상품 조회
	useWishPage: filter => {
		const { data } = useQuery(['myPageLikeInfo', filter], () =>
			userService.getMyPageLikeProductInfo(filter),
		)
		return { data }
	},

	//최근 본 상품 조회
	useRecentPage: () => {
		const { data } = useQuery(['myPageRecnet'], () =>
			viewListAxios.getRecentProduct(),
		)
		return { data }
	},

	// 가계부 페이지조회
	useAccountPage: (page, category, start, end) => {
		const { data } = useQuery(
			['mypPageAccount', page, category, start, end],
			() => userService.getMyPageAccountBook(page, category, start, end),
		)
		return { data }
	},

	//판매완료변경
}

export default useMypageApi
