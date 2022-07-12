<template>
  <div class="webNav">
    <router-link class="logo" to="/">Surfer Man</router-link>
    <nav class="cruiseNav">
      <ul>
        <li><router-link to="/"><span>回首頁</span>我們就是衝浪客</router-link></li>
        <li><router-link to="/boardAbout"><span>關於我們</span>衝浪客的浪漫</router-link></li>
        <li><router-link to="/boardProducts"><span>衝浪板店鋪</span>衝浪客的神奇武器</router-link></li>
      </ul>
      <div class="car"><router-link to="/boardCar"><span>購物車</span>我的購物記錄</router-link></div>
    </nav>
  </div>
</template>
