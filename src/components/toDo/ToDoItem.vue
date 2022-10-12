<template>
  <div class="toDoItem"
       @click="toggle = !toggle"
  >
    <h3 :class="['toDoItem__title', item.complete ? 'completed' : null]">{{ item.title }}</h3>
    <div v-show="toggle" class="btn__container">
      <button class="btn success" @click.stop="completeItem(item.id)">Выполнено</button>
      <button class="btn delete" @click.stop="removeItem(item.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    removeItem: {
      type: Function
    },
    completeItem: {
      type: Function
    }
  },
  data() {
    return {
      toggle: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.toDoItem
  display: flex
  justify-content: space-between
  flex-direction: column
  text-align: center
  width: 80%
  padding: 10px
  border-bottom: 1px lightgray solid
  cursor: pointer

  &__title
    display: flex
    justify-content: center
    align-items: center
    word-break: break-word
    padding: 0 10px

  .completed
    text-decoration: line-through
    color: lightgreen
    font-size: 30px

  .btn
    border: none
    justify-content: center
    align-items: center
    padding: 10px
    flex: 0 0 auto
    cursor: pointer
    margin: 10px

  .success
    background: #42b983
    color: #eee

  .delete
    color: #eee
    background: lightcoral
</style>