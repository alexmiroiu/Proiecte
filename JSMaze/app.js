const playerAvatar = document.querySelector('.hero');
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
    movingDistance = 6.4;
    leftDistance = 0.5;
    topDistance = 0.5;
    steps = 0;

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
    getCurrentPosition() {
        this.playerPos = this.board[this.y][this.x];
        this.player.style.left = (this.leftDistance).toString() + 'rem';
        this.player.style.top = (this.topDistance).toString() + 'rem';
    }

    move(direction) {
        if(direction === 'ArrowUp') {
            this.topDistance -= this.movingDistance;
        } else if(direction === 'ArrowDown') {
            this.topDistance += this.movingDistance;
        } else if(direction === 'ArrowLeft') {
            this.leftDistance -= this.movingDistance;
        } else if(direction === 'ArrowRight') {
            this.leftDistance += this.movingDistance;
        }
    }


    

}

let game = new Game(playerAvatar, gameBoard);
game.setStartPosition();
game.setY(6);
game.setX(8);
console.log(game.playerPos);


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    game.move(e.key);
    game.getCurrentPosition();
    console.log(game.player);
} )

