<template>
<div class="container">
   <center>Please refresh the page if the login is not displaying
  <div id="firebaseui-auth-container"></div></center>
</div>
    
</template>

<script>
import firebase from '../firebaseconfig'
//  import firebase from 'firebase'
//  firebase.auth().currentUser
// // var firebaseui = require('firebaseui');
import * as firebaseui from 'firebaseui'
var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [{
          // Leave the lines as is for the providers you want to offer your users.
          // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          // firebase.auth.GithubAuthProvider.PROVIDER_ID,
         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID},{
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'IN'
          // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        }],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>');
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

export default {
    
}
</script>