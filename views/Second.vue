<template>
    <div>
        <div class="con">
            <Hello></Hello>
            <!-- <News></News> -->
        </div>
    </div>
</template>
<script>
import Hello from '@/components/Hello.vue'
export default {
  name: 'home',
  components: {
   Hello
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
