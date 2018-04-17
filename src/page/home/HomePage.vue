<template>
 <div class="home-page">
   <header>
       <p>首页</p>
   </header>

   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner">
        <img src="/static/img/1.png">
      </div>
      <div class="swiper-slide banner">
        <img src="/static/img/2.png">
        </div>
      <div class="swiper-slide banner">
        <img src="/static/img/3.png">
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
 </div>
</template>

<script src="./home-page.js"></script>
    

<style lang='scss'>
    @import './home-page.scss';
</style>
