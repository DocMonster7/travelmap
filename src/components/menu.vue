<template> 
<div class="left">
  <br>
  {{buses[0]}}
       <table>
        <thead>
          <tr>
              <th>Bus Name</th>
              <td>{{fire[0].buses.KA19MJ7646.bus_name}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <th>Bus Number</th>
              <td>{{fire[0].buses.KA19MJ7646.bus_number}}</td>
          </tr>
          <tr>
              <th>Driver Name</th>
              <td>{{fire[0].buses.KA19MJ7646.driver_details.name}}</td>
          </tr>
          <tr>
              <th>Driver Number</th>
              <td>{{fire[0].buses.KA19MJ7646.driver_details.number}}</td>
          </tr>
          <tr>
              <th>Conductor Name</th>
              <td>{{fire[0].buses.KA19MJ7646.conductor_deatils.name}}</td>
          </tr>
          <tr>
              <th>Conductor Number</th>
              <td>{{fire[0].buses.KA19MJ7646.conductor_deatils.number}}</td>
          </tr>
        </tbody>
      </table>         
    </div> 
</template>

<script>
import firebase from '../firebaseconfig.js'
// import firebase from 'firebase'
export default {
data() {
   return {
        fire: [],
        buses:[],
        uid:"",
        bus_number:[]

    }
},created(){
firebase.auth().onAuthStateChanged(user=>{
  if(user){
  this.uid=user.uid
  // console.log(this.uid)
  this.fetchdeatils()
  }
})



}  ,
methods:{
  fetchdeatils(){
firebase.database().ref('/clients/'+this.uid).on('value',snap=>{
  
  this.fire.push(snap.val())
  this.buses.push(snap.val().buses)
  this.bus_number.push(Object.keys(this.buses[0]))
  console.log(Object.keys(this.fire[0]))

  })
  }
}  
}
</script>
