const ctx = document.getElementById('canvas');

const labels = Array.from({ length: 400 }, () => Math.floor(Math.random() * 20));;
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: Array.from({ length: 400 }, () => Math.floor(Math.random() * 20)),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
    }]
};

new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
    }
});
