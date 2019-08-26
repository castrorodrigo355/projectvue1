<template>
  <div class="hello">
    <ul>
      <li v-for="(language, i) in languages" :key="i">
        {{ language.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  data () {
    return {
      languages: [
        {name: "react", type: "front end"},
        {name: "php", type: "back end"},
        {name: "angular", type: "front end"},
        {name: "java", type: "back end"},
        {name: "vue", type: "front end"}
      ]
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