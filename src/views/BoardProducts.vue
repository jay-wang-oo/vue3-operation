<template>
  <LoadIng :active="isLoading"></LoadIng>

  <NavBar></NavBar>

  <div class="big_img">
    <img src="@/assets/images/product_backImg.jpg" alt="">
  </div>

  <div class="title_box">
    <h2 class="title_font">衝浪客的神奇武器<span>Super Weapon</span></h2>
  </div>

  <div class="superweapon">

    <aside style="background:#eee">
      <ul>
        <li><a href=""
        :class="{ active: filterType === 'All' }"
        @click.prevent="getFilter(filterType = 'All')"
        >全部的神奇武器</a></li>
        <li><a href=""
        :class="{ active: filterType === 'Travel' }"
        @click.prevent="getFilter(filterType = 'Travel')"
        >長板神奇武器</a></li>
        <li><a href=""
        :class="{ active: filterType === 'Nature' }"
        @click.prevent="getFilter(filterType = 'Nature')"
        >短板神奇武器</a></li>
      </ul>
    </aside>

    <main>
      <div class="SWproducts" v-for="item in products" :key="item.id">
        <img :src="item.imageUrl" :alt="item.title" >
        <div class="product_title">
          <h3 class="display-6">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <div class="product_text">
          <div class="price_box">
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <div class="h5" v-if="item.price">優惠價 {{ item.price }} 元</div>
            <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
          </div>
          <button type="button" class="btn btn-outline-secondary"
            @click="getProduct(item.id)">
            查看更多
          </button>
          <button type="button" class="btn btn-outline-danger"
            :disabled = "this.status.loadingItem === item.id"
            @click="addCart(item.id)">
            <div v-if="this.status.loadingItem === item.id" class="spinner-grow text-danger spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            加到購物車
          </button>
        </div>
      </div>
    </main>

  </div>

  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooterWeb.vue'
import emitter from '@/methods/emitter'

export default {
  components: {
    NavBar,
    Footer
  },

  provide () {
    return {
      emitter
    }
  },

  data () {
    return {
      products: [],
      product: {},
      cart: {},
      // 按鈕讀取效果:當 loadingItem有品項時，按鈕就會 disabled並加上讀取狀態
      status: {
        loadingItem: '' // 對應品項 id
      },
      isLoading: false
    }
  },

  methods: {

    // ======== 取得商品列表_all ========
    getProducts () {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((response) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false

          this.products = response.data.products
          console.log('products:', response)
        })
    },

    // ======== 產品頁面 ========
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },

    // ======== 加入購物車 ========
    addCart (id) {
      // console.log(id)
      // 按鈕讀取效果
      this.status.loadingItem = id

      // [參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }
      // cart內會建立兩筆資料 product_id(String)(ID),qty(Number)(數量)
      const cart = {
        product_id: id,
        qty: 1
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: cart })
        .then((response) => {
          // 清空按鈕讀取效果
          this.status.loadingItem = ''
          // pushMessageState.js
          this.$httpMessageState(response, '加入購物車')
          console.log(response)
          this.getCart()
        })
    }

  },

  created () {
    this.getProducts()
  }
}
// API 起手式
// const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}API路徑`
// this.$http.輸出方式(api(API路徑), 資料)
//   .then((res) => {
//     console.log(res.data)
//   })
</script>
