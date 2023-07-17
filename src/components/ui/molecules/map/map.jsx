import { useEffect } from "react";
import styled from "styled-components";



const MapComponent = ({searchaddress}) => {
  const { kakao } = window;


  useEffect(() => {

    const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();

    if(searchaddress){
      geocoder.addressSearch(searchaddress, function(result, status){
        if(status === kakao.maps.services.Status.OK){
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new kakao.maps.Marker({
            map,
            position: coords
          });

          marker.setMap(map);
          map.setCenter(coords);
        }
      })
    }
  },[searchaddress])

  return(
    <div>
      <MapContainer id="map"/>
    </div>
  )
}

export default MapComponent


const MapContainer = styled.div`
  width: 931px;
  height: 384px;

`