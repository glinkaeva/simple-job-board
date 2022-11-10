import React from 'react';
import GoogleMapReact from 'google-map-react';
import s from './map.module.scss';
import mapStyle from './map.json'

const AnyReactComponent = ({text}: any) => <div className={s.location}></div>;

type TSimpleMapProps = {
  lat: number,
  lng: number,
  address: string, 
  phone: string,
  email: string,
}

type TDefaultProps = {
  center: {
    lat: number,
    lng: number,
  },
  zoom: number,
}

export default function SimpleMap(props: TSimpleMapProps){
  const defaultProps: TDefaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng
    },
    zoom: 4
  };

  return (
    <div className={s.wrapper}>
      <div className={s.additional}>
        <div className={s.decorative_circle} />
        <p className={s.title}>
          Department name.
          University Hospital Giessen.
        </p>
        <p className={s.text}>
          {props.address}
        </p>
        <p className={s.text}>
          {props.phone},<br/>
          {props.email}
        </p>
      </div>
      <div className={s.map_wrapper}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB7znYLqPqJ27DU8ZK9fX9BdXnzaTpPKCM" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{
            styles: mapStyle
          }}
        >
          <AnyReactComponent
            lat={props.lat}
            lng={props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}