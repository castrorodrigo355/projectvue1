<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addStudent">
                <div class="form-group">
                  <input type="text" v-model="student.name" class="form-control" placeholder="Name...">
                </div>
                <div class="form-group">
                  <input type="text" v-model="student.age" class="form-control" placeholder="Age...">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Send</button>
              </form>
            </div>
          </div>
        </div>  
      </div>
    </div>
                              <hr>
    <ul>
      <li v-for="(student, i) in students" :key="i">
        {{ student.name }} - {{ student.age }}
        <!-- <button class="btnData" v-on:click="getStudentData(student)">Data</button> -->
        <button class="btnUpdate" v-on:click="updateStudent(student._id)">Update</button>
        <button class="btnDelete" v-on:click="deleteStudent(student._id)">Delete</button>
      </li>
    </ul>
  </div>

</template>

<script>
import service from "./service/Service"
export default {
  name: 'StudentsFrontEnd',
  created : function(){
    service.getStudents().then(response => this.students = response);
  },
  data () {
    return {
      students : [],
      student: {
        name: "", age: ""
      }
    }
  },
  methods: {
    addStudent: function () {
      const student = {name: this.student.name, age: this.student.age};
      service.postStudent(student).then(response => console.log("Student inside"));
      this.student.name = "";
      this.student.age = "";
    },
    // getStudentData: function (student) {
    //   this.student.name = student.name;
    //   this.student.age = student.age;
    // },
    deleteStudent: function (id) {
      service.deleteStudent(id).then(response => console.log("Student Deleted"))
    }, 
    updateStudent: function (id) {
      const student = this.students.find((student, i) => student._id === id);
      this.student.name = student.name;
      this.student.age = student.age;
      
      fetch(`http://localhost:3000/api/students/${id}`, {
        method: "PUT",
        body: JSON.stringify(this.student),
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
        }
      }).then(res => res.json())
        .then(response => console.log("Updated Student"))
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
.btnData {
  background: blue;
  color: beige;
  border-radius: 60%
}
.btnDelete {
  background: red;
  color: beige;
  border-radius: 30%
}
.btnUpdate{
  background: beige;
  border-radius: 80%
}
</style>