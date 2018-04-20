
export default {
  name: 'Personal',
  data () {
    return {
      userName:"",
      loginState:false,
      users:''
    }
  },
  created(){
    this.name();
  },
  methods:{
    quit(){
      //移除登录状态
      sessionStorage.removeItem("loginState");
      this.$router.replace('Login');
    },
    //获取用户名
    name(){
      if(localStorage.getItem("book-users")) {
        this.users = JSON.parse(localStorage.getItem("book-users"));
      }else {
        this.users = [];
      }
      var flag = null;
      var usernumber = JSON.parse(sessionStorage.getItem("loginState"))
      for(let i = 0, len = this.users.length; i < len; i++) {
        if(this.users[i]["usernumber"] == usernumber ) {
          flag = this.users[i];
          break;
        }
      }
      if(flag.username){
        this.userName = flag.username;
      }else {
        this.userName = flag.usernumber;
      }
    }
  }
}
