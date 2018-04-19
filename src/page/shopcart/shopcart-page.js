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
                num: 1,
                totalPrice: readyBuy.price, 
                checked: false
            },
            delIndex: []
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
        up(index){
            let books = JSON.parse(localStorage["bookList"]);
            books[index].num++;
            let totalPrice = books[index].num * books[index].price;
            books[index].totalPrice = totalPrice.toFixed(2)
            localStorage["bookList"] = JSON.stringify(books);
            this.buyBook = JSON.parse(localStorage["bookList"])
        },
        down(index){
            let books = JSON.parse(localStorage["bookList"]);
            if(books[index].num>1){
                  books[index].num--;
            }
            let totalPrice = books[index].num * books[index].price;
            books[index].totalPrice = totalPrice.toFixed(2)
            localStorage["bookList"] = JSON.stringify(books);
            this.buyBook = JSON.parse(localStorage["bookList"])
        },
        select(index){
            this.buyBook[index].checked = !this.buyBook[index].checked;
            if(this.buyBook[index].checked){
                this.delIndex.push(index)
            }
        },
        del(){
            let delNum = 0;
                for(let i = 0; i < this.buyBook.length; i++) {
                    if(this.buyBook[i].checked) {
                        delNum++;
                       }
                }
                var index = 0;
                while(delNum) {
                    if(this.buyBook[index].checked) {
                        this.buyBook.splice(index,1);
                        delNum--;
                    }
                    else {
                        index++;
                    }
                }
                localStorage["bookList"] = JSON.stringify(this.buyBook);
            }
    }
}