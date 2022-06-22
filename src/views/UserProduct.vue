<template>
  <Loading :active="isLoading"></Loading>

  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-danger"
          :disabled = "this.status.loadingItem === product.id"
          @click="addToCart(product.id)">
          <div v-if="this.status.loadingItem === product.id" class="spinner-grow text-danger spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          加到購物車
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: '',
      // 按鈕讀取效果:當 loadingItem有品項時，按鈕就會 disabled並加上讀取狀態
      status: {
        loadingItem: '' // 對應品項 id
      },
      isLoading: false
    }
  },
  methods: {
    // ======== 加入產品頁面 ========
    getProduct () {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`

      this.$http.get(api)
        .then((response) => {
          console.log(response.data)
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false
          if (response.data.success) {
            this.product = response.data.product
          }
        })
    },

    // ======== 加入購物車 ========
    addToCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`

      // 按鈕讀取效果
      this.status.loadingItem = id

      // cart內會建立兩筆資料 product_id(String)(ID),qty(Number)(數量)
      const cart = {
        product_id: id,
        qty
      }

      // [參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }
      this.$http.post(api, { data: cart })
        .then((response) => {
          // pushMessageState.js
          this.$httpMessageState(response, '加入購物車')
          // 清空按鈕讀取效果
          this.status.loadingItem = ''
          this.$router.push('/user/cart')
          console.log(response.data)
          // console.log(response.data.message)
          // console.log(response.data.data.qty)
        })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
// API 起手式
// const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}API路徑`
// this.$http.輸出方式(api(API路徑), 資料)
//   .then((res) => {
//     console.log(res.data)
//   })
</script>
