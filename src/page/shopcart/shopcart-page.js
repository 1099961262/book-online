export default{
    name: 'Shopcart',
    data(){
        return {
            isEdit: false,
            buyBook: []
        }
    },
    created(){
        axios.get("/static/api/hot-book.json").then((res) => {
            console.log(res);
            this.buyBook = res.data
        })
    },
    methods: {
        edit(){
            this.isEdit = !this.isEdit
        }
    }
}