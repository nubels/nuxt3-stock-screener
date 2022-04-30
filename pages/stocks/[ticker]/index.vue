<script setup lang="ts">

import prices from "~/data/AAPLhistory.json";

const getDates = () => {
  const dates = [];
  for (let i = 0; i < 100; i++) {
    dates.push(prices.historical[i].date);
  }
  return dates.reverse();
}

const getCloses = () => {
  const closes = [];
  for (let i = 0; i < 100; i++) {
    closes.push(prices.historical[i].close);
  }
  return closes.reverse();
}

const dates = getDates();

const closes = getCloses();

const title = "AAPL Stock Price History";

</script>

<template>
  <div>
    <NuxtLayout name="header" />
    <div class="container w-96 h-96 overflow-hidden">

      <line-chart :title="title" :dates="dates" :values="closes"></line-chart>
    </div>

    <NuxtLayout name="footer"> </NuxtLayout>
  </div>
</template>
