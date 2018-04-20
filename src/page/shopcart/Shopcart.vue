<template>
 <div class="shopcart infoBox">
     <p><span>购物车</span></p>
     <div class="shopDes">
         <button type="button" v-if="!isEdit" @click="edit">编辑</button>
         <button type="button" v-if="isEdit" @click="edit">取消</button>
         <button type="button" v-if="isEdit" class="del" @click="del">删除选中</button>
         <ul class="buyBooks" >
             <li v-for="(buy, index) in buyBook" :key="buy.id" :class="{'editState': isEdit}">
                 <span v-if="isEdit" :class="{'checked': buy.checked}" @click="select(index)"><i class="fa fa-check" v-if="buy.checked"></i></span>
                 <img :src="buy.cover" alt="">
                 <div class="bookDes">
                     <p class="bookName">{{buy.name}}</p>
                     <p class="author">{{buy.author}}</p>
                     <p class="price">￥{{buy.totalPrice}}</p>
                 </div>
                 <ul class="changeNum" v-if="!isEdit">
                     <li @click="down(index)">-</li>
                     <li>{{buy.num}}</li>
                     <li @click="up(index)">+</li>
                 </ul>
             </li>
         </ul>
         <!-- <button type="button" class="goPay" >前往支付</button> -->
         <router-link tag="button" type='button' class="goPay" :to="{name: 'Pay', params: {total: this.cartTotal}}">前往支付</router-link>
     </div>
 </div>
</template>

<script src="./shopcart-page.js"></script>

<style lang='scss' scoped>
    @import './shopcart-page.scss';
</style>
