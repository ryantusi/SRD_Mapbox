import pandas as pd
import json

# Load Excel file
df = pd.read_excel("SRD_Locations_Coordinates.xlsx")
df.columns = df.columns.str.strip()  # Clean column headers

# Remove newline characters from Address and Contact columns
df["Address"] = df["Address"].astype(str).str.replace(r"\n", " ", regex=True)
df["Contact"] = df["Contact"].astype(str).str.replace(r"\n", " ", regex=True)

# Create GeoJSON
features = []
for _, row in df.iterrows():
    feature = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [row["Longitude"], row["Latitude"]]
        },
        "properties": {
            "name": f"{row['Location']} {row['Type']} Centre",
            "cityLabel": row["Location"],
            "address": row["Address"],
            "contact": row["Name"],
            "phone": row["Contact"],
            "color": "#FFA500" if row["Type"].lower() == "booking" else "#1E90FF"
        }
    }
    features.append(feature)

geojson = {
    "type": "FeatureCollection",
    "features": features
}

# Save to file
output_file = "srd_locations.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(geojson, f, indent=2, ensure_ascii=False)


