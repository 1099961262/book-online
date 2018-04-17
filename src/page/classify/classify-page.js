export default{
    name: 'Classify',
    data(){
        return {
            bookList: [],
            searchInfo: '',
            filterBook: []
        }
    },
    created(){
        axios.get('/static/api/book-info.json').then((res) => {
            this.bookList = res.data;
            this.filterBook = this.bookList
        });
    },
    methods: {
        search(){
            this.filterBook = this.bookList.filter((ele) => {
                 return new RegExp(this.searchInfo, 'ig').test(ele.name) || new RegExp(this.searchInfo, 'ig').test(ele.author)   
            });
        }
    }
}