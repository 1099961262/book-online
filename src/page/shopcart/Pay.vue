<template>
  <div class="pay infoBox">
      <p><router-link tag="i" class="fa fa-chevron-left" :to="{name: 'Shopcart'}"></router-link><span>结算中心</span></p>
      <div class="transInfoBox">
          <p class="payTitle">商品信息确认</p>
          <ul class="transInfo">
              <li>
                  <p class="boldTitle">价格信息</p>
                  <p class="clearFix"><span class="smallTitle">商品总价</span> <span class="fr">￥{{total}}</span></p>
                  <p class="clearFix"><span class="smallTitle">运送费</span>  <span class="fr">￥10</span></p>
                  <p class="clearFix boldTitle"><span>订单总计</span> <span class="fr totalMoney">￥{{includeAll}}</span></p>
              </li>
              <li>
                  <p><span class="boldTitle">收货信息</span></p>
                  <p class="clearFix"><span class="smallTitle">收货地址</span>  <span>12321</span></p>
                  <p class="clearFix"><span class="smallTitle">收货人</span>  <span>12</span></p>
                  <p class="clearFix"><span class="smallTitle">邮编</span>  <span>121213</span></p>
                  <p class="clearFix"><span class="smallTitle">电话</span>  <span>121213</span></p>
              </li>
              <li>修改地址<i class="fa fa-chevron-right fr"></i></li>
              <li>新增地址<i class="fa fa-chevron-right fr"></i></li>
          </ul>
          <p class="payTitle">选择支付方式</p>
          <ul class="payMode">
              <li><i class="iconFont weChat">&#xe661;</i><span>微信支付</span><i class="fa fa-chevron-right fr"></i></li>
              <li><i class="iconFont aliPay">&#xe665;</i><span>支付宝</span><i class="fa fa-chevron-right fr"></i></li>
              <li><i class="iconFont card">&#xe677;</i><span>银行</span><i class="fa fa-chevron-right fr"></i></li>
              <li><i class="iconFont credit">&#xe6c6;</i><span>信用卡</span><i class="fa fa-chevron-right fr"></i></li>
              <li><i class="iconFont visa">&#xe653;</i><span>VISA</span><i class="fa fa-chevron-right fr"></i></li> 
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Pay',
//   props: ['total'],
  data(){
    //   console.log(this.total)
    let money = this.$route.params.total;
    // console.log(money);
      return {
          total: money
      }
  },
  computed: {
      includeAll: function(){
          return parseFloat(this.total) + 10
      }
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 636282 */
  src: url('//at.alicdn.com/t/font_636282_r1gg2265480hehfr.eot');
  src: url('//at.alicdn.com/t/font_636282_r1gg2265480hehfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_636282_r1gg2265480hehfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_636282_r1gg2265480hehfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_636282_r1gg2265480hehfr.svg#iconfont') format('svg');
}
.iconFont{
    font: 22px "iconfont" ;
}
.pay{
    background: #eaeaea;
    .payTitle{
        font-size: 18px;
        font-weight: bold;
        color: gray;
        margin: 15px 0;
    }
    >p{
        >i{
            color: white;
            line-height: 50px;
            margin-left: 10px;
            position: fixed;
            z-index: 12;
        }
    }
    .transInfoBox{
        width: 96%;
        margin: 0px auto;
        .transInfo{
            width: 100%;
            background: white;
            
            li{
                width: 100%;
                height: auto;
                text-align: left;
                padding: 10px;
                border: 1px solid lightgray;
                i{
                    font-size: 14px;
                    line-height: 25px;
                }
                .boldTitle{
                    font-size: 18px;
                    font-weight: bold;
                    color: black;
                    .totalMoney{
                        color: red
                    }
                }
                .smallTitle{
                    font-size: 14px;
                    color: gray;
                    display: inline-block;
                    width: 85px;
                    span{
                        color: black;
                        // margin-left: 35px;
                    }
                }
                p{
                   span{
                       display: inline;
                   }     
                }
                p:not(:first-child){
                    margin-left: 10px;
                    margin-top: 10px;
                }
            }
        }
      
        
       
    }
    .payMode{
        li{
            width: 100%;
            border: 1px solid lightgray;
            text-align: left;
            background: white;
            .weChat{
                color: green
            }
            .aliPay{
                color: orangered
            }
            .card{
                color: lightblue
            }
            .credit{
                color: palevioletred
            }
            .visa{
                color: blue
            }
            // padding-left: 10px;
            i{
                padding: 0 10px;
                line-height: 55px;
               
            }
            .fa{
                 font-size: 14px
            }
            span{
                display: inline;
            }
        }
    }
}
</style>


