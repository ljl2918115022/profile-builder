<template>
  <div class="hello">
    Hello
    <form action="http://localhost:9876/file-upload" method="post" enctype="multipart/form-data">
      <input type="file" name="head" /><br />
      <input type="submit" value="上传文件" />
    </form>
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
