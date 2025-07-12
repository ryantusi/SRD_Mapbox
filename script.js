mapboxgl.accessToken = "pk.eyJ1IjoicnlhbnR1c2kiLCJhIjoiY21jejFnaWF3MGNzYTJrcXR0aW1xMnR3NiJ9.xMB8rPG0dSXy4LQRcAIEQw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ryantusi/cmcz6q4i0007401s9g3j119oy", // Your custom style
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

// 🔄 Load GeoJSON from external file
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

      // Add city label
      const label = document.createElement("div");
      label.className = "custom-label";
      label.textContent = feature.properties.cityLabel;
      label.style.fontSize = "11px";

      new mapboxgl.Marker({ element: label, anchor: "bottom" })
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
  });
