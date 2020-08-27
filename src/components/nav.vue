<template>
<div>
    <Slide>    
    
        <router-link to="">About us</router-link>
        <router-link v-if="!state" to="/login">Login</router-link>
        <a v-if="live" v-on:click="livefeed">live feed</a>
        <button v-if="state" v-on:click="logout">logout</button>
    
    </Slide>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'  
// import the CSS transitions you wish to use, in this case we are using `Slide`

import firebase from '../firebaseconfig'

export default {
  data(){
    return{
    state:false,
    live:false,
    uid:"",
    jitsi_server:"",
    temp:""
  }
  },
  components: {
        Slide // Register your component
    },
    created(){
      firebase.auth().onAuthStateChanged(user=> {
  if (user) {
    // User is signed in.
    this.state=true
    this.live=true
    this.uid=user.uid
    // console.log(this.state)
  } else {
   this.state=false
   // No user is signed in.
  }
})
  

}
,updated(){
  if(this.state){
    // console.log(this.uid)
    firebase.database().ref("/clients/"+this.uid).on("value",snap=>{
      this.jitsi_server=snap.val().jitsi_server
  
    })   
  }
},
    methods: {
      logout(){
        // this.$modal.show("hello-world");
        firebase.auth().signOut().then(()=> {
  // Sign-out successful.
  alert("LogOut Successfull")
}).catch(function()
{
});
      },
       close(){
        this.$modal.hide("hello-world");
      },
      livefeed(){
        window.open(this.jitsi_server, "_blank");
      }
      }
    }
</script>
<style>
.line-style {
      position: absolute;
      height: 10%;
      left: 0;
      right: 0;
    }
    .bm-burger-bars {
      background-color: #ffffff;
    }
     .bm-overlay {
      background: #258dc8; /* Old browsers */
      background: -moz-linear-gradient(top,  #258dc8 23%, #258dc8 34%, #ffffff 67%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  #258dc8 23%,#258dc8 34%,#ffffff 67%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  #258dc8 23%,#258dc8 34%,#ffffff 67%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#258dc8', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

     }
    nav a{
      color:black !important;
     
    }
    nav{
      background-color: transparent!important;
      box-shadow: none !important;
    }
     .bm-menu{
       background-color: white;
     }
     .bm-item-list>*{
       padding: 0em;
     }
</style>