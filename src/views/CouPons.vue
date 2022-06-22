<template>
  <LoadIng :active="isLoading"></LoadIng>

  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="openCouponModal(true)">
      建立新的優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
    <tr>
      <th>名稱</th>
      <th>折扣百分比</th>
      <th>到期日</th>
      <th>是否啟用</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, key) in coupons" :key="key">
      <td>{{ item.title }}</td>
      <td>{{ item.percent }}%</td>
      <td>{{ $filters.date(item.due_date) }}</td>
      <td>
        <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
        <span v-else class="text-muted">未起用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm"
          @click="openCouponModal(false, item)"
          >編輯</button>
          <button class="btn btn-outline-danger btn-sm"
          @click="openDelCouponModal(item)"
          >刪除</button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
  <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon"></couponModal>
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: false,
      isLoading: false
    }
  },

  components: {
    CouponModal,
    DelModal
  },

  props: {
    config: Object
  },

  methods: {
    getCoupons () {
      // 每次取資料前就會執行 Loading 打開
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(api, this.tempProduct)
        .then((res) => {
          this.coupons = res.data.coupons

          // 讀取資料完就會執行 Loading 關閉
          this.isLoading = false
          console.log(res)
        })
    },

    // ======== Modal ========

    // isNew:新增項目 item:編輯項目
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },

    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon })
          .then((res) => {
            console.log(res, tempCoupon)
            this.$httpMessageState(res, '新增優惠券')
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon })
          .then((res) => {
            console.log(res)
            this.$httpMessageState(res, '新增優惠券')
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          })
      }
    },

    // ======== 刪除 Modal ========
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },

    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url)
        .then((res) => {
          console.log(res, this.tempCoupon)
          this.$httpMessageState(res, '刪除優惠券')
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getCoupons()
        })
    }
  },

  created () {
    this.getCoupons()
  }
}
</script>
