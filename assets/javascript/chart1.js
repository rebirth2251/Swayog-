const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1st', '2nd', '3rd', '4th'],
        datasets: [{
            label: 'Weekly Report',
            data: [2, 1, 5, 4.5],
            borderWidth: 1,
            borderColor: [
                'rgba(255, 159, 64)',
                'rgb(255, 205,86)',
                'rgb(75,192,192)',
                'rgb(153,102,255)'
            ],
            backgroundColor: [
                'rgba(255, 159, 64)',
                'rgb(255, 205,86)',
                'rgb(75,192,192)',
                'rgb(153,102,255)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grace: '4%'
            }
        }
    }
});

function download(){
    const imageLink = document.createElement('a');
    const canvas = document.getElementById('myChart1');
    imageLink.download = 'report.png'
    imageLink.href = canvas.toDataURL('image/png', 1)
    imageLink.click()
}