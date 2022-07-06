<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">

      <!-- 當現在頁碼等於1不能按前一頁  -->
      <li class="page-item"
      :class="{'disabled':pages.current_page === 1}"
      >
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <!-- 用 v-for把頁面全部帶出來 -->
      <li class="page-item"
      v-for="page in pages.total_pages" :key="page"
      :class="{ 'active': page === pages.current_page }"
      >
        <!-- (page)把頁碼帶到下方 (page) -->
        <!-- @click.prevent="updatePage(page)補上頁碼 -->
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>

      <li class="page-item"
      :class="{'disabled':pages.current_page === pages.total_pages}"
      >
        <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>

    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      // emit-pages:切換頁面事件名稱（往外送），觸發外層事件 ProDucts > @emit-pages
      this.$emit('emit-pages', page)
    }
  }
}
</script>
