<template>
  <div class="col l4 s12">
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
</template>

<script>
export default {
    name: 'ProductsGridItem',
    props: ['product']
};
</script>

<style></style>
