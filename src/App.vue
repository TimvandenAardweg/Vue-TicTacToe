<script setup>
import TicTacToe from "./components/TicTacToe.vue";
</script>

<template>
<header>
  <h1>TicTacToe</h1>
</header>

<main>
  <TicTacToe />
</main>
</template>

<style lang="scss">
@import './assets/base.scss';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>
