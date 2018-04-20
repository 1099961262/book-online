import 'swiper-css'
import Swiper from 'swiper'
import HomeRecom from '@/page/home/HomeRecom'


export default {
    name: 'HomePage',
    
    data() {
      return {
        editBook:[],
        hotBook: [],
        newBook: [],
        detailPanel_show:false,
        bookDetail:{

        }
      }
    },
    components: {
      HomeRecom
    },
    created() {
      function getEditBook() {
        return axios.get('/static/api/edit-book.json');
      }
      function getHotBook() {
        return axios.get('/static/api/hot-book.json');
      }
      function getNewBook() {
        return axios.get('/static/api/new-book.json');
      }
  
 
      axios.all([getEditBook(), getHotBook(),getNewBook()])
        .then(axios.spread((res1, res2, res3,res4) => {
          this.editBook = res1.data;
          this.hotBook = res2.data;
          this.newBook = res3.data;
        }));
    },
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    },
    methods:{
      showDetailPanel(book){
        this.detailPanel_show = true;
      
        this.bookDetail = {         
          name:book.name,
          author:book.author,
          price:book.price,
          cover:book.cover,
          info1:book.describe,
          info2:book.describe,
          authorInfo:'作者是你妈个胎神',
          page:'108000',
          bookNum:'MTS9527',
          date:'1988年'  
          
        }
      }
    }
    
}