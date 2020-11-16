<template>
  <div class="container" v-if="product">
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
  <NotFoundPage v-else />
</template>

<script>
import axios from "axios";
import NotFoundPage from "./NotFoundPage.vue";

export default {
  components: { NotFoundPage },
  name: "ProductDetailsPage",
  data() {
    return {
      product: []
    };
  },
  async created() {
    const result = await axios.get(`/api/products/${this.$route.params.id}`);
    const product = result.data;
    this.product = product;
  }
};
</script>
