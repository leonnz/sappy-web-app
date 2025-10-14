# Vue.js + TensorFlow Lite Dashboard

A real-time data monitoring dashboard built with Vue.js that uses TensorFlow Lite for machine learning-powered sensor data analysis and anomaly detection.

## Features

-  **Real-time Dial Gauges** - Visual representation of sensor data
-  **ML-Powered Processing** - TensorFlow Lite analyzes data for anomalies and predictions
-  **Auto-refresh** - Data updates every 10 seconds with ML processing
-  **Status Indicators** - Color-coded alerts (normal/warning/critical)
-  **Predictive Analytics** - ML predictions combined with raw sensor data
-  **Modern UI** - Responsive design with gradient backgrounds

## How It Works

1. **Data Source**: JSON data with sensor readings (temperature, humidity, pressure, CPU usage)
2. **ML Processing**: TensorFlow Lite processes historical data for anomaly detection
3. **Visualization**: Dial gauges display processed values with status indicators
4. **Real-time Updates**: Automatic refresh with ML predictions

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TensorFlow.js & TensorFlow Lite** - Machine learning in the browser
- **Vite** - Fast build tool and dev server
- **SVG Gauges** - Custom dial gauge components
- **CSS Grid** - Responsive layout system

## ML Features

- **Anomaly Detection**: Z-score analysis for outlier detection
- **Trend Prediction**: Simple linear trend analysis
- **Confidence Scoring**: ML confidence levels for predictions
- **Weighted Processing**: Combines raw data with ML predictions

## Data Structure

```json
{
  "sensors": [
    {
      "id": 1,
      "name": "Temperature",
      "value": 72.5,
      "min": 0,
      "max": 100,
      "unit": "F",
      "history": [70, 71, 73, 72, 74]
    }
  ]
}
```

## Gauge Status Colors

-  **Green**: Normal range (0-33% of scale)
-  **Yellow**: Warning range (34-66% of scale)
-  **Red**: Critical range (67-100% of scale)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Project Structure

```
sappy/
 src/
    App.vue        # Main dashboard component
    main.js        # Vue app entry point
    style.css      # Global styles and gauge styling
 package.json       # Dependencies and scripts
 vite.config.js     # Vite configuration
 index.html         # HTML template
 README.md         # This file
```

## Customization

### Adding New Sensors

Edit the `dummyData` object in `App.vue` to add new sensor types:

```javascript
const dummyData = {
  sensors: [
    // ... existing sensors
    {
      id: 5,
      name": "New Sensor",
      value: 50,
      min: 0,
      max: 100,
      unit: "units",
      history: [45, 48, 52, 50, 53]
    }
  ]
};
```

### Modifying ML Logic

Update the `anomalyDetectionModel.predict()` function to implement different ML algorithms or use actual TensorFlow Lite models.

### Customizing Gauge Appearance

Modify the SVG gauge styling in `style.css` to change colors, sizes, and animations.

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Requires WebGL support for TensorFlow.js operations.

## Performance

- ML processing runs in-browser using WebAssembly
- Auto-refresh every 10 seconds (configurable)
- Optimized SVG rendering for smooth animations
- Minimal memory footprint with tensor cleanup

## Future Enhancements

- [ ] Load actual TensorFlow Lite models (.tflite files)
- [ ] Real API integration for live sensor data
- [ ] Advanced ML models (LSTM for time series prediction)
- [ ] Historical data visualization with charts
- [ ] Alert notifications for critical values
- [ ] Export processed data to CSV/JSON

## License

MIT

## Learn More

- [Vue.js Documentation](https://vuejs.org/)
- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [TensorFlow Lite Documentation](https://www.tensorflow.org/lite)
