<template>
  <LoadIng :active="isLoading"></LoadIng>

  <div class="text-end mt-3">
    <!-- $refs.productModal 指向定義元件(productModal)，呼叫它裡面的方法 -->
    <!-- $refs.productModal.showModal() -->
    <button class="btn btn-primary" type="button"
    @click="openModal(true)"
    >
      增加一個產品
    </button>
  </div>

  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category}}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <!-- currency(item.origin_price) -->
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <!-- currency(item.price) -->
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <!-- item從 v-for,item 帶過來 -->
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Model -->
  <!-- 前內(內層:product)後外(外層:tempProduct) -->
  <!-- tempProduct(外層) >>(props傳送) :product="tempProduct" >>(接收) product(內層) -->
  <!-- 接收(前內後外) : update-product(前:內層元件) >> updateProduct(外:接收函式) -->
  <ProductModal
  ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"
  ></ProductModal>

  <!-- 分頁 -->
  <!-- emit-pages:內層事件名稱，觸發 getProducts事件 -->
  <Pagination :pages="pagination"
  @emit-pages="getProducts"
  ></Pagination>

  <!-- del -->
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>

<script>
// 分頁
import Pagination from '@/components/PaginAtion.vue'
// Model
// import ProductModal from '../components/ProductModal.vue'
import ProductModal from '@/components/ProductModal.vue'
// del
import DelModal from '@/components/DelModal.vue'
// import { currency } from '../methods/filters'

export default {
  data () {
    return {
      // 產品資訊
      products: [],
      // 產品暫存
      tempProduct: {},
      // 分頁資訊
      pagination: {},
      // 判斷是否是新增項目
      isNew: false,
      isLoading: false
    }
  },

  components: {
    // 區域註冊，把 ProductModal載入進來
    ProductModal,
    Pagination,
    DelModal
  },

  // 使用 inject就不用一直載入套件(No import 套件)
  inject: ['emitter'],

  methods: {

    // 千分號
    // currency,

    // 產品資訊(+s，複數形式呈現)
    getProducts (page = 1) {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      // 以下為取的遠端資訊的路徑 /api/:api_path/admin/products?page=:page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      // API 是用 get傳輸，因不需要資料，可以拿掉 this.user
      this.$http.get(api)
        .then((res) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false

          // 取的遠端資料
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },

    // ======== Modal ========

    // isNew:新增項目 item:編輯項目
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew

      // 清空 tempProduct
      // this.tempProduct = {}

      // 打開內層的 modal
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },

    // 外層所傳送的資料先儲存(item)，並且發送到遠端(this.tempProduct, this.$http.post)
    updateProduct (item) {
      // console.log(item)
      this.tempProduct = item

      // 新增-預設形式(改用 let來宣告 api+http方法)
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 編輯(不是新增品項，就調整 api+http方法)
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((response) => {
          console.log(response)

          // 關閉內層的 modal
          productComponent.hideModal()

          // 重新取的列表資料
          this.getProducts()

          // == toast(土司)元件:判斷成功或失敗，在來推送不同的訊息內容(2選1)
          // pushMessageState.js
          this.$httpMessageState(response, '更新產品資料')

          // == toast(土司)元件:判斷成功或失敗，在來推送不同的訊息內容(2選1)
          // if (response.data.success) {
          //   // 重新取的列表資料
          //   this.getProducts()
          //   // 成功觸發，push-message事件 > ToastMessages.vue > push-message元件
          //   this.emitter.emit('push-message', {
          //     style: 'success',
          //     title: '更新成功'
          //   })
          // } else {
          //   this.emitter.emit('push-message', {
          //     style: 'danger',
          //     title: '更新失敗',
          //     // 失敗的訊息內容(後端傳輸)
          //     content: response.data.message.join('、')
          //   })
          // }
        })
    },

    // ======== 刪除 Modal ========
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((response) => {
        console.log(response.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
      })
    }

  },

  // getProducts 因還無法觸發所以加入生命週期來觸發
  created () {
    this.getProducts()
  }
}
// API 起手式
// const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}API路徑`
// this.$http.post(api(API路徑), 資料)
//   .then((res) => {
//     if (res.data.success) {
//       console.log(res.data)
//     }
//   })
</script>
