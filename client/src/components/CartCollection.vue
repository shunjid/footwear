<template>
  <div v-if="cartItems.length > 0">
    <ul class="collection">
      <CartCollectionItem
        v-for="product in cartItems"
        v-on:remove-from-cart="$emit('remove-from-cart', $event)"
        :key="product.id"
        :product="product"
      />
    </ul>
    <h4 class="right-align" id="total-price">Total: ${{ totalPrice }}</h4>
    <p class="center-align">
      <button
        class="btn waves-effect waves-light deep-orange"
        id="checkout-button"
      >
        Proceed to Checkout
      </button>
    </p>
  </div>
  <h5 v-else>You haven't added anything into the cart !!</h5>
</template>

<script>
import CartCollectionItem from "./CartCollectionItem.vue";
export default {
  name: "CartCollection",
  components: { CartCollectionItem },
  props: ["cartItems"],
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        return sum + Number(item.price);
      }, 0);
    }
  }
};
</script>
