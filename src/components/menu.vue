<template> 
<div class="left">
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
             <th>Number of vehicle</th>
            <td>{{fire.Customer1.Vehicles}}</td> 
          </tr>
           <tr>
              <th>Vehicle Register Number</th>
              <td>{{fire.Customer1.Vehicle_Number}}</td>   
          </tr>
          <tr>
              <th>Driver</th>
              <td>{{fire.Customer1.Driver}}</td>   
          </tr>
        </tbody>
      </table>         
    </div> 
</template>

<script>
import firebase from '../firebaseconfig.js'

var ex;
firebase.database().ref('/clients').on('value',snap=>{ex=snap.val()})
export default {
data() {
    return {
        fire: ex
    }
},    
}
</script>
