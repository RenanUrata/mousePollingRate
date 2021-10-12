let startTime, latency, endTime, data = []
const Holder = document.getElementById('Holder');

function update(e) {
    e.preventDefault();
    endTime = Date.now()
    latency = endTime - startTime
    latency == 0 ? '' : data.push(latency)
    avg = (data.reduce((a, b) => a + b, 0) / data.length) || 0
    Holder.textContent = `now: ${Math.round(latency)} ms | avg: ${Math.round(avg)} ms | Polling Rate: ${Math.round(1000 / avg) !== Infinity ? Math.round(1000 / avg) : "Calculating"} hz`;
    document.removeEventListener('mousemove', update);

}

setInterval(() => {
    startTime = Date.now()
    document.addEventListener('mousemove', update);
    data = []
}, 200)
