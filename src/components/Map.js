import React, { useEffect, useState } from "react";

//packages import
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import axios from "axios";

const Map = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("https://disease.sh/v3/covid-19/countries");
        if (res?.status === 200) {
          setData(res.data);
        } else {
          console.log("An Error Occured");
        }
      } catch (error) {
        console.error(error.res);
      }
    };
    data();
  }, []);
  return data === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <h2 className="text-2xl mb-4">
          Map indicates the country name, total number of active,recovered cases
          and deaths
        </h2>
      </div>
      <MapContainer
        center={[data[94].countryInfo.lat, data[94].countryInfo.long]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "80vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => (
          <Marker position={[item.countryInfo.lat, item.countryInfo.long]}>
            <Popup>
              <div className="flex flex-col">
                <div>Country: {item.country}</div>
                <div>Total Active Case: {item.active}</div>
                <div>Total Recovered: {item.recovered}</div>
                <div> Total Deaths: {item.deaths}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
