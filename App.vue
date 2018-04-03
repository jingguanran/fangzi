<template>
  <div id="app">
    <div class="header">
      <div id="logo">
        <img src="../src/assets/logo.png" alt="">
      </div>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/new">全新楼盘</router-link>
        <router-link to="/second">二手楼盘</router-link>
        <router-link to="/shop">全新商铺</router-link>
        <router-link to="/dynamic">楼市动态</router-link>
        <router-link to="/our">联系我们</router-link>
      </div>
    
    </div>
     <div>
        <router-view/>
     </div>
    <div class="footer">
      <p>地产REALSTATE  © 2020 All Rights Reserved</p>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  width: 90%;
  height: 70px;
  margin: 0 auto;
  overflow: hidden;
}
#logo{
  float: left;
}
#nav {
  float: left;
  height: 70px;
  line-height: 70px;
  font-size: 15px;
  /* padding: 30px; */
   
}

#nav a {
  /* font-weight: bold; */
  display: inline-block;
  height: 70px;
  line-height: 70px;
  color: #2c3e50;
  margin-left: 50px;
  text-decoration: none;
  /* padding: 20px 0; */
 
}
#nav a:nth-child(1) {
  /* font-weight: bold; */
  color: #2c3e50;
  margin-left: 150px;
}
#nav a.router-link-exact-active {
  /* color: #42b983; */
  display: inline-block;
  /* padding: 20px 0; */
   border-bottom: 1px solid #ccc;
}
.footer{
  /* position: fixed; */
  /* bottom: 0; */
  /* left: 0; */
  text-align: center;
  width: 100%;
  height: 50px;
  background: #000;
  line-height: 50px;
  color: #fff;
/* margin-top: 100px; */
}
</style>
