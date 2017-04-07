<template>
<section class="todoapp">
  <header class="header">
    <h1>{{headline}}</h1>
    <input class="new-todo"
      autofocus autocomplete="off"
      placeholder="What do you wanna do?"
      v-model="newTodo"
      @keyup.enter="addTodo">
  </header>
  <main v-show="todos.length" v-cloak>
    <ul class="todo-list">
      <li v-for="todo in todos"
        class="todo"
        :class="{ completed: todo.completed }">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="todo.completed">
          <label>{{ todo.title }}</label>
          <button class="destroy" @click="removeTodo(todo)">remove</button>
        </div>
      </li>
    </ul>
  </main>
</section>
</template>

<script>


export default {
  data () {
    return {
      todos: [],
      headline: 'todo',
      newTodo: '',
    }
  },
  computed: {
    todos: function () {
      return (this.todos)
    }
  },
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return
      }
      this.todos.push({
        //id: todoStorage.uid++,
        title: value,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
  }
}

</script>

<style lang="scss" scoped>
  .todoapp {
    width: 500px;
    margin: auto;
  }
  header {
    text-align: center;
  }
</style>

