const timezones = [
    { city: 'New York', timezone: 'America/New_York', emoji: '🗽' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles', emoji: '🏖️' },
    { city: 'Mexico City', timezone: 'America/Mexico_City', emoji: '🇲🇽' },
    { city: 'Toronto', timezone: 'America/Toronto', emoji: '🍁' },
    { city: 'London', timezone: 'Europe/London', emoji: '🇬🇧' },
    { city: 'Paris', timezone: 'Europe/Paris', emoji: '🗼' },
    { city: 'Berlin', timezone: 'Europe/Berlin', emoji: '🇩🇪' },
    { city: 'Moscow', timezone: 'Europe/Moscow', emoji: '🏛️' },
    { city: 'Dubai', timezone: 'Asia/Dubai', emoji: '🌅' },
    { city: 'Delhi', timezone: 'Asia/Kolkata', emoji: '🇮🇳' },
    { city: 'Bangkok', timezone: 'Asia/Bangkok', emoji: '🇹🇭' },
    { city: 'Singapore', timezone: 'Asia/Singapore', emoji: '🇸🇬' },
    { city: 'Hong Kong', timezone: 'Asia/Hong_Kong', emoji: '🏙️' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', emoji: '🗾' },
    { city: 'Seoul', timezone: 'Asia/Seoul', emoji: '🇰🇷' },
    { city: 'Sydney', timezone: 'Australia/Sydney', emoji: '🇦🇺' },
    { city: 'Auckland', timezone: 'Pacific/Auckland', emoji: '🇳🇿' },
    { city: 'Honolulu', timezone: 'Pacific/Honolulu', emoji: '🌺' },
    { city: 'São Paulo', timezone: 'America/Sao_Paulo', emoji: '🇧🇷' },
    { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', emoji: '🇦🇷' },
    { city: 'Istanbul', timezone: 'Europe/Istanbul', emoji: '🕌' },
    { city: 'Cairo', timezone: 'Africa/Cairo', emoji: '🇪🇬' },
    { city: 'Johannesburg', timezone: 'Africa/Johannesburg', emoji: '🇿🇦' },
    { city: 'Lagos', timezone: 'Africa/Lagos', emoji: '🇳🇬' }
];

function createClockCard(city, timezone, emoji) {
    return `
        <div class="clock-card">
            <div class="city-emoji">${emoji}</div>
            <div class="city-name">${city}</div>
            <div class="timezone">${timezone}</div>
            <div class="time" id="time-${timezone}">--:--:--</div>
            <div class="date" id="date-${timezone}"></div>
        </div>
    `;
}

function updateClocks() {
    timezones.forEach(({ city, timezone }) => {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: timezone
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: timezone
        });

        const timeString = formatter.format(now);
        const dateString = dateFormatter.format(now);

        const timeElement = document.getElementById(`time-${timezone}`);
        const dateElement = document.getElementById(`date-${timezone}`);

        if (timeElement) timeElement.textContent = timeString;
        if (dateElement) dateElement.textContent = dateString;
    });
}

function initializeClock() {
    const clocksGrid = document.getElementById('clocksGrid');
    clocksGrid.innerHTML = timezones.map(({ city, timezone, emoji }) => 
        createClockCard(city, timezone, emoji)
    ).join('');
    updateClocks();
}

// Create falling snowflakes
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;
        snowflakesContainer.appendChild(snowflake);
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    initializeClock();
});

// Update clocks every second
setInterval(updateClocks, 1000);
