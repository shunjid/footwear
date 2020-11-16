<template>
  <div class="container">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid.vue";
import { products } from "../fake-data";

export default {
  components: { ProductsGrid },
  name: "ProductsPage",
  data() {
    return {
      products
    };
  }
};
</script>
