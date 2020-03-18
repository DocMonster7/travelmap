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
body{
  /* background: linear-gradient(180deg, #929dddfc 50%, transparent); */
  
background: #258dc8; /* Old browsers */
background: -moz-linear-gradient(top,  #258dc8 23%, #258dc8 28%, #ffffff 67%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #258dc8 23%,#258dc8 28%,#ffffff 67%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #258dc8 23%,#258dc8 28%,#ffffff 67%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#258dc8', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

}
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
