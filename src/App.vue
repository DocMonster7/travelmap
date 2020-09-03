<template>
  <div id="app">
    <navi/>
    <div class="container">
    <router-view/>
    </div>
    
   </div>
</template>

<script>

import navi from './components/nav.vue'
import '../node_modules/materialize-css/dist/css/materialize.min.css' 
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'app',
  components: {
    navi
    
  }
}
</script>
<style>
body{
  /* background: linear-gradient(180deg, #929dddfc 50%, transparent); */
background: #0237d8; /* Old browsers */
background: -moz-linear-gradient(top,  #0237d8 0%, #eaedef 63%, #fbf9fc 76%, #eaedef 84%, #eaedef 84%, #eaedef 87%, #8dafbf 93%, #0237d8 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #0237d8 0%,#eaedef 63%,#fbf9fc 76%,#eaedef 84%,#eaedef 84%,#eaedef 87%,#8dafbf 93%,#0237d8 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #0237d8 0%,#eaedef 63%,#fbf9fc 76%,#eaedef 84%,#eaedef 84%,#eaedef 87%,#8dafbf 93%,#0237d8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0237d8', endColorstr='#0237d8',GradientType=0 ); /* IE6-9 */

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
