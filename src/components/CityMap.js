import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const CityMap = ({ city }) => {

    const style = {
        height: "200px",
        width: "300px"
    };

    return (
        <MapContainer center={[city.latitude, city.longitude]} zoom={11} scrollWheelZoom={false} style={style}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[city.latitude, city.longitude]} />
                <UpdateMap city={city} />
            </MapContainer>
    );
}

function UpdateMap({ city }) {
    const map = useMap();
    map.setView([city.latitude, city.longitude], map.getZoom());
  
    return null;
}

export default CityMap;