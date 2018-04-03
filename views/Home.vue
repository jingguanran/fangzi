<template>
  <div class="home">
    <Lunbo></Lunbo>
    <div class="con">
      <div class="left">
          <Loupan></Loupan>
          <One></One>
          <Two></Two>
          <Three></Three>
      </div>
        
        <Xinwen class="right"></Xinwen>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import Lunbo from '@/components/Lunbo.vue'
import Loupan from '@/components/Loupan.vue'
import Xinwen from '@/components/Xinwen.vue'
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
import Three from '@/components/Three.vue'
export default {
  name: 'home',
  components: {
    Lunbo,
    Loupan,
    Xinwen,
    One,
    Two,
    Three
  }
}
</script>
<style>
.con{
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 40px;
}
  .left{
    width: 70%;
    /* height: 500px; */
    /* background: #666; */
    float: left;
  }
  .right{
    width: 30%;
    height: 500px;
    background: #ccc;
    float: left;
  }
</style>

