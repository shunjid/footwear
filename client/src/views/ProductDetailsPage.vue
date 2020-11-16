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
              <a
                class="btn btn-small waves-effect waves-light deep-orange"
                id="add-to-cart"
                @click="addToCart"
                v-if="!isItemInCartAlready && !showSuccessMessage"
              >
                <i class="material-icons left">add_shopping_cart</i>
                Add to cart</a
              >
              <a class="btn btn-small disabled" v-if="isItemInCartAlready"
                >Item is already in Cart !</a
              >
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
import M from "materialize-css";

export default {
  components: { NotFoundPage },
  name: "ProductDetailsPage",
  data() {
    return {
      product: {},
      cartItems: [],
      showSuccessMessage: false
    };
  },
  computed: {
    isItemInCartAlready() {
      return this.cartItems.some(item => item.id === this.product.id);
    }
  },
  methods: {
    async addToCart() {
      await axios.post("/api/users/12345/cart", {
        productId: this.$route.params.id
      });
      this.showSuccessMessage = true;

      M.toast({ html: "Added item to cart !", classes: "rounded" });

      setTimeout(() => {
        this.$router.push("/products");
      }, 1500);
    }
  },
  async created() {
    const { data: product } = await axios.get(
      `/api/products/${this.$route.params.id}`
    );
    this.product = product;

    const { data: cartItems } = await axios.get("/api/users/12345/cart");
    this.cartItems = cartItems;
  }
};
</script>
