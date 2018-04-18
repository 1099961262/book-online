<template>
 <div class="classify infoBox">
     <p><span>分类</span></p>
     <div class="search-main">
         <div class="search-ipt">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="请输入你想查找的图书名称进行搜索" v-model="searchInfo" @keydown.enter="search">
         </div>
         <ul class="book-list">
             <li v-for="singleBook in filterBook" :key="singleBook.id">
                 <img :src="singleBook.cover" alt="" >
                 <div class="bookDes">
                     <p class="bookName">{{singleBook.name}}</p>
                     <p class="author">{{singleBook.author}}</p>
                     <p class="price">￥{{singleBook.price}}</p>
                 </div>
                 <i class="fa fa-chevron-right "></i>
             </li>
         </ul>
     </div>
 </div>
</template>

<script src="./classify-page.js"></script>

<style lang='scss' scoped>
    @import './classify-page.scss';
</style>
