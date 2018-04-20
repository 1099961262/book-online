<template>
  <div class="personaldata">
    <header>
      <h3>收货地址</h3>
      <router-link tag="div" :to="{name: 'Personal' }" class="go-home"></router-link>
    </header>
    <main>
      <div>
        <div class="login-info">
          <div>
            <label>姓名</label>
            <input type="text" placeholder="请输入您的姓名">
          </div>
          <div>
            <label>联系电话</label>
            <input type="text" placeholder="请输入您的联系电话">
          </div>
          <div>
            <label>邮政编码</label>
            <input type="text" placeholder="请输入您所在地区的邮政编码">
          </div>
          <div>
            <select>
              <option value="0">四川省</option>
              <option value="1">广东省</option>
              <option value="2">广西省</option>
              <option value="3">浙江省</option>
              <option value="4">福建省</option>
              <option value="0">湖南省</option>
              <option value="1">湖北省</option>
              <option value="2">河南省</option>
              <option value="3">河北省</option>
              <option value="4">...</option>
            </select>
            <select>
              <option value="0">成都市</option>
              <option value="1">绵阳市</option>
              <option value="2">攀枝花市</option>
              <option value="3">泸州市</option>
              <option value="4">广元市</option>
              <option value="0">达州市</option>
              <option value="4">...</option>
            </select>
            <select>
              <option value="0">武侯区</option>
              <option value="1">金牛区</option>
              <option value="2">高新区</option>
              <option value="3">锦江区</option>
              <option value="4">青羊区</option>
              <option value="0">双流区</option>
              <option value="4">...</option>
            </select>
          </div>
          <div>
            <label>详细地址</label>
            <input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
          </div>
          <button type="button" @click="yes">确认地址</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="./personaldata-page.js"></script>

<style lang='scss' scoped>
  @import './personaldata-page.scss';
</style>
