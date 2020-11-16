<template>
  <div>
    <nav>
      <div class="nav-wrapper deep-purple">
        <a class="brand-logo">
          <router-link to="/products">
            <span class="material-icons"> redeem </span>
            Footwear
          </router-link>
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <router-link to="/cart">
            <li>
              <a>
                <i class="material-icons left">shopping_cart</i>
                Shopping Cart
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <a>
          <router-link to="/cart">
            Shopping Cart
          </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
@media only screen and (min-width: 600px) {
  .brand-logo {
    margin-left: 15px;
  }
}
</style>
