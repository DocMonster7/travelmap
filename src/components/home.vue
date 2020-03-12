<template>
  <div class="container">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="height: 400px"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div v-if="!submit_entries" class="row">
      <form class="col s12">
          <div class="input-field col s12">
           <vue-autosuggest
        v-model="query"
        :suggestions="filteredOptions"
        @focus="focusMe"
        @click="clickHandler"
        @input="onInputChange"
        @selected="onSelected"
        :get-suggestion-value="getSuggestionValue"
        :input-props="{id:'autosuggest__input', placeholder: '   Start Place'}">
        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
          <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.name}}</div>
          <!-- <img :style="{ display: 'flex', width: '25px', height: '25px', borderRadius: '15px', marginRight: '10px'}" :src="suggestion.item.avatar" /> -->
         
        </div>
      </vue-autosuggest>
        </div>
        <div>
          <div class="input-field col s12">
            <vue-autosuggest
        v-model="query1"
        :suggestions="filteredOptions1"
        @focus="focusMe1"
        @click="clickHandler1"
        @input="onInputChange1"
        @selected="onSelected1"
        :get-suggestion-value="getSuggestionValue1"
        :input-props="{id:'autosuggest__input', placeholder:'   Destination'}">
        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
          <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.name}}</div>
          <!-- <img :style="{ display: 'flex', width: '25px', height: '25px', borderRadius: '15px', marginRight: '10px'}" :src="suggestion.item.avatar" /> -->

        </div>
      </vue-autosuggest>
    
          </div>
        </div>
      </form>
      <br>
      {{temp}} <br>
      <button class="large" v-on:click="check_route">Submit</button>
    </div>
    <div v-if="submit_entries">
The Bus arrival timings are as follows
<table>
  <tr>
    <th>Source</th>
    <td>{{selected.name}}</td>
  </tr>
<tr>
<th>Destination</th>
<td>{{selected1.name}}</td>
</tr>
<tr>
<th>Arrival Timing</th>
<td v-for="item in arrive" :key="item">{{item}}</td>
</tr>
<tr>
 <th>Reach by</th>
 <td v-for="item in dest" :key="item">{{item}}</td>
</tr>
    

</table>
<button v-on:click="goback">Go Back</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css";
import { StrokeStyle } from "vuelayers";
import { StyleBox } from "vuelayers";
import { IconStyle } from "vuelayers";
import { VueAutosuggest } from 'vue-autosuggest';
import firebase from '../firebaseconfig'

