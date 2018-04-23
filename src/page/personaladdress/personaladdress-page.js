export default {
  name: 'Personaladdress',
  data(){
    return {
      man:true,
      woman:false,
      secrecy:false
    }
  },
  methods:{
    showMan(){
      this.man = true;
      this.woman = false;
      this.secrecy = false;
    },
    showWoman(){
      this.man = false;
      this.woman = true;
      this.secrecy = false;
    },
    showSecrecy(){
      this.man = false;
      this.woman = false;
      this.secrecy = true;
    },
    yes(){
      alert("修改完成！");
      this.$router.replace('Personal');
    }
  }
}
