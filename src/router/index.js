import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import admin from '../views/Admin.vue'
import Main from '../components/Admin/Main.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditCategoryVue from '@/views/Category/EditCategory.vue'
import EditProductVue from '@/views/Product/EditProduct.vue'
import DetailProductVue from '@/views/Product/DetailProduct.vue'
import ListProductVue from '@/views/Category/ListProduct.vue'
import HomeVue from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView,
    children: [
      {
        path: "",
        name: "home",
        component: HomeVue
      },
      {
        path: "detail",
        name: "detail",
        component: DetailProductVue
      },
      {
        path: "detailcategory",
        name: "listproduct",
        component: ListProductVue
      }
    ]
  },

  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: "main",
        name: "main",
        component: Main,
      },
      {
        path: "category",
        name: "Category",
        component: Category,
      },
      {
        path: "category/add",
        name: "AddCategory",
        component: AddCategory,
      },
      {
        path: "category/edit",
        name: "editcategory",
        component: EditCategoryVue
      },
      {
        path: "product",
        name: "product",
        component: Product,
      },
      {
        path: "product/add",
        name: "Addproduct",
        component: AddProduct,
      },
      {
        path: "product/edit",
        name: "editproduct",
        component: EditProductVue,
      }

    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
