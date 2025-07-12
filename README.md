# 🗺️ SRD Logistics Custom Map

This project is a **custom-built interactive logistics map** for **SRD Logistics**, designed using **Mapbox GL JS** and custom GeoJSON data.

It visually showcases all SRD **Booking Centres** and **Delivery Centres** across India with beautiful, minimal design and interactive features.

---

## ✨ Features

- ✅ Fully interactive **Mapbox map** with custom styles
- 🟠 **Orange markers** for Booking Centres
- 🔵 **Blue markers** for Delivery Centres
- 📍 Custom tooltips with **location name, address, contact name, and phone**
- 🏷️ Custom city **labels** next to pins
- 📦 GeoJSON generated automatically from an Excel database
- 🔐 Secure Mapbox token handling with Node.js backend proxy (optional)
- 📱 Fully responsive on desktop and mobile
- 🧭 Includes **routing functionality** with Mapbox Directions API

---

## 🛠 Technologies Used

- Mapbox GL JS
- HTML, CSS, JavaScript
- Python (for Excel to GeoJSON conversion)
- Google Sheets + Maps API (for geocoding)

---

## 📁 Project Structure

SRD_Mapbox

- ├── index.html # Interactive map UI
- ├── srd_locations.json # Auto-generated GeoJSON with all centres
- ├── script.js
- ├── convertion.py #Script to generate JSON from excel
- ├── SRD_Logistics_Coordinates.xlsx

---

## 🧠 Author Notes

I built this to help SRD Logistics visually manage and showcase all of their national operational hubs with a modern, clean, and mobile-ready solution — all powered by **Mapbox**.

---

## 🚀 Live Demo (Optional)

> 🔗 [SRD Logistics Map](https://srdlogisticsmap.netlify.app/)

---

## 🙌 Created by [Ryan Tusi](mailto:ryantusi45@gmail.com)
