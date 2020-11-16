<template>
  <div class="container">
    <div class="row">
      <div class="col l12 s12">
        <h2 class="header">{{ product.name }}</h2>
        <div class="card horizontal">
          <div class="card-image">
            <img :src="product.imageUrl" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h3 id="price">${{ product.price }}</h3>
              <p><b>Average rating:</b> {{ product.averageRating }}</p>
              <p>
                {{ product.description }}
              </p>
            </div>
            <div class="card-action">
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../fake-data";

export default {
  name: "ProductDetailsPage",
  data() {
    return {
      product: products.find(p => p.id === this.$route.params.id)
    };
  }
};
</script>
