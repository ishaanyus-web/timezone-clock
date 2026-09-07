const timezones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Dubai', timezone: 'Asia/Dubai' },
    { city: 'Singapore', timezone: 'Asia/Singapore' }
];

function createClockCard(city, timezone) {
    return `
        <div class="clock-card">
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
    clocksGrid.innerHTML = timezones.map(({ city, timezone }) => 
        createClockCard(city, timezone)
    ).join('');
    updateClocks();
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initializeClock);

// Update clocks every second
setInterval(updateClocks, 1000);