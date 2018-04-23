<template>
  <div class="personaladdress">
    <header>
      <h3>个人资料修改</h3>
      <router-link tag="div" :to="{name: 'Personal' }" class="go-home"></router-link>
    </header>
    <main>
      <div>
        <div class="login-info">
          <div>
            <label>昵称</label>
            <input type="text" placeholder="我不能吃芒果，但是我好想吃！">
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" placeholder="请填写您的安全邮箱">
          </div>
          <div class="sex">
            <label>性别</label>
            <span>
              <span class="1" @click="showMan()" :class="{active:man === true}">男</span>
              <span class="2" @click="showWoman()" :class="{active:woman}">女</span>
              <span class="3" @click="showSecrecy()" :class="{active:secrecy}">保密</span>
            </span>
          </div>
          <div>
            <label>生日</label>
            <input type="date">
          </div>
          <div>
            <label>身份证号</label>
            <input type="text" placeholder="请输入您的18位身份证号">
          </div>
          <div>
            <label>个人描述</label>
            <input type="text" placeholder="谈谈您对自己的认识">
          </div>
          <button type="button" @click="yes">确认修改</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="./personaladdress-page.js"></script>

<style lang='scss'>
  @import './personaladdress-page.scss';
</style>
