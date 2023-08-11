import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'
import WishListView from '../views/WishListView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import ProductsView from '../views/ProductsView.vue'
import EditProductView from '../views/EditProductView.vue'
import CreateProductView from '../views/CreateProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/registration',
      name: 'registr',
      component: RegistrationView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/user',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/wish',
      name: 'wish',
      component: WishListView,
    },
    {
      path: '/user/edit',
      name: 'editProfile',
      component: EditProfileView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
		{
      path: '/product/edit/:id',
      name: 'productEdit',
      component: EditProductView,
    },
		{
      path: '/product/create',
      name: 'productCreate',
      component: CreateProductView,
    },
  ],
});

export default router;
