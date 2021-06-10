async function getData() {
  const xLabels = [];
  const yTemps = [];
  const response = await fetch('./Nasa temp data.csv');
  const data = await response.text();

  const table = data.split('\n').slice(1);

  table.forEach((row) => {
    const columns = row.split(',');

    const year = columns[0];
    xLabels.push(year);
    const temp = columns[1];
    yTemps.push(parseFloat(temp) + 14);
    console.log(year, temp);
  });
  return { xLabels, yTemps };
}
async function chartIt() {
  const data = await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xLabels,
      datasets: [
        {
          label:
            'Combined Land-Surface Air and Sea-Surface Water Temperature in Celsius',
          data: data.yTemps,
          fill: false,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return value + 'C';
            },
          },
        },
      },
    },
  });
}
chartIt();
