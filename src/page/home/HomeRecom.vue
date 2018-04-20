<template>
    <div class="books">
        <h5>{{ title }}</h5>
        <ul>
            <li @click="showDetailPanel(book)" class="books-li" v-for="book in bookInfo" :key="book.id">
                <img :src="book.cover">
                <p>{{book.name}}</p>
                <p>￥{{book.price}}</p>           
            </li>
        </ul>
   </div>
</template>
<style lang="scss" scoped>
    .books{
            margin-bottom: 20px;
            width: 100%;
            height: 100%;
            padding: 0 5px;
        h5{
            margin-bottom:15px;
          }
        & > ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        
        & > .books-li {
            width: 47%;
            height: 220px;
            font-size: 14px;
            margin-left: 18px;
            >img{
                width: 100%;
                height: 150px;
            }
            >p:nth-child(2){
                margin-top: 5px;
                margin-bottom: 6px;
                height: 25px;
                overflow: hidden;
                padding:5px;
            }
            >p:nth-child(3){
                color: orange;
                margin-left: 0;
            }
            
        }
        .books-li:nth-child(odd){
            margin-left: 0;
        }  
        } 
    }
</style>
<script>
        export default {
           name:'HomeRecom',
           data(){
               return{

               }
           },
           props:['title','bookInfo'],
           methods:{
               showDetailPanel(book){
                   this.$emit('showDetailPanel',book);
               }
           }
        }
</script>


