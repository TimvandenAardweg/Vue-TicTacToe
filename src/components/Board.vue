<script setup>
import Row from './Row.vue';

const props = defineProps({
    board: Array
});

const emit = defineEmits(['squareClicked']);

const squareClicked = (indices) => {
    emit('squareClicked', indices);
}
</script>

<template>
<div id="board">
    <Row @squareClicked="squareClicked" :row="board.slice(0, 3)" :rowNumber="0"/>
    <Row @squareClicked="squareClicked" :row="board.slice(3, 6)" :rowNumber="1"/>
    <Row @squareClicked="squareClicked" :row="board.slice(6, 9)" :rowNumber="2"/>
</div>
</template>

<style scoped>
#board {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
</style>