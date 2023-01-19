import {FC} from "react"
// @ts-ignore
import {MapContainer} from 'react-leaflet/MapContainer'
// @ts-ignore
import {TileLayer} from 'react-leaflet/TileLayer'
// @ts-ignore
import {useMap} from 'react-leaflet/hooks'
import {Marker, Popup} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import L from 'leaflet'

const defaultIcon = L.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
})

L.Marker.prototype.options.icon = defaultIcon

export const LeafletMap: FC = () => {
    const position = [55.803317, 37.542582] as LatLngExpression

    return <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
}

