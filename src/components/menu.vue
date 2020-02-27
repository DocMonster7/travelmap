<template> 
<div class="left">
        <table>
        <thead>
          <tr>
              <th>Bus Name</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses.KA19MJ7646.bus_name}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <th>Bus Number</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses.KA19MJ7646.bus_number}}</td>
          </tr>
          <tr>
              <th>Driver Name</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses.KA19MJ7646.driver_details.name}}</td>
          </tr>
          <tr>
              <th>Driver Number</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses.KA19MJ7646.driver_details.number}}</td>
          </tr>
          <tr>
              <th>Conductor Name</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses.KA19MJ7646.conductor_details.name}}</td>
          </tr>
          <tr>
              <th>Conductor Number</th>
              <td>{{fire.ZH9lzDYt3iOKwXrFg5PsEd7bH043.buses.KA19MJ7646.conductor_details.number}}</td>
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
