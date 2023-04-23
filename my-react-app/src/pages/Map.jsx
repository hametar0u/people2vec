import React, { useState, useEffect } from 'react';
import DeckGL, {GeoJsonLayer, ArcLayer} from 'deck.gl';
import axios from "axios";

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line


//   const AIR_PORTS =
//   'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const AIR_PORTS = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"scalerank":9,"type":"small","name":"Sahnewal","abbrev":"LUH","location":"terminal","gps_code":"VILD","iata_code":"LUH","wikipedia":"http://en.wikipedia.org/wiki/Sahnewal_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[75.95707224036518,30.850359856170176]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Solapur","abbrev":"SSE","location":"terminal","gps_code":"VASL","iata_code":"SSE","wikipedia":"http://en.wikipedia.org/wiki/Solapur_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[75.93305977107549,17.625415183635024]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Birsa Munda","abbrev":"IXR","location":"terminal","gps_code":"VERC","iata_code":"IXR","wikipedia":"http://en.wikipedia.org/wiki/Birsa_Munda_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[85.3235970368767,23.317724598996193]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Ahwaz","abbrev":"AWZ","location":"terminal","gps_code":"OIAW","iata_code":"AWZ","wikipedia":"http://en.wikipedia.org/wiki/Ahwaz_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[48.74710654359313,31.343158556075725]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid and military","name":"Gwalior","abbrev":"GWL","location":"terminal","gps_code":"VIGR","iata_code":"GWL","wikipedia":"http://en.wikipedia.org/wiki/Gwalior_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[78.21721865463483,26.28548769793701]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Hodeidah Int'l","abbrev":"HOD","location":"terminal","gps_code":"OYHD","iata_code":"HOD","wikipedia":"http://en.wikipedia.org/wiki/Hodeida_International_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[42.97109630194003,14.755253441372462]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Devi Ahilyabai Holkar Int'l","abbrev":"IDR","location":"terminal","gps_code":"VAID","iata_code":"IDR","wikipedia":"http://en.wikipedia.org/wiki/Devi_Ahilyabai_Holkar_International_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[75.8092915005895,22.72774918757095]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Gandhinagar","abbrev":"ISK","location":"ramp","gps_code":"VANR","iata_code":"ISK","wikipedia":"http://en.wikipedia.org/wiki/Gandhinagar_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[73.81056749246886,19.966020567280626]}},{"type":"Feature","properties":{"scalerank":9,"type":"major and military","name":"Chandigarh Int'l","abbrev":"IXC","location":"terminal","gps_code":"VICG","iata_code":"IXC","wikipedia":"http://en.wikipedia.org/wiki/Chandigarh_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[76.80172611052417,30.670724894966725]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Aurangabad","abbrev":"IXU","location":"terminal","gps_code":"VAAU","iata_code":"IXU","wikipedia":"http://en.wikipedia.org/wiki/Aurangabad_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[75.39584329220051,19.867296962108234]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid and military","name":"Faisalabad Int'l","abbrev":"LYP","location":"terminal","gps_code":"OPFA","iata_code":"LYP","wikipedia":"http://en.wikipedia.org/wiki/Faisalabad_International_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[72.9878190922305,31.362743548086222]}},{"type":"Feature","properties":{"scalerank":9,"type":"mid","name":"Omsk Tsentralny","abbrev":"OMS","location":"terminal","gps_code":"UNOO","iata_code":"OMS","wikipedia":"http://en.wikipedia.org/wiki/Omsk_Tsentralny_Airport","natlscale":8,"featureclass":"Airport"},"geometry":{"type":"Point","coordinates":[73.3163595376585,54.95764829340594]}}]};

/*
{"type": "FeatureCollection", "features":[
    {"type": "Feature", "properties": {}, "geometry": {"type":"Point","coordinates":[73.3163595376585,54.95764829340594]}}
]}

*/




const Map = () => {
    const [sourceCoords, setSourceCoords] = useState([0,0]);
    const [INITIAL_VIEW_STATE, setINITIAL_VIEW_STATE] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 4,
        bearing: 0,
        pitch: 30
        });
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/map/get-source-coords")
        .then(response => {
            console.log(response.data);
            setSourceCoords(response.data.coords);
            setINITIAL_VIEW_STATE({latitude: sourceCoords[0], longitude: sourceCoords[1], ...INITIAL_VIEW_STATE});
        })
        .catch(err => {
            console.log(err);
        })

        axios.get("http://localhost:8000/map/get-all-coords")
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

  const onClick = info => {
    if (info.object) {
      // eslint-disable-next-line
      alert(`${info.object.properties.name} (${info.object.properties.abbrev})`);
    }
  };

  return (
    <>
    {data && 
    <DeckGL controller={true} initialViewState={INITIAL_VIEW_STATE}>
      <GeoJsonLayer
        id="base-map"
        data={COUNTRIES}
        stroked={true}
        filled={true}
        lineWidthMinPixels={2}
        opacity={0.4}
        getLineColor={[60, 60, 60]}
        getFillColor={[200, 200, 200]}
      />
      <GeoJsonLayer
        id="people"
        data={data}
        filled={true}
        pointRadiusMinPixels={2}
        pointRadiusScale={6000}
        getPointRadius={f => 11 - f.properties.scalerank}
        getFillColor={[200, 0, 80, 180]}
        pickable={true}
        autoHighlight={true}
        onClick={onClick}
      />
      <ArcLayer
        id="arcs"
        data={data}
        dataTransform={d => d.features.filter(f => f.properties.scalerank < 6)}
        getSourcePosition={f => sourceCoords}
        getTargetPosition={f => f.geometry.coordinates}
        getSourceColor={[0, 128, 200]}
        getTargetColor={[200, 0, 80]}
        getWidth={1}
      />
    </DeckGL>
    }
    </>
  );
};

export default Map;