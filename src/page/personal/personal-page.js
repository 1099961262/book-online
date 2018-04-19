// import Login from "./Login"
// import personaldata from './PerData'
// import addressmanage from './Address'

export default {
  name: 'Personal',
  components:{
    // Login,
    // personaldata,
    // addressmanage,
  },
  data () {
    return {
      userName:""
    }
  },
  methods:{
    //判断用户是否登录
    getUserName(){
      if(localStorage.getItem('userName')){
        this.userName = localStorage.getItem('userName')
      }else{
        this.userName = "请登录"
      }
    }
  },
  mounted(){
    this.getUserName();
  }
}
