<template>
  <div>
    <NuxtLayout name="header" />
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="stock in stocks" :key="stock.symbol">
          <stock-card :stock="stock" />
        </div>
      </div>
    </div>
    <NuxtLayout name="footer" />
  </div>
</template>

<script>
import stocks from "~/data/stocks";
import StockCard from "~~/components/StockCard.vue";

export default {
  data() {
    return {
      stocks: stocks.slice(0, 100),
    };
  },
  components: { StockCard },
};
</script>
