import initMap from "./initialise-map";
import { fetchData, url } from "./fetch-attractions";

let map;
async function initialise() {
  map = await initMap();
  const data = await fetchData(url);
  console.log(data);
  return data;
}

async function plotLocationsOnMap(data) {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  data.forEach((item) => {
    const { latitude: lat, longitude: lng } = item.geo;
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat, lng },
    });
  });
}

async function main() {
  const data = await initialise().then((value) => {
    plotLocationsOnMap(value);
  });
}

main();
