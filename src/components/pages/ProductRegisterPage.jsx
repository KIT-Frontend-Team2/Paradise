import ProductForm from 'components/templates/ProductFormTemplate/ProductForm'
import useMypageApi from 'hooks/service/useMypage.service'

const ProductRegisterPage = () => {
	const { data: userInfo } = useMypageApi.useGetinfo() // 판매자 지역 정보

	return (
		<>
			<ProductForm userInfo={userInfo.data} />
		</>
	)
}

export default ProductRegisterPage
