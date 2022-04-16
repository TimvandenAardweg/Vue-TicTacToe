<script setup>
const props = defineProps({
    value: Number,
    squareNumber: Number
});
const emit = defineEmits(['squareClicked']);

const squareClicked = () => {
    emit('squareClicked', props.squareNumber);
}
</script>

<template>
<div @click="squareClicked" class="square">
    <font-awesome-icon v-if="value === 1" class="icon player1" :icon="['far', 'circle']" />
    <font-awesome-icon v-if="value === 2" class="icon player2" :icon="['fas', 'x']" />
</div>
</template>

<style lang="scss" scoped>
@import "../assets/variables";
.square {
    height: 10rem;
    width: 10rem;
    border: 1px solid;
    border-color: white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.icon {
    font-size: 5rem;
}

.player1 {
    color: $player2;
}

.player2 {
    color: $player1;
}
</style>

com