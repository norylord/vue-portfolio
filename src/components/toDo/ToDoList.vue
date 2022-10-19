<template>
  <div class="todoList">
    <h1 class="todoList__title">Задачи</h1>

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
          @dragover.prevent.stop="dragOverHandler"
          @dragenter.prevent
          @dragleave.prevent.stop="dragLeaveHandler"
      />
    </div>
    <custom-input v-model="newItemTitle" placeholder="Введите задачу..." @keydown.enter="createNewItem"/>
    <button class="btn__add" @click="createNewItem">
      <img alt="" src="@/assets/plus.png">
    </button>
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
  justify-content: space-between
  flex-direction: column
  width: 90%
  background: #fff
  box-shadow: 0 0 20px #212121
  border-radius: 15px
  padding: 40px 40px 20px
  color: #212121

  &__title
    font-size: 35px
    display: flex
    margin-top: 0
    margin-bottom: 30px
    align-items: center

  input
    width: 100%

  &__container
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    height: 25vh
    overflow-y: auto


    &::-webkit-scrollbar
      width: 10px


    &::-webkit-scrollbar-track
      background: #fff

    &::-webkit-scrollbar-thumb
      border-radius: 5px
      background: #1D2939

.btn__add
  width: 50px
  height: 50px
  border-radius: 50%
  background: #1D2939
  transition: .3s all
  border: 0.1px solid #1D2939
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  img
    transition: .3s ease-in-out all

  &:hover

    img
      transition: .3s ease-in-out
      transform: scale(1.3)
</style>