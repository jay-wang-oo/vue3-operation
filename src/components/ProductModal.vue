<template>
  <!-- Modal -->
  <!-- 透過 ref方式來存取DOM元素 -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal"
  >

    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">

        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- modal-body -->
        <div class="modal-body">

          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結"
                v-model="tempProduct.imageUrl"
                >
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <!-- change:input有輸入內容就會觸發 -->
                <input type="file" id="customFile" class="form-control"
                ref="fileInput"
                @change="uploadFile"
                >
              </div>
              <img class="img-fluid" alt="">
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5"
              v-if="tempProduct.images"
              >
                <div class="mb-3 input-group"
                v-for="(image, key) in tempProduct.images" :key="key"
                >
                  <input type="url" class="form-control form-control" placeholder="請輸入連結"
                  v-model="tempProduct.images[key]"
                  >
                  <button type="button" class="btn btn-outline-danger"
                  @click="tempProduct.images.splice(key, 1)"
                  >
                    移除
                  </button>
                </div>
                <div v-if="tempProduct.images[tempProduct.images.length - 1] || !tempProduct.images.length">
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="tempProduct.images.push('')"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" placeholder="請輸入標題"
                v-model="tempProduct.title"
                >
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                  v-model="tempProduct.category"
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input type="text" class="form-control" id="unit" placeholder="請輸入單位"
                  v-model="tempProduct.unit"
                  >
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                  v-model.number="tempProduct.origin_price"
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                  v-model.number="tempProduct.price"
                  >
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">產品內容</label>
                <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                v-model="tempProduct.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="is_enabled"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                    >
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- modal-body -->

        <!-- modal-footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <!-- emit觸發外層事件 update-product名稱，觸發 updateProduct外層函式，會把 tempProduct(內層)的資料內容透過參數方式傳到 item(外層)裡面 -->
          <button type="button" class="btn btn-primary"
          @click="$emit('update-product', tempProduct)"
          >確認</button>
        </div>
        <!-- modal-footer -->

      </div>
    </div>

  </div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal.js'
import modalMixin from '@/mixins/modalMixin'

export default {
  // ======== 內層 ========
  props: {
    // 內層 product名稱來接收資料
    product: {
      type: Object,
      // 外層沒有正確傳遞就回傳一個空物件
      default () { return {} }
    }
  },
  // 因傳送的資料不同所以需要監聽 product內容有沒有更動
  // 每次開啟 Modal，都會重新去更新 product內容
  // 當資料往內層送就會觸發 watch > product，把資料寫到 tempProduct(因為單向數據流，不可以直接修改外層資料，所以會內層定義一個 tempProduct資料儲存)
  watch: {
    product () {
      this.tempProduct = this.product
      // 多圖範例
      if (!this.tempProduct.images) {
        this.tempProduct.images = []
      }
    }
  },
  // 實體的內容回傳出來
  data () {
    return {
      modal: {},
      tempProduct: {}
    }
  },
  methods: {
    // showModal () {
    //   this.modal.show()
    // },
    // hideModal () {
    //   this.modal.hide()
    // },

    // ======== 上傳圖片 ========
    uploadFile () {
      // uploadedFile:上傳的檔案取出來
      const uploadedFile = this.$refs.fileInput.files[0]
      // console.log(uploadedFile)
      // 轉換格式(form-data)
      const formData = new FormData()
      // input name >> file-to-upload(API上傳對應的欄位-name屬性)
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(url, formData)
        .then((response) => {
          console.log(response.data)
          if (response.data.success) {
            this.tempProduct.imageUrl = response.data.imageUrl
          }
        })
    }

  },

  // 元件(Modal)在實體載入的過程之後呈現
  // mounted () {
  //   // this.modal 為 data內的 modal: {} === 會指向外層的modal(ref="modal")
  //   this.modal = new Modal(this.$refs.modal)
  // }

  mixins: [modalMixin]
}
</script>
