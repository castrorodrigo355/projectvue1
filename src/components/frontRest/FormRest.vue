<template>
    <div class="hello">
        <form v-on:submit.prevent="addStudent">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name...">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Age</label>
                <input type="text" v-model="age" class="form-control" id="exampleInputPassword1" placeholder="Enter age...">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormRest',
    data () {
        return {
            name: "",
            age: ""
        }
    },
    methods: {
        addStudent: function () {
            // console.log({name: this.name, age: this.age})
            this.$emit("addStudentMain", {name: this.name, age: this.age})
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