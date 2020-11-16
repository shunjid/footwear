<template>
  <div class="row">
    <ProductsGridItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductsGridItem from "./ProductsGridItem.vue";
export default {
  name: "ProductsGrid",
  props: ["products"],
  components: { ProductsGridItem }
};
</script>

<style></style>
