<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <!-- SIMPLE PRACTICE -->
    <!-- <Emisor/><hr>
    <Objeto/><hr>
    <Languages/><hr>
    <Conditional/><hr>
    <Events/> -->

    <!-- API REST -->
    <!-- <StudentsFrontEnd/> -->
    
    <!-- COMUNICATION -->
    <!-- <button v-on:click="random()">Random Number</button>
    {{contador}}
    <Hijo1 :contPara1="contador" @incrementaPadre="incrementar"/>
    <Hijo2 :contPara2="contador" @decrementaPadre="decrementar"/> -->

    <!-- FRONT REST -->
    <MainRest/>

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
/* COMUNICATION */
import Hijo1 from './components/comunication/Hijo1'
import Hijo2 from './components/comunication/Hijo2'
/* FRONT - REST */
import MainRest from './components/frontRest/MainRest'


export default {
  name: 'App',
  components: {
    // Emisor, Objeto, Languages, Conditional, Events,
    // StudentsFrontEnd
    // Hijo1, Hijo2
    MainRest
  },
    data () {
        return {
            contador: 0
        }
    },
    methods: {
      created: function () {

      },
      random: function () {
        this.contador = Math.floor((Math.random() * 10) + 1);
      },
      incrementar: function () {
        this.contador++
      },
      decrementar: function () {
        this.contador--
      }
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