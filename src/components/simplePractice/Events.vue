<template>
  <div class="hello">
    <button v-on:click="reverseMessage">Reverse Message</button>
    {{ message }}
    <hr>
    <button v-on:click="getTodos">Get Todos</button><button v-on:click="hideTodos">Hide Todos</button>
    <ul>
      <!-- <li v-for="(todo, i) in todos" :key="i">
        {{ todo.title }} - 
        <button class="btnData" v-on:click="getData(todo)">Data</button> -
        <button class="btnDelete" v-on:click="deleteTodo(i)">Delete</button> -
        <button class="btnUpdate" v-on:click="updateTodo(i)">Update</button> -
      </li> -->
        <todo-item v-for="item in todos" 
                   v-bind:todo="item"
                   v-bind:key="item.id">
        </todo-item>
    </ul>
    <p></p>
  </div>
</template>

<script>

export default {
  name: 'Events',
  data () {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      todos: []
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
    getTodos: function () {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(response => this.todos = response)
    },
    hideTodos: function () {
      this.todos = []
    },
    getData: function (todo) {
      console.log(todo)
    },
    deleteTodo: function (index) {
      this.todos = this.todos.filter((todo, i) => i !== index)
    }, 
    updateTodo: function (index) {
      var newTitle = prompt("enter new title todo...");
      if (newTitle != null) {
          this.todos[index].title = newTitle
      }
    } 
  }
}

import Vue from 'vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: `
          <li>{{ todo.title }} - 
              <button class="btnData" v-on:click="getInfo(todo)">Data</button>
              <button class="btnData" v-on:click="removeNow(todo.id)">Remove</button>
          </li>
          `,
  methods: {
    getInfo: function (todo) {
      console.log(todo)
    },
    removeNow: function (id) {
      console.log(id)
    }
  }
})
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
  /* display: inline-block; */
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
</style>