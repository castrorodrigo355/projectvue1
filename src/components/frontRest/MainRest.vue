<template>
    <div class="hello">
        {{data}}
        <hr>
        <FormRest @addStudentMain="addStudent"/>
        <hr>
        <ul>
            <!-- <li v-for="(student, i) in students" :key="i">
                {{student.name}} - 
                {{student.age}} - 
                <button v-on:click="getStudent(student)">Data</button> -
                <button v-on:click="updateStudent(i)">Update</button> -
                <button v-on:click="deleteStudent(i)">Delete</button>
            </li> -->
            <Student    v-for="(item, i) in students"
                        v-bind:student="item"
                        v-bind:index="i"
                        v-bind:key="i"
                        @deleteStudentMain="deleteStudent">
            </Student>
        </ul>
    </div>
</template>

<script>

import FormRest from './FormRest'
import Student from './Student'
export default {
    name: 'MainRest',
    components: {
        FormRest, Student
    },
    data () {
        return {
            data: "Main View",
            students: [
                {name: "rodrigo", age: 31},
                {name: "fernando", age: 45},
                {name: "giovani", age: 43},
                {name: "camila", age: 18},
                {name: "nahuel", age: 21},
                {name: "damaris", age: 13}
            ]
        }
    },
    methods: {
        addStudent: function (student) {
            this.students.push(student)
        },
        deleteStudent: function (index) {
            this.students = this.students.filter((student, i) => i !== index)
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
  background: tomato
}
</style>