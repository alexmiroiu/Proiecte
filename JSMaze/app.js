const player = document.querySelector('.hero');
const boardElements = document.querySelectorAll('.square');
// console.log(boardElements);

class Board {
    layout;

    constructor(elementList) {
        this.boardTiles = [...elementList];
    }
    generate() {
        this.layout = [[],[],[],[],[],[],[],[],[],[]];
        for(let i=0; i< 100; i++) {
            let item = this.boardTiles[i];
            let classes = Array.from(item.classList)
            let itemContent = '';
            if(classes.includes('top')) {
                itemContent += 't';
            } 
            if(classes.includes('bot')) {
                itemContent += 'b';
            } 
            if(classes.includes('left')) {
                itemContent += 'l';
            } 
            if(classes.includes('right')) {
                itemContent += 'r';
            }
            if(i >= 0 && i < 10) {
                this.layout[0].push(itemContent)
            }
            if(i >= 10 && i < 20) {
                this.layout[1].push(itemContent)
            }
            if(i >= 20 && i < 30) {
                this.layout[2].push(itemContent)
            }
            if(i >= 30 && i < 40) {
                this.layout[3].push(itemContent)
            }
            if(i >= 40 && i < 50) {
                this.layout[4].push(itemContent)
            }
            if(i >= 50 && i < 60) {
                this.layout[5].push(itemContent)
            }
            if(i >= 60 && i < 70) {
                this.layout[6].push(itemContent)
            }
            if(i >= 70 && i < 80) {
                this.layout[7].push(itemContent)
            }
            if(i >= 80 && i < 90) {
                this.layout[8].push(itemContent)
            }
            if(i >= 90 && i < 100) {
                this.layout[9].push(itemContent)
            }
        }
    }

    
}
const maze = new Board(boardElements);
maze.generate();
const gameBoard = maze.layout;
console.log(gameBoard)



class Game {
    y;
    x;
    playerPos;

    constructor(player, board) {
        this.player = player;
        this.board = board;
    }

    setStartPosition() {
        this.x = 0;
        this.y = 0;
    }
    setX(val){
        this.x = val;
    }
    setY(val) {
        this.y = val;
    }
    currentPosition() {
        this.playerPos = this.board[this.y][this.x];

    }

    

}

let game1 = new Game(player, gameBoard);
game1.setStartPosition();
game1.setY(6);
game1.setX(8);
game1.currentPosition()
console.log(game1.playerPos);



