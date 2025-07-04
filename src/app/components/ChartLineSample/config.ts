export const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860',
  },
}

const randomChartData = (num: number) => {
  const data: number[] = []

  for (let i = 0; i < num; i++) {
    data.push(Math.round(Math.random() * 200))
  }

  return data
}

const datasetObject = (color: string, points: number) => {
  return {
    fill: false,
    borderColor: chartColors.default[color],
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: chartColors.default[color],
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: chartColors.default[color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: randomChartData(points),
    tension: 0.5,
    cubicInterpolationMode: 'default',
  }
}

export const sampleChartData = (points = 9) => {
  const labels: string[] = []

  for (let i = 1; i <= points; i++) {
    labels.push(`0${i}`)
  }

  return {
    labels,
    datasets: [
      datasetObject('primary', points),
      datasetObject('info', points),
      datasetObject('danger', points),
    ],
  }
}
