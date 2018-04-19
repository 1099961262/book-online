export default{
  name: 'Login',
  data(){
    return {
      displayLogin:true,
      users: []
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
    },
    //点击登录
    login(){
      var usernumber_1 = document.querySelector(".number-1").value;
      var password_1 = document.querySelector(".password-1").value;
      if(!usernumber_1 || !password_1){
        alert("请输入您的手机号或密码!");
      }else {
        //初始化用户
        if(localStorage.getItem("book-users")) {
          this.users = JSON.parse(localStorage.getItem("book-users"));
        }else {
          this.users = [];
        }
        // 判断用户是否存在
        // 定义flag1存储返回信息
        var flag1 = null;
        for(let i = 0, len = this.users.length; i < len; i++) {
          if(this.users[i]["usernumber"] == usernumber_1 ) {
            flag1 = this.users[i];
            break;
          }
        }
        if(!flag1){
          alert("用户不存在!");
        }else {
          //判断账号密码是否正确
          if(usernumber_1 == flag1["usernumber"] && password_1 == flag1["password"]){
            // 临时存储登陆状态
            sessionStorage.setItem("loginState", usernumber_1);
            alert("登录成功!");
            this.$router.replace('Personal');
          }else {
            alert("账号或密码错误!");
          }
        }
      }
    },
    //点击注册
    register(){
      var usernumber_2 = document.querySelector(".number-2").value;
      var username_2 = document.querySelector(".number-2").value;
      var password_2 = document.querySelector(".password-2").value;
      var password_3 = document.querySelector(".password-3").value;
      if(!usernumber_2 || !password_2 || !password_3){
        alert("请输入您的手机号或密码!");
      }else {
        //初始化用户
        if(localStorage.getItem("book-users")) {
          this.users = JSON.parse(localStorage.getItem("book-users"));
        }else {
          this.users = [];
        }
        if (password_2 != password_3){
          alert("密码输入不一致！");
        }else {
          // 判断用户是否存在
          // 定义flag标记用是否存在，默认不存在
          var flag = false;
          for(let i = 0, len = this.users.length; i < len; i++) {
            if(this.users[i]["usernumber"] == usernumber_2 ) {
              flag = true;
              break;
            }
          }
          if(flag) {
            alert("用户已存在!");
          }else {
            var user = {
              "usernumber":usernumber_2,
              "username": username_2,
              "password": password_2
            };
            // 添加用户
            this.users.push(user);
            // 更新本地数据
            localStorage.setItem("book-users", JSON.stringify(this.users));
            // 临时存储登陆状态
            sessionStorage.setItem("loginState", usernumber_2);
            alert("注册成功!");
            this.$router.replace('Personal');
          }
        }
      }
    }


  }
}
