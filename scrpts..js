// scripts.js

// Splash Screen Script
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith("splash.html")) {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 5000);
    }
});

// Chart.js Script for Progress and Stock Pages
if (window.location.pathname.endsWith("progress.html") || window.location.pathname.endsWith("stock.html")) {
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                data: [30, 50, 20],
                backgroundColor: ['green', 'blue', 'orange']
            }]
        }
    });

    const stockCtx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(stockCtx, {
        type: 'bar',
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                label: 'Stock Levels',
                data: [100, 75, 50],
                backgroundColor: ['red', 'yellow', 'green']
            }]
        }
    });
}

// Timeline Interactivity
document.querySelectorAll('.milestone').forEach(item => {
    item.addEventListener('mouseover', event => {
        const tooltip = document.createElement('div');
        tooltip.innerHTML = item.title;
        tooltip.style.position = 'absolute';
        tooltip.style.top = `${event.clientY + 5}px`;
        tooltip.style.left = `${event.clientX + 5}px`;
        tooltip.style.padding = '5px';
        tooltip.style.backgroundColor = '#333';
        tooltip.style.color = 'white';
        tooltip.style.borderRadius = '3px';
        document.body.appendChild(tooltip);

        item.addEventListener('mouseout', () => {
            document.body.removeChild(tooltip);
        });
    });
});
// scripts.js

// Progress Chart
if (document.getElementById('progressChart')) {
    const progressCtx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(progressCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                data: [30, 50, 20],
                backgroundColor: ['green', 'blue', 'orange']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}

// Stock Chart
if (document.getElementById('stockChart')) {
    const stockCtx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(stockCtx, {
        type: 'bar',
        data: {
            labels: ['Box Bar', 'Cladding', 'Plastic'],
            datasets: [{
                label: 'Stock Levels',
                data: [100, 75, 50],
                backgroundColor: ['red', 'yellow', 'green']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}

