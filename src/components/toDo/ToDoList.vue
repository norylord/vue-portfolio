<template>
  <div class="todoList">
    <custom-input v-model="newItemTitle" placeholder="Введите задачу..." @keydown.enter="createNewItem"/>
    <div class="todoList__container">
      <ToDoItem
          v-for="item in todos.sort(sortItems)"
          :key="item.id"
          :completeItem="toggleCompleteItem"
          :item="item"
          :removeItem="removeItem"
          draggable="true"
          @dragstart="dragStartHandler(item)"
          @drop="dropHandler($event, item)"
          @dragover.prevent
          @dragenter.prevent
      />
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/toDo/ToDoItem";
import CustomInput from "@/components/ui/CustomInput";

export default {
  components: {CustomInput, ToDoItem},
  data() {
    return {
      todos: [
        // {id: 1, title: 'Введите название задачи'},
        // {id: 2, title: 'Нажмите Enter :)'},
      ],
      newItemTitle: '',
      currentItem: {},
      order: 0
    }
  },
  methods: {
    createNewItem() {
      if (this.newItemTitle !== '') {
        const newItem = {
          id: Date.now(),
          title: this.newItemTitle,
          order: this.order,
          complete: false
        }
        this.todos.push(newItem)
        this.newItemTitle = ''
        this.order += 1
      }
    },
    getTodosFromLocalStorage() {
      const data = JSON.parse(localStorage.getItem('todos'))
      const order = JSON.parse(localStorage.getItem('order'))
      if (data !== null) {
        this.todos = data
      }
      if (order !== null) {
        this.order = order
      }
    },
    dragStartHandler(item) {
      console.log(item)
      this.currentItem = item
    },
    dropHandler(e, item) {
      e.preventDefault()
      this.todos = this.todos.map(i => {
        if (i.id === item.id) {
          return {...i, order: this.currentItem.order}
        }
        if (i.id === this.currentItem.id) {
          return {...i, order: item.order}
        }
        return i
      })
    },
    sortItems(a, b) {
      if (a.order > b.order) {
        return 1
      } else {
        return -1
      }
    },
    removeItem(id) {
      this.todos = this.todos.filter(i => i.id !== id)
    },
    toggleCompleteItem(id) {
      this.todos.map(i => {
        i.id === id ? i.complete = !i.complete : null
      })
    }
  },
  mounted() {
    this.getTodosFromLocalStorage()
  },
  watch: {
    todos: {
      handler(newVal) {
        localStorage.setItem('todos', JSON.stringify(newVal))
        localStorage.setItem('order', JSON.stringify(this.order))
      },
      deep: true
    }
  },

}
</script>

<style lang="sass" scoped>

.todoList
  display: flex
  align-items: center
  flex-direction: column
  width: 100%
  background: #f1f1f1
  border-radius: 15px

  input
    width: 80%

  &__container
    display: flex
    flex-direction: column
    align-items: center
    height: 50vh
    width: 100%
    overflow-y: auto


    &::-webkit-scrollbar
      width: 10px

    &::-webkit-scrollbar-track
      background: lightgray

    &::-webkit-scrollbar-thumb
      background: linear-gradient(#49e8e4, #f1354d)
</style>