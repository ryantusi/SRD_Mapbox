mapboxgl.accessToken = "pk.eyJ1IjoicnlhbnR1c2kiLCJhIjoiY21jejFnaWF3MGNzYTJrcXR0aW1xMnR3NiJ9.xMB8rPG0dSXy4LQRcAIEQw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ryantusi/cmcz6q4i0007401s9g3j119oy", 
  center: [78.9629, 22.5937],
  zoom: 5,
});

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving",
  controls: { inputs: true, instructions: true },
});

map.addControl(directions, "top-left");

fetch("srd_locations.json")
  .then((response) => response.json())
  .then((geojson) => {
    geojson.features.forEach((feature) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundColor = feature.properties.color;
      el.style.width = "10px";
      el.style.height = "10px";

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<strong>${feature.properties.name}</strong><br/>
             ${feature.properties.address}<br/>
             Contact: ${feature.properties.contact}<br/>
             Phone: ${feature.properties.phone}`
      );

      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);

      const label = document.createElement("div");
      label.className = "custom-label";
      label.textContent = feature.properties.cityLabel;
      label.style.fontSize = "11px";

      new mapboxgl.Marker({ element: label, anchor: "bottom" })
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
});

// Used in Excel
function GEOCODE_ADDRESS(address) {
  if (!address || typeof address !== 'string') return "";
  
  var apiKey = "AIzaSyBL-2FCINhI5aWTFWpTANlOGEa6flkLWus"; 
  var response = UrlFetchApp.fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address) + "&key=" + apiKey);
  var json = JSON.parse(response.getContentText());
  
  if (json.status === "OK" && json.results.length > 0) {
    var lat = json.results[0].geometry.location.lat;
    var lng = json.results[0].geometry.location.lng;
    return lat + "," + lng;  
  } else {
    return "";
  }
}
