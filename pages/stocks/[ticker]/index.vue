<template>
  <div>
    <NuxtLayout name="header" />
    {{ this.stock }}
    <div class="container w-96 h-96">
      <bar-chart />
    </div>
    <NuxtLayout name="footer"> </NuxtLayout>
  </div>
</template>

<script>
import stocks from "~/data/stocks";
import BarChart from "~~/components/BarChart.vue";

export default {
  components: { BarChart },
  data() {
    return {
      stock: {},
    };
  },
  created() {
    // For now, only use AAPL stock data
    //const ticker = "this.$route.params.ticker.toUpperCase();"
    const ticker = "AAPL";
    const stock = stocks.find((stock) => stock.symbol === ticker);
    this.stock = stock;
  },
};
</script>
