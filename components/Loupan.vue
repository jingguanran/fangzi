<template>
    <div>
        <div class="big">
            <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8zNTMyOGMwMzgzNDcxMjYzYjFjMzYzNThjYjVjOTc3OC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
            <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xZWM4Yzg2ODQ5MjVkMDVhODc4MDg4M2JhYzQxOThmOC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
            <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8yMmEyZTgzODY3ZDk2MzU3ZDA2YWU1N2VmYjE1NzNiZC00NzR4MTYxLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
            <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xODUxNThhNTMyNzA3OTcwMDM0ZjUwZDFkZjAyMGQxZi02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
        
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
    .big{
        width: 100%;
        overflow: hidden;
    }
    
    .big img{
        width: 49%;
        float: left;
        margin-bottom: 18px;
    }    
    .big img:nth-child(2){
        float: right;
    }
    .big img:nth-child(4){
        float: right;
        margin-bottom: 0;
    }
     .big img:nth-child(3){
        margin-bottom: 0;
    }
</style>

