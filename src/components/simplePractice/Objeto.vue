<template>
  <div class="hello">
    <h3>{{ student.firstName }} - {{ student.lastName }} - {{ student.age }} - {{ student.done }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Objeto',
  data () {
    return {
      student: {
        firstName: "rodrigo",
        lastName: "castro",
        age: 31,
        done: true
      }
    }
  },
  
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
</style>