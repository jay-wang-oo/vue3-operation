<template>
  <LoadIng :active="isLoading"></LoadIng>

  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div style="height: 100px; background-size: cover; background-position: center"
              :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
            </td>
            <td><a href="#" class="text-dark">{{ item.title }}</a></td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
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
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
            <!-- v-if 判斷陣列列表是否存在(購物車列表) -->
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                  :disabled="status.loadingItem === item.id"
                  @click="removeCartItem(item.id)">
                    <i class="bi bi-x"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <!-- @change觸發購物車更新，id(購物車),product_id(產品) -->
                    <input type="number" class="form-control"
                    min="1"
                    :disabled="status.loadingItem === item.id"
                    @change="updateCart(item)"
                    v-model.number="item.qty">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                  </div>
                </td>
                <td class="text-end">
                  <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 購物車列表 -->

    </div>

    <!-- 輸入表單(結帳頁面) -->
    <div class="my-5 row justify-content-center">
      <VForm class="col-md-6" v-slot="{ errors }"
      @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <VField id="email" name="email" type="email" class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email" rules="email|required"
          v-model="form.user.email"></VField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField id="name" name="姓名" type="text" class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名" rules="required"
          v-model="form.user.name"></VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField id="tel" name="電話" type="tel" class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話" rules="required"
          v-model="form.user.tel"></VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField id="address" name="地址" type="text" class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址" rules="required"
          v-model="form.user.address"></VField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </VForm>
    </div>
    <!-- 輸入表單(結帳頁面) -->

  </div>

</template>

<script>

export default {
  data () {
    return {
      products: [],
      product: {},
      cart: {},
      // 優惠碼
      coupon_code: '',
      // 輸入表單(結帳頁面)
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
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
    },

    // ======== 購物車列表 ========
    getCart () {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((response) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false

          // 陣列列表(購物車列表)＋總金額
          this.cart = response.data.data
          console.log(response)
        })
    },

    // ======== 更新購物車 ========
    updateCart (item) {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true
      // 避免重複觸發 API加上讀取效果
      this.status.loadingItem = item.id

      // [參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }

      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.put(url, { data: cart })
        .then((res) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false
          // 清空讀取效果
          this.status.loadingItem = ''

          console.log(res)
          this.getCart()
        })
    },

    // ======== 刪除購物車 ========
    removeCartItem (id) {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true
      // 避免重複觸發 API加上讀取效果
      this.status.loadingItem = id

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api).then((response) => {
        // 讀取資料完就會執行 Loading 關閉
        this.isLoading = false
        // 避免重複觸發 API加上讀取效果
        this.status.loadingItem = ''

        // pushMessageState.js
        this.$httpMessageState(response, '移除購物車品項')

        this.getCart()
      })
    },

    // ======== 加入優惠碼 ========
    addCouponCode () {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = false

      // 範例： {
      //   data: {
      //     code: "testCode"
      //   }
      // }
      const coupon = {
        code: this.coupon_code
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(api, { data: coupon })
        .then((res) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false
          // pushMessageState.js
          this.$httpMessageState(res, '加入優惠券')

          // 更新金額
          this.getCart()
        })
    },

    // ======== 輸入表單(結帳頁面) ========
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
        })
    }

  },

  created () {
    this.getProducts()
  }
}
// API 起手式
// const api = `${process.env.VUE_APP_API}API路徑`
// this.$http.post(api(API路徑), 資料)
//   .then((res) => {
//     if (res.data.success) {
//       console.log(res.data)
//     }
//   })

</script>
