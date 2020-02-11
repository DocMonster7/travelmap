<template>
  <div id="app">
    <navi/>
    <div class="container">
    <router-view/>
    </div>
    
   </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import test from './components/test.vue'

import navi from './components/nav.vue'
import '../node_modules/materialize-css/dist/css/materialize.min.css' 
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'app',
  components: {
    navi
    //HelloWorld,
    //test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.container{
margin-top: 5%;
}
@media only screen and (max-width: 600px){
.container{
  margin-top: 20%
}
}
</style>
