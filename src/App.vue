<template>
  <div id="app">
    <div>
      <router-view/>
    </div>

    <footer>
      <ul>
          <router-link tag="li" :to="{name: 'HomePage'}"><i class="fa fa-home"></i><span>首页</span> </router-link>
          <router-link tag="li" :to="{name: 'Classify'}"><i class="fa fa-table"></i><span>分类</span></router-link>
          <router-link tag="li" :to="{name: 'Shopcart'}"><i class="fa fa-shopping-cart"></i><span>购物车</span></router-link>
          <router-link tag="li" :to="{name: 'Personal'}"><i class="fa fa-user"></i><span>个人</span></router-link>
      </ul>
    </footer>

  </div>

</template>

<script>
import 'fontIcon'
export default {
  name: 'App'
}
</script>


<style lang="scss">
  * { margin: 0; padding: 0;box-sizing: border-box}
  html, body { width: 100%; height: 100%; }

  a   { text-decoration: none; }
  ul  { list-style: none; }
  img { vertical-align: middle; }
  input, button { outline: none; }

  .fl { float: left;}
  .fr { float: right;}
  .clearFix { zoom: 1; }
  .clearFix:after { content: ''; display: block; height: 0; visibility: hidden; clear: both; }

  .flex-center { display: flex; display: -webkit-flex; justify-content: center; align-items: center; flex-wrap: wrap; }
  #app{
    position: relative;
    width: 100%;
    height: 100%;
  }
  footer{
    
    height: 55px;
    border-top: 1px solid gray;
    
  }
  footer > ul{
    display: flex;
    width: 100%;
    height: 55px;
    background: white;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
  }
  li{
    width: 25%;
    height: 55px;
    text-align: center;
    padding-top: 3px
  }
  .fa{
    font-size: 31px;
    color: gray
  }
  span{
    display: block
  }
  .router-link-exact-active i, .router-link-exact-active span{
      color: green
  }
  #app > div{
    height: calc(100% - 55px);
    overflow-y: scroll;
    .infoBox{
      >p{
          height: 50px;
          width: 100%;  
          >span{
            width: 100%;
            height: 50px;
            display: inline-block;
            background: black;
            color: white;
            text-align: center;
            line-height: 50px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
          }
      }
    }
  }
</style>
