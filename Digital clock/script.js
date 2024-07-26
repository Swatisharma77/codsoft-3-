function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    timeElement.textContent = time;
    dateElement.textContent = date;
}

setInterval(updateTime, 1000);
updateTime();

