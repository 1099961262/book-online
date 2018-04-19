export default{
    name: 'Shopcart',
    data(){
        let readyBuy = this.$route.params;
        return {
            isEdit: false,
            buyBook: [],
            readyBook: {
                name: readyBuy.name,
                cover: readyBuy.cover,
                author: readyBuy.author,
                price: readyBuy.price,
                num: 1
            }
        }
    },
    created(){
        if(this.readyBook.name !== undefined){
            let books;
            if(localStorage["bookList"]){
                books = JSON.parse(localStorage["bookList"])
            }else{
                books = [],
                localStorage.setItem("bookList", JSON.stringify(books));
            }
            books.push(this.readyBook);            
            localStorage["bookList"] = JSON.stringify(books);
        }
        this.buyBook = JSON.parse(localStorage["bookList"])
    },
    methods: {
        edit(){
            this.isEdit = !this.isEdit
        },
    }
}