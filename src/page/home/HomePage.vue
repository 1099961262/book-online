<template>
  <div class="home-page infoBox">
    
      <p>
        <span>首页</span>
      </p>
    
    <!-- 轮播图  -->
    <div class="header-top">
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
    </div>
    <!-- 新闻 -->
    <div class="news">
      <i class="fa fa-bell"></i>
      <span>双12全场图书打1折,更有隐藏的神秘惊喜</span>
    </div>
    <!-- 内容 -->
    <div>
      <HomeRecom title="编辑推荐" :book-info="editBook" 
      @showDetailPanel = 'showDetailPanel'
      />
      <HomeRecom title="热门推荐" :book-info="hotBook"
      @showDetailPanel = 'showDetailPanel'
      />
      <HomeRecom title="新书推荐" :book-info="newBook"
      @showDetailPanel = 'showDetailPanel'
      />
    </div>
    </div>
  <!-- 详情面板 -->
    <div v-show="detailPanel_show" class="detailpanelshow">
      <div @click="detailPanel_show = false" class="detailpanelshowX">&times;</div>
      <div class="detailpanelshow-top">
           <div>  
             <img :src="bookDetail.cover"> 
           </div> 
           <div class="detailpanelshow-top-right">  
             <div><span>作者</span><p>{{bookDetail.author}}</p></div>     
             <div><span>页数</span><p>730</p></div>             
             <div><span>书号</span><p>MTS9527</p></div>             
             <div><span>出版日期</span><p>1988年10月28日</p></div>
             <router-link tag='div' :to="{name:BookDetail}">详情</router-link>             
           </div>        
      </div>
        <div class="detailpanelshow-main">
              <p>{{bookDetail.name}}</p>
              <div>{{bookDetail.describe}}</div>           
        </div>
        <div class="detailpanelshow-footer">

        </div>
   
    </div>

  </div>
</template>

<script src="./home-page.js"></script>


<style lang='scss'>
  @import './home-page.scss';
</style>