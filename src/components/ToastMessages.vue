<template>
  <!-- 1. 定位使用 -->
  <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index:999">
    <!-- 2. 列表呈現 -->
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'

export default {
  components: {
    Toast
  },

  data () {
    return {
      messages: []
    }
  },

  // 使用 inject就不用一直載入套件(No import 套件)
  inject: ['emitter'],

  mounted () {
    // push-message事件到 emitter上面，push-message每次觸發就會把訊息加到 this.messages(訊息列表)
    // (message) 外部傳來的資訊 > message > 推送(push)到 this.messages(訊息列表)
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }

}
// 發送部分：自定義事件名稱('')，後面是傳送參數
// emitter.emit('sendProduct', this.product)

// 啟用一個監聽概念，監聽名稱與發送自定義名稱相同。
// 觸發時會有個事件，事件參數 data
// 監聽被觸發後 this.product >(傳遞) data，data >(儲存) this.item
// emitter.on('sendProduct', (data) => {
//   console.log('sendProduct', data);
//   this.item = data;
// })

</script>
