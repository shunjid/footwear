<template>
  <div class="container">
    <div class="row">
      <div class="col l4 s12" v-for="product in products" :key="product.id">
        <router-link :to="'/products/' + product.id">
          <div class="card hoverable z-depth-2">
            <div class="card-image">
              <img :src="product.imageUrl" />
              <br />
              <span class="card-title black-text">{{ product.name }}</span>
              <br />
            </div>
            <div class="card-content">
              <p>${{ product.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../fake-data";

export default {
  name: "ProductsPage",
  data() {
    return {
      products
    };
  }
};
</script>
