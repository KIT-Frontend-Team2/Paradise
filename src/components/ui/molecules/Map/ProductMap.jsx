import { useEffect } from 'react'
import styled from 'styled-components'

const ProductMap = ({ formAddress }) => {
	useEffect(() => {
		const onLoadKakaoMap = () => {
			if (formAddress) {
				const geocoder = new window.kakao.maps.services.Geocoder()
				geocoder.addressSearch(formAddress, function (result, status) {
					if (status === kakao.maps.services.Status.OK) {
						let region, district, village
						if (result[0].address) {
							region = result[0].address.region_1depth_name
							district = result[0].address.region_2depth_name
							village = result[0].address.region_3depth_name
						} else if (result[0].road_address) {
							region = result[0].road_address.region_1depth_name
							district = result[0].road_address.region_2depth_name
							village = result[0].road_address.region_3depth_name
						}

						if (region && district && village) {
							let searchaddress2 = `${region} ${district} ${village}`
							geocoder.addressSearch(searchaddress2, function (result, status) {
								if (status === kakao.maps.services.Status.OK) {
									const { x, y } = result[0].road_address || result[0].address
									const container = document.getElementById('map')
									const options = {
										center: new window.kakao.maps.LatLng(y, x),
										level: 3,
									}
									const map = new window.kakao.maps.Map(container, options)
									const marker = new window.kakao.maps.Marker({
										position: new window.kakao.maps.LatLng(y, x),
										map: map,
									})
								}
							})
						}
					}
				})
			} else if (status === kakao.maps.services.Status.ZERO_RESULT) {
				alert('검색결과가 없습니다.')
			}
		}

		window.kakao.maps.load(onLoadKakaoMap)
	}, [formAddress])

	return <MapComponent id="map" />
}

export default ProductMap
const MapComponent = styled.div`
	width: 100%;
	height: 100%;
`
