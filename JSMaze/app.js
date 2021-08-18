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

class Game {
    y;
    x;
    playerPos;
    movingDistance = 6.4;
    leftDistance = 0.5;
    topDistance = 0.5;
    steps = 0;
    remainingSeconds = 90;
    gameStarted = false;

    constructor(player, board, bodyElement, msgBox, stepsElement) {
        this.player = player;
        this.board = board;
        this.background = bodyElement;
        this.message = msgBox;
        this.stepsMessage = stepsElement;
        
        
    }

    setStartPosition() {
        this.x = 0;
        this.y = 0;
        this.leftDistance = 0.5;
        this.topDistance = 0.5;
        this.playerPos = this.board[this.y][this.x];
        this.player.style.left = (this.leftDistance).toString() + 'rem';
        this.player.style.top = (this.topDistance).toString() + 'rem';
        this.steps = 0;
        this.stepsMessage.textContent = (this.steps).toString();
        console.log(this.leftDistance, this.topDistance);
        this.remainingSeconds = 90;
    }
    getCurrentPosition() {
        this.playerPos = this.board[this.y][this.x];
        this.player.style.left = (this.leftDistance).toString() + 'rem';
        this.player.style.top = (this.topDistance).toString() + 'rem';
    }

    move(direction) {
        if(direction === 'ArrowUp' && this.playerPos.includes('t') && this.y > 0) {
            this.y--;
            this.topDistance -= this.movingDistance;
        } else if(direction === 'ArrowUp' && !this.playerPos.includes('t') ) {
            this.background.style.backgroundColor ='red';
            this.message.textContent = 'Wrong way!'
            setTimeout(() => {
                this.background.style.backgroundColor = 'var(--main-background)';
                this.message.textContent = '';
            }, 300);
        }
        if(direction === 'ArrowDown' && this.playerPos.includes('b') && this.y < 9) {
            this.y++;
            this.topDistance += this.movingDistance;
        } else if(direction === 'ArrowDown' && !this.playerPos.includes('b') ) {
            this.background.style.backgroundColor ='red';
            this.message.textContent = 'Wrong way!'
            setTimeout(() => {
                this.background.style.backgroundColor = 'var(--main-background)';
                this.message.textContent = '';
            }, 300);
        }
        if(direction === 'ArrowLeft' && this.playerPos.includes('l') && this.x > 0) {
            this.x--;
            this.leftDistance -= this.movingDistance;
        } else if(direction === 'ArrowLeft' && !this.playerPos.includes('l') ) {
            this.background.style.backgroundColor ='red';
            this.message.textContent = 'Wrong way!'
            setTimeout(() => {
                this.background.style.backgroundColor = 'var(--main-background)';
                this.message.textContent = '';
            }, 300);
        }
        if(direction === 'ArrowRight' && this.playerPos.includes('r') && this.x < 9) {
            this.x++;
            this.leftDistance += this.movingDistance;
        } else if(direction === 'ArrowRight' && !this.playerPos.includes('r') ) {
            this.background.style.backgroundColor ='red';
            this.message.textContent = 'Wrong way!'
            setTimeout(() => {
                this.background.style.backgroundColor = 'var(--main-background)';
                this.message.textContent = '';
            }, 300);
        }
    }

    stepsIncrement() {
        this.steps++;
        this.stepsMessage.textContent = (this.steps).toString();
    }

    reset() {
        this.message = '';

    }
    timerOn() {
        this.remainingSeconds--;
    }   
    

}
const playerAvatar = document.querySelector('.hero');
const boardElements = document.querySelectorAll('.square');
const body = document.body;
const messageBox = document.querySelector('.message');
const stepsBox = document.querySelector('.steps');
const startButton = document.querySelector('.start-btn');
const resetButton = document.querySelector('.reset-btn');
const timer = document.querySelector('.timer');
let timerStart;


const maze = new Board(boardElements);
maze.generate();
const gameBoard = maze.layout;


let game = new Game(playerAvatar, gameBoard, body, messageBox, stepsBox);
game.setStartPosition();
console.log(game.playerPos);
game.getCurrentPosition();
timer.textContent = game.remainingSeconds;


window.addEventListener('keyup', (e) => {
    game.move(e.key);
    game.getCurrentPosition();
    game.stepsIncrement();
} )

startButton.addEventListener('click', () => {
    timerStart = setInterval(() => {
        game.timerOn();
        timer.textContent = game.remainingSeconds;
    }, 1000)
    startButton.disabled = true;
})

resetButton.addEventListener('click', () => {
    game.setStartPosition();
    startButton.disabled = false;
    clearInterval(timerStart);
    timer.textContent = game.remainingSeconds;
})

