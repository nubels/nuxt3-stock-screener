<template>
  <div class="flex justify-center">
    <div class="w-96 h-32 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
        {{ stock.name }}
      </h5>
      <p class="text-gray-700 text-base mb-4">
        Type:
        {{ this.capitalizeStockType(stock.type) }}
      </p>
      <p class="text-gray-700 text-base mb-4">Price: ${{ stock.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    capitalizeStockType(type) {
      return type === "etf"
        ? type.toUpperCase()
        : this.capitalizeFirstLetter(type);
    },
  },
};
</script>
