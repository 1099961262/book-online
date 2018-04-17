<template>
 <div class="shopcart">
     <p>购物车</p>
     <div class="shopDes">
         <button type="button" v-if="!isEdit" @click="edit">编辑</button>
         <button type="button" v-if="isEdit" @click="edit">取消</button>
         <button type="button" v-if="isEdit" class="del">删除选中</button>
         <ul class="buyBooks" >
             <li v-for="buy in buyBook" :key="buy.id">
                 <img :src="buy.cover" alt="">
                 <div class="bookDes">
                     <p class="bookName">{{buy.name}}</p>
                     <p class="author">{{buy.author}}</p>
                     <p class="price">￥{{buy.price}}</p>
                 </div>
                 <ul class="changeNum">
                     <li>-</li>
                     <li>2</li>
                     <li>+</li>
                 </ul>
             </li>
         </ul>
         <button type="button" class="goPay">前往支付</button>
     </div>
 </div>
</template>

<script src="./shopcart-page.js"></script>

<style lang='scss' scoped>
    @import './shopcart-page.scss';
</style>
