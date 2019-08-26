<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <Emisor/><hr>
    <Objeto/><hr>
    <Languages/><hr>
    <Conditional/><hr>
    <Events/> -->

    <StudentsFrontEnd/>

  </div>
</template>

<script>
/* SIMPLE PRACTICE */
import Emisor from './components/simplePractice/Emisor'
import Objeto from './components/simplePractice/Objeto'
import Languages from './components/simplePractice/Languages'
import Conditional from './components/simplePractice/Conditional'
import Events from './components/simplePractice/Events'
/* FORMS */
import StudentsFrontEnd from './components/apiRest/StudentsFrontEnd'

export default {
  name: 'App',
  components: {
    // Emisor, Objeto, Languages, Conditional, Events,
    StudentsFrontEnd
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 10px; */
}
img {
  height: "10px";
  width: "10px"
}
</style>