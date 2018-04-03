
<template>
  <div class="second_left">
     
      <h2><i></i>全新商铺/ NEW SHOPS</h2>
      <div v-for="i in arr" class="new">
            <img :src="i.img" alt="">
            <h4>{{i.name}}</h4>
            <p><span>地区：</span>{{i.adress}}</p>
            <p><span>户型：</span>{{i.layout}}</p>
            <p><span>价格：</span>{{i.price}}</p>
      </div>
      
     
    
     
      <div v-for="i in arr" class="new">
            <img :src="i.img" alt="">
            <h4>{{i.name}}</h4>
            <p><span>地区：</span>{{i.adress}}</p>
            <p><span>户型：</span>{{i.layout}}</p>
            <p><span>价格：</span>{{i.price}}</p>
      </div>
     
     
    
     
      <div v-for="i in arr" class="new">
            <img :src="i.img" alt="">
            <h4>{{i.name}}</h4>
            <p><span>地区：</span>{{i.adress}}</p>
            <p><span>户型：</span>{{i.layout}}</p>
            <p><span>价格：</span>{{i.price}}</p>
      </div>
     
    
  </div>
</template>
<script>
export default{
     data(){
       return {
          arr:[]
       }
     },
     created(){
        this.$http.get('http://localhost:3000/').then(e=>this.arr=e.body)
     }
   }
</script>

<style>
    .second_left{
        width: 70%;
        float: left;
    }
    .second_left h2{
        width: 100%;
        text-align: left;
        height: 50px;
        font-size: 13px;
        line-height:50px;
    }
    .second_left h2 i{
        display: inline-block;
        width: 5px;
        height:5px;
        background: #000;
    }
    .new{
        width: 32%;
        float: left;
        background: #fff;
        /* margin-right: .9%; */
        text-align: left;
        margin-bottom: 30px;
    }
    .new img{
        width: 100%;
    }
    .new h4{
        padding-left: 20px;
        line-height: 30px;
        font-size: 14px;
    }
    .new p{
        padding-left: 20px;
        line-height: 20px;
    }
    
</style>
