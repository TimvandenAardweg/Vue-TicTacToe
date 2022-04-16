<script setup>
import Board from "./Board.vue"
import { ref } from 'vue';

const board = ref([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
const playerTurn = ref(1);
const hasWinner = ref(false);
const gameEnded = ref(false);

const squareClicked = (indices) => {
    if (gameEnded.value) {
        return;
    }

    let index = 3 * indices[0] + indices[1];

    if (board.value[index] !== -1){
        return;
    }

    board.value[index] = playerTurn.value;
    checkForWinner();
    checkForGameEnd();

    if(!hasWinner.value && !gameEnded.value)
    {
        playerTurn.value = playerTurn.value === 1 ? 2 : 1;
    }
}

const checkForWinner = () => {
    if (board.value[0] === board.value[1] && board.value[1] === board.value[2] && board.value[0] !== -1
    || board.value[3] === board.value[4] && board.value[4] === board.value[5] && board.value[3] !== -1
    || board.value[6] === board.value[7] && board.value[7] === board.value[8] && board.value[6] !== -1
    || board.value[0] === board.value[3] && board.value[3] === board.value[6] && board.value[0] !== -1
    || board.value[1] === board.value[4] && board.value[4] === board.value[7] && board.value[1] !== -1
    || board.value[2] === board.value[5] && board.value[5] === board.value[8] && board.value[2] !== -1
    || board.value[0] === board.value[4] && board.value[4] === board.value[8] && board.value[0] !== -1
    || board.value[2] === board.value[4] && board.value[4] === board.value[6] && board.value[2] !== -1
    )
    {
        hasWinner.value = true;
    }
}

const checkForGameEnd = () => {
    if( hasWinner.value || board.value.every(val => val !== -1) ){
        gameEnded.value = true;
    }
}

const playAgain = () => {
    board.value = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    gameEnded.value = false;
    hasWinner.value = false;
    playerTurn.value = 1;
}
</script>

<template>
<section>
    <h1>Player {{ playerTurn}}'s turn</h1>
    <Board @squareClicked="squareClicked" :board="board"/>
    <div v-if="gameEnded" class="gameEnded">
        <h1>{{ !hasWinner ? "Draw!" : "Player " + playerTurn + " has won!" }}</h1>
        <button @click="playAgain" id="playAgainButton">Play Again</button>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}

#playAgainButton {
    height: 3rem;
    width: 12rem;
    border-radius: 20px;
    background-color: white;
    color: #045de9;
    font-family: 'Poppins';
    font-weight: bold;
    border: none;
}

.gameEnded {
    display: flex;
    flex-flow: column;
    align-items: center;
}

</style>