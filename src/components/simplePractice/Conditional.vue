<template>
  <div class="hello">
    <h2 v-if="seen">{{student.firstName}}</h2>
    <h2 v-else>{{student.lastName}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Conditional',
  data () {
    return {
      seen: false,
      student: {
        firstName: "rodrigo",
        lastName: "castro",
        age: 31,
        done: true
      }
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
</style>