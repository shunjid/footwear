<template>
  <div class="container">
    <h4>
      <b>Shopping Cart</b>
    </h4>
    <CartCollection :cartItems="cartItems" />
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
  async created() {
    const result = await axios.get("/api/users/12345/cart");
    const cartItems = result.data;
    this.cartItems = cartItems;
  }
};
</script>
