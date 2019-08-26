<template>
  <div class="hello">
    <input v-model="message">
    <receptor v-bind:msgHijo="message"></receptor>
  </div>
</template>

<script>

import Vue from 'vue'

Vue.component('receptor', {
  props: ['msgHijo'],
  template: '<p class="hijo">{{msgHijo}}</p>',
  // methods: {
  //   delegateMsg: function (message) {
  //     console.log(todo)
  //   }
  // }
})

export default {
  name: 'Emisor',
  data () {
    return {
      message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.hello {
  background: beige
}
.hijo {
  background: gray
}
</style>