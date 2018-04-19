<<<<<<< HEAD

=======
>>>>>>> dev
// import Login from "./Login"
// import personaldata from './PerData'
// import addressmanage from './Address'

export default {
  name: 'Personal',
  components:{
    // Login,
    // personaldata,
<<<<<<< HEAD
    // addressmanage
=======
    // addressmanage,
>>>>>>> dev
  },
  data () {
    return {
      userName:"",
      loginState:false
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
    name(){
      this.userName = JSON.parse(sessionStorage.getItem("loginState"));
    }
  }
}
