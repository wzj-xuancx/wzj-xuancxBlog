document.addEventListener('DOMContentLoaded', () => {
	let board = document.getElementById('game-board');
	let scoreValue = document.getElementById('score-value');
	let blockSize = 20;
	let rows = 20;
	let cols = 10;
	let score = 0;
	let boardGrid = Array.from(Array(rows), () => new Array(cols).fill(0));
	let currentShape;
	let currentRow;
	let currentCol;
        function createShape() {
            let shapes = [
                [[1, 1, 1, 1]],
                [[1, 1], [1, 1]],
                [[1, 1, 0], [0, 1, 1]],
                [[0, 1, 1], [1, 1, 0]],
                [[1, 1, 1], [0, 1, 0]],
                [[1, 1, 1], [1, 0, 0]],
                [[1, 1, 1], [0, 0, 1]]
            ];
            let randomIndex = Math.floor(Math.random() * shapes.length);
            let shape = shapes[randomIndex];
            currentShape = shape;
            currentRow = 0;
            currentCol = Math.floor(cols / 2) - Math.floor(shape[0].length / 2);
        }
 
        function drawBoard() {
            board.innerHTML = '';
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (boardGrid[row][col]) {
                        let block = document.createElement('div');
                        block.className = 'block';
                        block.style.top = row * blockSize + 'px';
                        block.style.left = col * blockSize + 'px';
                        board.appendChild(block);
                    }
                }
            }
        }
 
        function drawCurrentShape() {
            for (let row = 0; row < currentShape.length; row++) {
                for (let col = 0; col < currentShape[row].length; col++) {
                    if (currentShape[row][col]) {
                        let block = document.createElement('div');
                        block.className = 'block';
                        block.style.top = (currentRow + row) * blockSize + 'px';
                        block.style.left = (currentCol + col) * blockSize + 'px';
                        board.appendChild(block);
                    }
                }
            }
        }
 
        function checkCollision() {
            for (let row = 0; row < currentShape.length; row++) {
                for (let col = 0; col < currentShape[row].length; col++) {
                    if (currentShape[row][col]) {
                        let newRow = currentRow + row;
                        let newCol = currentCol + col;
                        if (
                            newRow >= rows ||
                            newCol < 0 ||
                            newCol >= cols ||
                            boardGrid[newRow][newCol]
                        ) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
 
        function mergeShape() {
            for (let row = 0; row < currentShape.length; row++) {
                for (let col = 0; col < currentShape[row].length; col++) {
                    if (currentShape[row][col]) {
                        let newRow = currentRow + row;
                        let newCol = currentCol + col;
                        boardGrid[newRow][newCol] = 1;
                    }
                }
            }
        }
 
        function clearRows() {
            for (let row = rows - 1; row >= 0; row--) {
                if (boardGrid[row].every((cell) => cell)) {
                    boardGrid.splice(row, 1);
                    boardGrid.unshift(new Array(cols).fill(0));
                    score++;
                }
            }
        }
 
        function updateScore() {
            scoreValue.textContent = score;
        }
 
        function moveDown() {
            currentRow++;
            if (checkCollision()) {
                currentRow--;
                mergeShape();
                clearRows();
                updateScore();
                createShape();
                if (checkCollision()) {
                    gameOver();
                }
            }
        }
 
        function moveLeft() {
            currentCol--;
            if (checkCollision()) {
                currentCol++;
            }
        }
 
        function moveRight() {
            currentCol++;
            if (checkCollision()) {
                currentCol--;
            }
        }
 
        function rotateShape() {
            let rotatedShape = currentShape[0].map((_, colIndex) =>
                currentShape.map((row) => row[colIndex]).reverse()
            );
            let prevShape = currentShape;
            currentShape = rotatedShape;
            if (checkCollision()) {
                currentShape = prevShape;
            }
        }
 
        function gameOver() {
            alert('游戏结束啦😊！！！');
            resetGame();
        }
 
        function resetGame() {
            score = 0;
            boardGrid = Array.from(Array(rows), () => new Array(cols).fill(0));
            updateScore();
            createShape();
        }
 
        function handleKeyPress(event) {
            switch (event.key) {
                case 's':
                    moveDown();
                    break;
                case 'a':
                    moveLeft();
                    break;
                case 'd':
                    moveRight();
                    break;
                case 'w':
                    rotateShape();
                    break;
            }
            drawBoard();
            drawCurrentShape();
        }
 
        function startGame() {
            createShape();
            setInterval(() => {
                moveDown();
                drawBoard();
                drawCurrentShape();
            }, 500);
            document.addEventListener('keydown', handleKeyPress);
        }
 
        startGame();
    });