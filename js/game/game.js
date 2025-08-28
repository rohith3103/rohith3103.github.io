// Basic Tetris Game Logic

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

context.scale(20, 20); // Scale the canvas for a grid-like appearance

const arena = createMatrix(15, 30);
let score = 0;

function createMatrix(width, height) {
    const matrix = [];
    while (height--) {
        matrix.push(new Array(width).fill(0));
    }
    return matrix;
}

const colors = [
    null,
    '#FFA500', // Orange
    '#ADD8E6', // Light Blue
    '#FFD700', // Gold
    '#00FF00', // Green
    '#8A2BE2', // Blue Violet
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
];

const shapes = {
    'T': [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ],
    'O': [
        [2, 2],
        [2, 2],
    ],
    'L': [
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3],
    ],
    'J': [
        [0, 4, 0],
        [0, 4, 0],
        [4, 4, 0],
    ],
    'I': [
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
    ],
    'S': [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0],
    ],
    'Z': [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
    ],
};

function createPiece() {
    const pieces = 'TOLJISZ';
    const piece = pieces[Math.floor(Math.random() * pieces.length)];
    return {
        matrix: shapes[piece],
        pos: { x: Math.floor(arena[0].length / 2) - 1, y: 0 },
        color: shapes[piece][0].find(val => val > 0) || 1
    };
}

let player = createPiece();

function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
                (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function arenaSweep() {
    outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        score += 10;
        scoreElement.textContent = score;
    }
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(arena, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

function update(time = 0) {
    if (!gameInterval) return;
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    draw();
    requestAnimationFrame(update);
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        arenaSweep();
        player = createPiece();
        if (collide(arena, player)) {
            stopGame();
            alert('Game Over! Your score: ' + score);
        }
    }
    dropCounter = 0;
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
        player.pos.x -= dir;
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

document.addEventListener('keydown', event => {
    if (!document.getElementById('game-container').classList.contains('active')) return;
    if (event.key === 'ArrowLeft') {
        playerMove(-1);
    } else if (event.key === 'ArrowRight') {
        playerMove(1);
    } else if (event.key === 'ArrowDown') {
        playerDrop();
    } else if (event.key === 'ArrowUp') {
        playerRotate(1);
    }
});

let gameInterval;
function startGame() {
    gameInterval = setInterval(playerDrop, dropInterval);
    update();
}

function stopGame() {
    clearInterval(gameInterval);
    gameInterval = null;
    arena.forEach(row => row.fill(0));
    score = 0;
    scoreElement.textContent = score;
}

// Add event listeners for the new on-screen controls
document.getElementById('move-left').addEventListener('click', () => playerMove(-1));
document.getElementById('move-right').addEventListener('click', () => playerMove(1));
document.getElementById('rotate-piece').addEventListener('click', () => playerRotate(1));
document.getElementById('drop-piece').addEventListener('click', () => playerDrop());

startGame();