<template>
  <div class="home-page">
    <header>
      <p>首页</p>
    </header>
    <!-- 轮播图  -->
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
    <!-- 新闻 -->
    <div class="news">
      <i class="fa fa-bell"></i>
      <span>双12全场图书打1折,更有隐藏的神秘惊喜</span>
    </div>
    <!-- 内容 -->
    <div>
      <HomeRecom title="编辑推荐" :book-info="editBook"/>
      <HomeRecom title="热门推荐" :book-info="hotBook"/>
      <HomeRecom title="新书推荐" :book-info="newBook"/>
    </div>
  </div>
</template>

<script src="./home-page.js"></script>


<style lang='scss'>
  @import './home-page.scss';
</style>