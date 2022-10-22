import {FC} from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: FC<{ text: string, lat: number, lng: number }> = ({text}) => <div>{text}</div>;

export const Map: FC = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div style={{height: '360px', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: ""}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}