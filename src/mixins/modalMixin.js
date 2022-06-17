import Modal from 'bootstrap/js/dist/modal'

export default {
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  // 元件(Modal)在實體載入的過程之後呈現
  mounted () {
    // this.modal 為 data內的 modal: {} === 會指向外層的modal(ref="modal")
    this.modal = new Modal(this.$refs.modal)
  }
}
