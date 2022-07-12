<template>
  <LoadIng :active="isLoading"></LoadIng>

  <NavBar></NavBar>

  <div class="big_img">
    <img src="@/assets/images/BackImg4.jpg" alt="">
  </div>

  <div class="vacation">
    <h2 class="title_font">遊 輪 行 程<span>Cruise Vacation</span></h2>

    <ul class="vacationItem">
      <li v-for="item in products" :key="item.id">
          <img :src="`${item.imageUrl}`" alt="">
          <div class="text_box">
            <h4>{{ item.category }}</h4>
            <h3>{{ item.title }}</h3>
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">查看更多</button>
            <button type="button" class="btn btn-outline-danger"
              :disabled = "this.status.loadingItem === item.id"
              @click="addCart(item.id)">
              <div v-if="this.status.loadingItem === item.id" class="spinner-grow text-danger spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              加到購物車
            </button>
          </div>

          <!-- <img src="@/assets/images/cruise_2.jpg" alt="">
            <div class="text_box">
            <h4>五星夢幻遊輪 ~《維納斯號》</h4>
            <h3>法國/西班牙假期 6天5夜</h3>
            <h6>出團日期：08/5</h6>
            <div class="note">
              <ul>
                <li>客艙數量：1,830間</li>
                <li>載客數量：3,660人</li>
                <li>船員人數：1,346人</li>
              </ul>
              <ul>
                <li>2019 最佳票選遊輪</li>
                <li>2020 世界遊輪大獎</li>
              </ul>
            </div>
          </div> -->
      </li>
      <!-- <li>
        <a href="">
          <img src="@/assets/images/cruise_2.jpg" alt="">
          <div class="text_box">
            <h4>五星夢幻遊輪 ~《墨丘利號》</h4>
            <h3>希臘群島/義大利假期 8天7夜</h3>
            <h6>出團日期：08/15, 08/25</h6>
            <div class="note">
              <ul>
                <li>客艙數量：1,830間</li>
                <li>載客數量：3,560人</li>
                <li>船員人數：1,346人</li>
              </ul>
              <ul>
                <li>2017 最佳票選遊輪</li>
                <li>2017 世界遊輪大獎</li>
              </ul>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_1.jpg" alt="">
          <div class="text_box">
            <h4>五星夢幻遊輪 ~《密涅瓦號》</h4>
            <h3>挪威/丹麥假期 8天7夜</h3>
            <h6>出團日期：08/10, 08/30</h6>
            <div class="note">
              <ul>
                <li>客艙數量：1,730間</li>
                <li>載客數量：3,460人</li>
                <li>船員人數：1,346人</li>
              </ul>
              <ul>
                <li>2016 最佳票選遊輪</li>
                <li>2018 世界遊輪大獎</li>
              </ul>
            </div>
          </div>
        </a>
      </li> -->
    </ul>

  </div>

  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooterWeb.vue'
// import emitter from '@/methods/emitter'

export default {

  components: {
    NavBar,
    Footer
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

  // provide () {
  //   return {
  //     emitter
  //   }
  // },

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
</script>
