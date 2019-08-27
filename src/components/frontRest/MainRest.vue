<template>
    <div class="hello">
        {{data}}
        <FormRest/>
        <ViewRest/>
    </div>
</template>

<script>

import FormRest from './FormRest'
import ViewRest from './ViewRest'
export default {
    name: 'MainRest',
    components: {
        FormRest, ViewRest
    },
    data () {
        return {
            data: "Main Rest"
        }
    },
    methods: {
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
  background: tomato
}
</style>