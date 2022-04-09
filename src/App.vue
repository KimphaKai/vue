<template>
  <TodoList msg="Welcome to Your Vue.js App" />
</template>

<script>
import TodoList from "./components/index.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
@import "../public/style/style.scss";
</style>
