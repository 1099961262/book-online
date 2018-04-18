export default {
    name: 'BookDetail',
    data(){
        let totalBook = this.$route.params;
        // console.log(this.totalInfo)
        return {
            totalInfo: totalBook
        }
    },

}