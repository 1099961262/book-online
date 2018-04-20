<template>
    
    <div class="bookDetail infoBox">
        <div class="bookDetailHeader">
            <div>
                <router-link tag="i" class="fa fa-chevron-left" :to="{name: 'HomePage'}"></router-link>
                <p><span>图书详情</span></p>
                <i class="fa fa-ellipsis-v"></i>
            </div>
        </div>
       <div class="bookDetailBody">
           <div class="bodyTop">
                <div class="bookBaseInfo">
                    <img :src="totalInfo.cover" alt="">
                    <ul class="baseInfo">
                        <li><span>作者</span>  {{totalInfo.author}}</li>
                        <li><span>页数</span>  {{totalInfo.page}}</li>
                        <li><span>书号</span>  {{totalInfo.bookNum}}</li>
                        <li><span>出版日期</span>  {{totalInfo.date}}</li>
                        <li><span>售价</span>  ￥{{totalInfo.price}}</li>
                    </ul>
                </div>
                <p class="bookName">{{totalInfo.name}}</p>
                <div class="buttonBox">
                    <!-- <button type="button" class="plusCart">加入购物车</button> -->
                    <router-link tag="button" type="button" class="plusCart" :to="{name: 'Shopcart', params: totalInfo}">加入购物车</router-link>
                    <!-- <button type="button" class="buyNow">立即购买</button> -->
                    <router-link tag="button" type="button" class="buyNow" :to="{name: 'Pay', params: {total: totalInfo.price}}">立即购买</router-link>
                </div>
           </div>
            <form class="bodyBottom">
                <fieldset>
                    <legend>内容概要</legend>
                    <p>{{totalInfo.info1}}</p>
                </fieldset>
                  <fieldset>
                    <legend>内容概要</legend>
                    <p>{{totalInfo.info2}}</p>
                </fieldset>
                  <fieldset>
                    <legend>作者简介</legend>
                    <p>{{totalInfo.authorInfo}}</p>
                </fieldset>
            </form>
       </div>
    </div>

</template>
<style lang="scss" scoped>
    @import "./book-detail.scss"
</style>

<script src = "./book-detail.js"></script>
