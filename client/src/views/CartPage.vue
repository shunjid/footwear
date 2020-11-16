<template>
  <div class="container">
    <h4>
      <b>Shopping Cart</b>
    </h4>
    <CartCollection :cartItems="cartItems" />
  </div>
</template>

<script>
import CartCollection from "../components/CartCollection.vue";
import { cartItems } from "../fake-data";

export default {
  components: { CartCollection },
  name: "CartPage",
  data() {
    return {
      cartItems
    };
  }
};
</script>
