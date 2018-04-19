<template>
  <div class="login">
    <header>
      <h3>登录/注册</h3>
      <router-link tag="div" :to="{name: 'HomePage' }" class="go-home"></router-link>
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
            <input type="text" placeholder="请输入您的账号" class="number-1">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的密码" class="password-1">
          </div>
          <button type="button" @click="login">登录</button>
        </div>
        <div class="register-info" v-show="!displayLogin">
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的账号" class="number-2">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的昵称" class="name-2">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请输入您的密码" class="password-2">
          </div>
          <div>
            <label></label>
            <input type="text" placeholder="请确认您的密码" class="password-3">
          </div>
          <button type="button" @click="register">注册</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="./login-page.js"></script>

<style lang='scss'>
  @import './login-page.scss';
</style>
