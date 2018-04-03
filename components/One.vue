<template>
  <div class="shouyeloupan">
      <h2>全新楼盘</h2>
      <h5>-New Apartment-</h5> 
      <div v-for="i in arr" class="new">
            <img :src="i.img" alt="">
            <h4>{{i.name}}</h4>
            <p><span>地区：</span>{{i.adress}}</p>
            <p><span>户型：</span>{{i.layout}}</p>
            <p><span>价格：</span>{{i.price}}</p>
      </div>
      <div class="btn">
            <button>浏览更多新楼盘</button>
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
    .shouyeloupan{
        width: 100%;
        background: #F7F7F7;
        overflow: hidden;
        border: 1px solid #ccc;
        margin-top: 50px;
    }
    .shouyeloupan h2{
        margin-top: 30px;
    }
    .shouyeloupan h5{
        margin-top: 5px;
        margin-bottom: 15px;
    }
    .new{
        width: 32%;
        float: left;
        background: #fff;
        /* margin-right: .9%; */
        text-align: left;
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
    button{
        width: 100px;
        height: 30px;
        outline: none;
        border: 1px solid #3A79E8;
        background: #fff;
    }
    .btn{
        width: 100%;
        float: left;
        margin: 15px 0;
    }
</style>
