import { AddressAtom } from 'atom/map/mapAtom'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'

const MapComponent = ({ searchaddress }) => {
	const { kakao } = window
	const [formAddres, setformAddress] = useRecoilState(AddressAtom)
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const geocoder = new kakao.maps.services.Geocoder()
		geocoder.addressSearch(formAddres, function (result, status) {
			console.log(result, status)
			if (status === 'OK') {
				const { x, y } = result[0].road_address || result[0].address
				setCoordinates({ x, y }) // 좌표값 저장
			}
		})
	}, [formAddres])

	console.log(`최초 주소`, formAddres)

	useEffect(() => {
		if (coordinates.x !== 0 && coordinates.y !== 0) {
			const container = document.getElementById('map')
			const options = {
				center: new kakao.maps.LatLng(coordinates.y, coordinates.x),
				level: 3,
			}
			const map = new kakao.maps.Map(container, options)

			const geocoder = new kakao.maps.services.Geocoder()
			if (searchaddress) {
				geocoder.addressSearch(searchaddress, function (result, status) {
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
							console.log(`구`, region, `시`, district, `동`, village)
							let searchaddress2 = `${region} ${district} ${village}` // 띄어쓰기 추가
							console.log(searchaddress2)
							setformAddress(searchaddress2)
							geocoder.addressSearch(searchaddress2, function (result, status) {
								if (status === kakao.maps.services.Status.OK) {
									const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
									const marker = new kakao.maps.Marker({
										map,
										position: coords,
									})
									marker.setMap(map)
									map.setCenter(coords)
								}
							})
						}
					} else if (status === kakao.maps.services.Status.ZERO_RESULT) {
						alert('검색결과가 없습니다.')
					}
				})
			}
		}
	}, [searchaddress, coordinates])

	return (
		<ConTiainer>
			<MapContainer id="map" />
		</ConTiainer>
	)
}

export default MapComponent

const MapContainer = styled.div`
	width: 100%;
	height: 100%;
`

const ConTiainer = styled.div`
	width: 931px;
	height: 384px;
`
