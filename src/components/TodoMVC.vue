<template>
<section class="todomvc">
  <header class="header">
    <h1>todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
  </header>
  <main v-show="todos.length" v-cloak>
      <ul v-if="filter === 'active'" class="todo-list">
        <todo v-for="(todo, index) in todos" v-if="!todo.done" :key="index" :todo="todo"></todo>
      </ul>
      <ul v-else-if="filter === 'completed'" class="todo-list">
        <todo v-for="(todo, index) in todos" v-if="todo.done" :key="index" :todo="todo"></todo>
      </ul>
      <ul v-else class="todo-list">
        <todo v-for="(todo, index) in todos" v-if="" :key="index" :todo="todo"></todo>
      </ul>
  </main>
  <footer>
    <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li><router-link to="all">All Todos</router-link></li>
        <li><router-link to="active">Active Todos</router-link></li>
        <li><router-link to="completed">Completed Todos</router-link></li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
  </footer>
</section>
</template>

<script>
import Todo from './Todo.vue'
import { mapMutations } from 'vuex'


export default {
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  components: { Todo },
  data () {
    return {
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    addTodo (e) {
      var text = e.target.value
      if (text.trim()) {
        this.$store.commit('addTodo', { text })
      }
      e.target.value = ''
    },
    ...mapMutations([
      'clearCompleted'
    ])
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's')
  }
}

</script>

<style lang="scss" scoped>
  .todomvc {
    width: 500px;
    margin: auto;
  }
  header {
    text-align: center;
  }
</style>
