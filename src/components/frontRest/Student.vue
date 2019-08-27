<template>
    <div class="hello">
         <li>
           {{student.name}} - {{student.age}} - 
            <button v-on:click="getStudent(student)">Data</button> -
            <button v-on:click="updateStudent(index)">Update</button> -
            <button v-on:click="deleteStudent(index)">Delete</button>
          </li>
    </div>
</template>

<script>
export default {
    name: 'Student',
    props: ['student', 'index'],
    data () {
        return {
            
        }
    },
    methods: {
      getStudent: function (student) {
          console.log(student)
      },
      updateStudent: function (index) {
          console.log(index)
      },
      deleteStudent: function (index) {
          this.$emit("deleteStudentMain", index)
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
  background: #42b983;
}
</style>