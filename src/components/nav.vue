<template>
<div>
    <Slide>    
        
      <router-link to="/">Home</router-link>
        <router-link to="">About us</router-link>
        <router-link v-if="!state" to="/login">Login</router-link>
        <!-- <router-link to="" v-on:click="logout">logout</router-link> -->
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
    state:false
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
    // console.log(this.state)
  } else {
   this.state=false
   // No user is signed in.
  }
});
    }
,
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