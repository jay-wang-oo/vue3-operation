<template>
  <LoadIng :active="isLoading"></LoadIng>

  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
      <tr v-if="orders.length" :class="{'text-secondary': !item.is_paid}">
        <td>{{ $filters.date(item.create_at) }}</td>
        <td><span v-text="item.user.email" v-if="item.user"></span></td>
        <td>
          <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
          </ul>
        </td>
        <td class="text-right">{{ item.total }}</td>
        <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                     v-model="item.is_paid"
                     @change="updatePaid(item)">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
        </td>
        <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openDelOrderModal(item)"
              >刪除</button>
            </div>
        </td>
      </tr>
      </template>
    </tbody>
  </table>

  <!-- Model -->
  <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updateOrder" ></OrderModal>

  <!-- 分頁 -->
  <!-- emit-pages:內層事件名稱，觸發 getOrders事件 -->
  <Pagination :pages="pagination" @emit-pages="getOrders" ></Pagination>

  <!-- del -->
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>

</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
// 分頁
import Pagination from '@/components/PaginAtion.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data () {
    return {
      // 訂單資訊
      orders: [],
      // 訂單暫存
      tempOrder: {},
      // 分頁資訊
      pagination: {},
      // 判斷是否是新增項目
      isNew: false,
      isLoading: false,
      page: 1
    }
  },
  components: {
    OrderModal,
    Pagination,
    DelModal
  },

  methods: {

    // 訂單資訊(+s，複數形式呈現)
    getOrders (page = 1) {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      // 頁籤
      this.page = page

      // 以下為取的遠端資訊的路徑 /api/:api_path/admin/orders?page=:page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      // API 是用 get傳輸，因不需要資料，可以拿掉 this.user
      this.$http.get(api, this.tempProduct)
        .then((res) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false

          // 訂單資訊
          this.orders = res.data.orders

          // 頁籤
          this.pagination = res.data.pagination

          console.log(res)
        })
    },

    // ======== Modal ========

    // isNew:新增項目 item:編輯項目
    openModal (isNew, item) {
      this.tempOrder = { ...item }

      this.isNew = false

      // 打開內層的 modal
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },

    // 外層所傳送的資料先儲存(item)，並且發送到遠端(this.tempOrder, this.$http.post)
    updateOrder (item) {
      // console.log(item)
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid })
        .then((response) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false
          // pushMessageState.js
          this.$httpMessageState(response, '更新付款狀態')

          this.getOrders(this.page)
        })
    },

    // ======== 刪除 Modal ========
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },

    delOrder () {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(api)
        .then((res) => {
          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false

          console.log(res)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getOrders(this.page)
        })
    }

  },

  created () {
    this.getOrders()
    console.log(process.env.VUE_APP_API)
  }
}
</script>
