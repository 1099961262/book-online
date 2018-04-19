export default{
  name: 'Login',
  data(){
    return {
      displayLogin:true
    }
  },
  methods:{
    //点击切换到登录
    showLogin(){
      this.displayLogin = true;
    },
    //点击切换到注册
    showRegister(){
      this.displayLogin = false;
    }
  }
}
