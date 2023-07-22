import { AddressAtom } from "atom/map/mapAtom"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import styled  from "styled-components"



const ProductMap = () => {
	const { kakao } = window
	const formAddres = useRecoilValue(AddressAtom)
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const geocoder = new kakao.maps.services.Geocoder()
		geocoder.addressSearch(formAddres, function (result, status) {
			console.log(result, status)
			if (status === 'OK') {
				const { x, y } = result[0].road_address || result[0].address
				setCoordinates({ x, y }) 
			}
		})
	}, [formAddres])

	useEffect(() => {
		if (coordinates.x !== 0 && coordinates.y !== 0) {
			const container = document.getElementById('map2')
			const options = {
				center: new kakao.maps.LatLng(coordinates.y, coordinates.x),
				level: 3,
			}
			const map = new kakao.maps.Map(container, options)
      const markerPosition = new kakao.maps.LatLng(coordinates.y, coordinates.x);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
  
      // 마커를 지도에 추가
      marker.setMap(map);
      
		}
	}, [coordinates]) 

	return <MapContainer id="map2"></MapContainer>
}

export default ProductMap

const MapContainer = styled.div`
	width: 100%;
	height: 100%;
`
