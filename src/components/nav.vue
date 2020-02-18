<template>
<div>
    <Slide>    
        <!-- {{uid}}
        {{jitsi_server}}
        {{temp}} -->
      <router-link to="/">Home</router-link>
        <router-link to="">About us</router-link>
        <router-link v-if="!state" to="/login">Login</router-link>
        <!-- <router-link v-if="live" v-on:click="livefeed">Live Feed</router-link> -->
        <!-- <router-link to="" v-on:click="logout">logout</router-link> -->
    <a v-if="live" v-on:click="livefeed">live feed</a>
    <button v-if="state" v-on:click="logout">logout</button>
    
    </Slide>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

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
      this.live=true
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
     .bm-overlay {
      background: rgba(255,255,255);
    }
    
</style>