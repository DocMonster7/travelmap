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
    <div class="row">
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
Vue.use(VueLayers);
Vue.use(StrokeStyle);
Vue.use(StyleBox);
Vue.use(IconStyle);
export default {
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      value: "",
       query: "",
       query1: "",
      selected: "",
      selected1: "",
      suggestions: [
        {
          data: [
            { id: 1, name: "Mangaluru",  },
            { id: 2, name: "Mangaluru2",   },
            { id: 3, name: "Mangaluru3",  },
            { id: 4, name: "Mangaluru4",  },
             { id: 5, name: "Mangaluru5",  }
          ]
        }
      ],
      suggestions1: [
        {
          data: [
            { id: 1, name: "Mangaluru",  },
            { id: 2, name: "Mangaluru2",   },
            { id: 3, name: "Mangaluru3",  },
            { id: 4, name: "Mangaluru4",  },
             { id: 5, name: "Mangaluru5",  }
          ]
        }
      ]
  }
  },
  components: {
    VueAutosuggest
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