Vue.use(VueLayers);
Vue.use(StrokeStyle);
Vue.use(StyleBox);
Vue.use(IconStyle);
export default {
  data() {
    return {
      submit_entries:false,
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      value: "",
       query: "",
       query1: "",
      selected: "",
      selected1: "",
      all_stops:[],
      suggestions: [
        {
          data: [
            
          ]
        }
      ],
      suggestions1: [
        {
          data: [
            
          ]
        }
      ],
      temp:"",
      all_buses:[],
      msg:"",
      flag:0,
      arrive:[],
      dest:[],
      l1:0,
      l2:0
      }
  },
  components: {
    VueAutosuggest
  },created(){
  
    firebase.database().ref("/routes/all_stops").on("value",snap=>{
      this.all_stops.push(snap.val())
      this.put_data()
    })

  },
computed: {
    filteredOptions() {
      return [
        { 
          data: this.suggestions[0].data.filter(option => {
            return option.name.toLowerCase().indexOf(this.query1.toLowerCase()) > -1;
          })
        }
      ];
    },

    filteredOptions1() {
      return [
        { 
          data: this.suggestions1[0].data.filter(option => {
            return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          })
        }
      ];
    }

  },
  methods: {
    check_route(){
      //checks source & destination selected or not
      if(this.selected.id=="" && this.selected1.id==""){
        this.temp="Please select Source and Destination"
      }
       //checks if source & destinations are same or different
      if(this.selected.id==this.selected1.id){
        this.temp="Source and Destination aren't proper... Please select Correctly"
      }
      else{
        // this.msg=Object.keys(this.all_buses).length
        
        for(let i=0;i<Object.keys(this.all_buses).length;i++){
          firebase.database().ref("/routes/bus_route/"+this.all_buses[0][i]+"/timings_stops").once("value",snap=>{
            console.log(Object.keys(snap.val()).length)
            this.l1=Object.keys(snap.val()).length
          })
          firebase.database().ref("/routes/bus_route/"+this.all_buses[0][i]+"/timings_stops_1").once("value",snap=>{
            console.log(Object.keys(snap.val()).length)
            this.l2=Object.keys(snap.val()).length
          })

         firebase.database().ref("/routes/bus_route/"+this.all_buses[0][i]).once("value",snap=>{
          //  console.log(snap.val().stops)
          //used to get all stops & all buses
           let a =this.getstop(snap.val().stops,this.all_buses[0][i],1)
           if(a==1){
           console.log("can go")
           this.submit_entries=true
          //  this.flag=1
           return
           }else{
             a=this.getstop(snap.val().stops_1,this.all_buses[0][i],2)
             if(a==1){
               this.submit_entries=true
            //  this.flag=1
             console.log("yeah can go reverse")}
           }

         })
         
         }
        
      }
    },goback(){
      this.submit_entries=false
    },
    getstop(data,bus,sel){
      // console.log(Object.keys(data).length)
      let i=0,j=0
      for( i=0;i<Object.keys(data).length;i++){
        //checks if the source is present in array 
        if(data[i]===this.selected.name){
            // console.log(data[i])
            break;
        }

      }
      for( j=0;j<Object.keys(data).length;j++){
          //checks if the destination is present in array  
        if(data[j]===this.selected1.name){
            // console.log(data[j])
            break;
        }

      }
     
      if(i<j){
        
        if(sel==1)
        firebase.database().ref("/routes/bus_route/"+bus+"/timings_stops").once("value",snap=>{
          for(let k=0;k<this.l1;k++){

          this.arrive.push(snap.val()[k][i])
          this.dest.push(snap.val()[k][j])
          }
        })
        if(sel==2){
       
        firebase.database().ref("/routes/bus_route/"+bus+"/timings_stops_1").once("value",snap=>{
          for(let k=0;k<this.l2;k++){
          
          this.arrive.push(snap.val()[k][i])
          this.dest.push(snap.val()[k][j])
          }
        })}
        return 1
      }
      else
      return 0

    },
    //push the data(all_stops) to the suggestions,suggestion1 
    put_data(){  
       let i=0;
      
      for(let j=0;j<9;j++){
      
        this.suggestions[0].data.push({
          id:++i,name:this.all_stops[0][j]
        })
      }
       i=0;
      
      for(let j=0;j<9;j++){       
      
        this.suggestions1[0].data.push({
          id:++i,name:this.all_stops[0][j]
        })
      }
     firebase.database().ref("/routes/all_buses").on("value",snap=>{
      this.all_buses.push(snap.val())
      
    })
    },
    clickHandler() {
      // console.log(item)
      // event fired when clicking on the input
    },
     clickHandler1() {
      //  console.log(item)
      // event fired when clicking on the input
    },
    onSelected(item) {
      this.selected = item.item;
    },
    onSelected1(item) {
      this.selected1 = item.item;
    },
    onInputChange() {
      // event fired when the input changes
      // console.log(text)
    },
    onInputChange1() {
      // event fired when the input changes
      // console.log(text)
    },
    /**
     * This is what the <input/> value is set to when you are selecting a suggestion.
     */
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    },
    getSuggestionValue1(suggestion1) {
      return suggestion1.item.name;
    },
    focusMe() {
      // console.log(e) // FocusEvent
    },
    focusMe1() {
      // console.log(e) // FocusEvent
    }
  }
}
</script>
<style>
.demo { 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input {
  width: 260px;
  padding: 0.5rem;
    border-radius: 25px;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 280px;
}

#autosuggest { width: 100%; display: block; color: black;}
.autosuggest__results-item--highlighted {
  background-color: rgba(65, 212, 178, 0.2);
  border-radius: 25px;
}
#autosuggest__input{
    color:black;
}
 #autosuggest input{
     background-color: rgb(176, 221, 241);
   border-radius: 25px;  
 }
 ::placeholder{
     color:rgb(48, 47, 47);
 }

 
</style>
