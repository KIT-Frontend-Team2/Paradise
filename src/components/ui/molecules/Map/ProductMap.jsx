import {useEffect, useState} from 'react'
import styled from 'styled-components'



const ProductMap = ({ formAddress, searchAddresss }) => {

	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })


  useEffect(() => {
    const onLoadKakaoMap = () => {

			const geocoder = new kakao.maps.services.Geocoder()
			geocoder.addressSearch(formAddress, function (result, status) {
			console.log(result, status)
			if (status === 'OK') {
				const { x, y } = result[0].road_address || result[0].address
				setCoordinates({ x, y }) // 좌표값 저장
			}
		})

      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
    };

    window.kakao.maps.load(onLoadKakaoMap);
  }, [formAddress, searchAddresss]);

  return <MapComponent id="map" />;
};

export default ProductMap
const MapComponent = styled.div`
	width: 360px;
	height: 360px;
	`
	