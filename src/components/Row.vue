<script setup>
import Square from './Square.vue';

const props = defineProps({
    row: Array,
    rowNumber: Number
});

const emit = defineEmits(['squareClicked']);

const squareClicked = (squareNumber) => {
    emit('squareClicked', [props.rowNumber, squareNumber])
}
</script>

<template>
<div class="row">
    <Square @squareClicked="squareClicked" :value="row[0]" :squareNumber="0"/>
    <Square @squareClicked="squareClicked" :value="row[1]" :squareNumber="1"/>
    <Square @squareClicked="squareClicked" :value="row[2]" :squareNumber="2"/>
</div>
</template>

<style scoped>
.row {
    display: flex;
    flex-flow: row nowrap;
}
</style>