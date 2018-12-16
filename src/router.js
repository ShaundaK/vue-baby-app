
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import CategoriesShow from './views/CategoriesShow.vue'
import User from './views/User.vue'
import UsersShow from './views/UsersShow.vue'
import Product from './views/Product.vue'
import ProductsShow from './views/ProductsShow.vue'
import UsersEdit from './views/UsersEdit.vue'
import Map from './views/Map.vue'
import Rate from 'vue-rate'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/categories/:id',
      name: 'categoriesShow',
      component: CategoriesShow
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/users/:id',
      name: 'usersShow',
      component: UsersShow,
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/products/:id',
      name: 'productsShow',
      component: ProductsShow 
    },
    {
      path: '/users/:id/edit',
      name: 'usersEdit',
      component: UsersEdit
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
  ]
})
