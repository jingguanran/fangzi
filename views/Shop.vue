<template>
    <div>
        <div class="con">
            <Hellloo></Hellloo>
            <!-- <News></News> -->
        </div>
    </div>
</template>
<script>
import Hellloo from '@/components/Hellloo.vue'
export default {
  name: 'home',
  components: {
   Hellloo
  }
}
</script>
<style>
.con{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}
</style>
