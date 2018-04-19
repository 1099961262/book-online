<template>
  <div class="login">
    <header>
      <h3>登录/注册</h3>
      <router-link tag="div" :to="{name: 'Personal' }" class="go-home"></router-link>
    </header>
    <main>
      <div>
        <div class="login-title">
          <div class="loginBtn" :class="{active:displayLogin}" @click="showLogin">登录</div>
          <div class="registerBtn" @click="showRegister" :class="{active: !displayLogin}">注册</div>
        </div>
        <div class="login-info" v-show="displayLogin">
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的手机号">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的密码">
          </div>
          <router-link tag="section" :to="{name: 'HomePage'}">
            <button type="button">登录</button>
          </router-link>
        </div>
        <div class="register-info" v-show="!displayLogin">
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的手机号">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的昵称">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的密码">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请确认您的密码">
          </div>
          <router-link tag="section" :to="{name: 'Personal'}">
            <button type="button">注册</button>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="./login-page.js"></script>

<style lang='scss'>
  @import './login-page.scss';
</style>
