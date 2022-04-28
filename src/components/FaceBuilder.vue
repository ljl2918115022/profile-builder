<template>
  <div class="hello">
    Hello

      <strong>We're sorry but antd-demo doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>


  </div>
</template>

<script>
// import fs from 'fs';
import {onMounted} from "vue";
import axios from "axios";

export default {
  name: 'FaceBuilder',
  props: {
    msg: String
  },
  setup(){
    onMounted(()=>{
      (async()=>(console.log(await axios.get('http://localhost:9876/',{
        headers:{
          "Access-Control-Allow-Origin":'*'
        }
      }))))()
    });
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
