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
background: rgb(7,15,255); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(7,15,255,1) 0%, rgba(40,47,255,1) 8%, rgba(81,87,255,1) 17%, rgba(117,124,255,1) 27%, rgba(168,174,255,1) 39%, rgba(201,205,255,1) 47%, rgba(168,174,255,1) 56%, rgba(117,124,255,1) 68%, rgba(81,87,255,1) 79%, rgba(40,47,255,1) 90%, rgba(7,15,255,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(7,15,255,1) 0%,rgba(40,47,255,1) 8%,rgba(81,87,255,1) 17%,rgba(117,124,255,1) 27%,rgba(168,174,255,1) 39%,rgba(201,205,255,1) 47%,rgba(168,174,255,1) 56%,rgba(117,124,255,1) 68%,rgba(81,87,255,1) 79%,rgba(40,47,255,1) 90%,rgba(7,15,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(7,15,255,1) 0%,rgba(40,47,255,1) 8%,rgba(81,87,255,1) 17%,rgba(117,124,255,1) 27%,rgba(168,174,255,1) 39%,rgba(201,205,255,1) 47%,rgba(168,174,255,1) 56%,rgba(117,124,255,1) 68%,rgba(81,87,255,1) 79%,rgba(40,47,255,1) 90%,rgba(7,15,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#070fff', endColorstr='#070fff',GradientType=0 ); /* IE6-9 */

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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
