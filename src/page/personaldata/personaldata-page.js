export default {
  name: 'Personaldata',
  methods:{
    yes(){
      alert("修改完成！");
      this.$router.replace('Personal');
    }
  }
}
