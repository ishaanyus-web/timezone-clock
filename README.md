# Multi-Timezone Digital Clock

A beautiful, responsive digital clock application that displays the current time in multiple cities around the world.

## Features

- 🌍 **8 Major Timezones**: New York, Los Angeles, London, Paris, Tokyo, Sydney, Dubai, and Singapore
- ⏰ **Real-time Updates**: Clock updates every second with accurate time
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradient background and smooth animations
- 📅 **Date Display**: Shows the current date in each timezone
- ⚡ **Lightweight**: No external dependencies, pure vanilla JavaScript

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The clock will automatically display current times for all timezones
4. Times update automatically every second

## Customization

To add or modify timezones, edit the `timezones` array in `script.js`:

```javascript
const timezones = [
    { city: 'Your City', timezone: 'Continent/City' },
    // Add more cities here
];
```

Use valid IANA timezone identifiers (e.g., `America/New_York`, `Europe/London`, `Asia/Tokyo`)

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE 11: ⚠️ Limited support (requires polyfills)

## Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- Intl API for timezone conversion

## License

MIT License - Feel free to use and modify
