<template>
  <div class="container">
    <h4>
      <b>Shopping Cart</b>
    </h4>
    <CartCollection
      :cartItems="cartItems"
      v-on:remove-from-cart="removeFromCart($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import CartCollection from "../components/CartCollection.vue";

export default {
  components: { CartCollection },
  name: "CartPage",
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    async removeFromCart(productId) {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      this.cartItems = result.data;
    }
  },
  async created() {
    const result = await axios.get("/api/users/12345/cart");
    const cartItems = result.data;
    this.cartItems = cartItems;
  }
};
</script>
