const timezones = [
    { city: 'New York', timezone: 'America/New_York', emoji: '🗽' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles', emoji: '🏖️' },
    { city: 'London', timezone: 'Europe/London', emoji: '🇬🇧' },
    { city: 'Paris', timezone: 'Europe/Paris', emoji: '🗼' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', emoji: '🗾' },
    { city: 'Sydney', timezone: 'Australia/Sydney', emoji: '🇦🇺' },
    { city: 'Dubai', timezone: 'Asia/Dubai', emoji: '🌅' },
    { city: 'Singapore', timezone: 'Asia/Singapore', emoji: '🇸🇬' }
];

function createClockCard(city, timezone, emoji) {
    return `
        <div class="clock-card">
            <div style="font-size: 2.5em; margin-bottom: 10px;">${emoji}</div>
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
