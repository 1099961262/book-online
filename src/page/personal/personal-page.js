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
      //个人资料显示状态
      displaydata:false,
      //地址管理显示状态
      displayaddress:false,
      userName:""
    }
  },
  methods:{
    //显示个人资料
    perdata(){
      this.displaydata = true;
    },
    //显示修改地址
    csreceipt(){
      this.displayaddress = true
    },
    //返回
    returnself(){
      this.displaydata = false
    },
    returnaddress(){
      this.displayaddress = false;
    },
    //确定修改成功
    colsePerData() {
      this.displaydata = false
    },
    colseAddress(){
      this.displaydata = false
    },
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
