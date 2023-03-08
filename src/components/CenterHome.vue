<template>
    <div>
        <canvas id="myChart" class=" chart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  onMounted(() => {
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  })
</script>

<style lang="scss" scoped>
.chart{
    width: 40% !important;
    height: 40% !important;
}

</style>