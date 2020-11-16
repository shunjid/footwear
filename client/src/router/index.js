import { createRouter, createWebHistory } from "vue-router";
import CartPage from "../views/CartPage.vue";
import ProductDetailsPage from "../views/ProductDetailsPage.vue";
import ProductsPage from "../views/ProductsPage.vue";

const routes = [
  {
    path: "/products",
    name: "Products",
    component: ProductsPage
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetailsPage
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage
  },
  {
    path: "/",
    redirect: "/products"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
