const player = document.querySelector('.hero');
const boardElements = document.querySelectorAll('.square');
console.log(boardElements);

class NewBoard {

    constructor(elementList) {
        this.boardTiles = elementList;
    }

    
}

class Game {

    constructor(player, board, playerPosition) {
        this.player = player;
        this.board = board;
        this.playerPos = playerPosition;
    }
}