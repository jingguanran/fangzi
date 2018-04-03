<template>
    <div>
        <h1></h1>
        <p></p>
        <div v-for="i in arr">
            <!-- <img :src="i.img" alt=""> -->
            <!-- <strong>{{i.name}}</strong> -->
            <!-- <p>{{i.adress}}</p> -->
            <!-- <p>{{i.layout}}</p> -->
            <!-- <p>{{i.price}}</p> -->
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

</style>

