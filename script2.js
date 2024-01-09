// Chart.js code to initialize a sample chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
    datasets: [{
      label: '$',
      data: [97000, 95000, 49000, 47000, 46000, 34000],
      backgroundColor: [
        'RGB(65, 191, 153)',
      ],
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx1 = document.getElementById('mychart2').getContext('2d');
const mychart2 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'],
    datasets: [{
      label: '$',
      data: [170000, 125000, 80000, 78000, 47000, 45000 ,4000],
      backgroundColor: [
        'RGB(65, 191, 153)',
      ],
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


  