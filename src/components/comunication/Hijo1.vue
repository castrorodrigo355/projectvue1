<template>
  <div class="hello">
      <button v-on:click="sumar">Sumar</button>
      {{contPara1}}      
  </div>
</template>

<script>
export default {
    name: 'Hijo1',
    props: ['contPara1'],
    data () {
        return {
        }
    },
    methods: {
        sumar: function () {
            this.$emit('incrementaPadre')
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
</style>