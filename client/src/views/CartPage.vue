<template>
  <div class="container">
    <h4>
      <b>Shopping Cart</b>
    </h4>
    <ul class="collection">
      <li
        class="collection-item avatar"
        v-for="product in cartItems"
        :key="product.id"
      >
        <img :src="product.imageUrl" alt="" class="circle" />
        <span class="title">{{ product.name }}</span>
        <p>${{ product.price }}</p>
        <a href="#!" class="secondary-content"
          ><i class="material-icons red-text">delete</i></a
        >
      </li>
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
</template>

<script>
import { cartItems } from "../fake-data";

export default {
  name: "CartPage",
  data() {
    return {
      cartItems
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        return sum + Number(item.price);
      }, 0);
    }
  }
};
</script>
