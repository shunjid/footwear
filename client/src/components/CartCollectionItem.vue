<template>
  <li class="collection-item avatar">
    <img :src="product.imageUrl" alt="" class="circle" />
    <span class="title">{{ product.name }}</span>
    <p>${{ product.price }}</p>
    <a href="#!" class="secondary-content"
      ><i class="material-icons red-text">delete</i></a
    >
  </li>
</template>

<script>
export default {
  name: "CartCollectionItem",
  props: ["product"]
};
</script>
