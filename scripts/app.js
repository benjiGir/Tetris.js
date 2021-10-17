const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

ctx.canvas.width = COLS * BLOCK_SIZE
ctx.canvas.height = ROWS * BLOCK_SIZE

ctx.scale(BLOCK_SIZE, BLOCK_SIZE)

let accountValues = {
    score: 0,
    lines: 0
}



const moves = {
    [KEY.LEFT]: (p) => ({
        ...p,
        x: p.x - 1
    }),
    [KEY.RIGHT]: (p) => ({
        ...p,
        x: p.x + 1
    }),
    [KEY.DOWN]: (p) => ({
        ...p,
        y: p.y + 1
    }),
    [KEY.UP]: (p) => board.rotate(p),
    [KEY.SPACE]: (p) => ({
        ...p,
        y: p.y + 1
    })
}

let requestId = null
let time = {
    start: 0,
    elapsed: 0,
    level: 1000
}

function handleKeyPress(event) {
    event.preventDefault()

    if (moves[event.keyCode]) {
        let p = moves[event.keyCode](board.piece)

        if (event.keyCode === KEY.SPACE) {
            while (board.valid(p)) {
                board.piece.move(p)
                account.score += POINTS.HARD_DROP
                p = moves[KEY.SPACE](board.piece)
            }
        } else if (board.valid(p)) {
            board.piece.move(p)
            if (event.keyCode === KEY.DOWN) {
                account.score += POINTS.SOFT_DROP
            }
        }
    }
}

function addEventListener() {
    document.removeEventListener('keydown', handleKeyPress)
    document.addEventListener('keydown', handleKeyPress)
}

function animate(now = 0) {
    time.elapsed = now - time.start

    if (time.elapsed > time.level) {
        time.start = now
        if (!board.drop()) {
            gameOver()
            return
        }
    }

    draw()
    requestId = requestAnimationFrame(animate)
}

function play() {
    board = new Board(ctx)
    addEventListener()

    if (requestId) {
        cancelAnimationFrame(requestId)
    }

    time.start = performance.now()
    animate()
}

function draw() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    board.draw()
    board.piece.draw()
}

function gameOver() {
    cancelAnimationFrame(requestId)

    ctx.fillStyle = 'black'
    ctx.fillRect(1, 3, 8, 1.2)
    ctx.font = '1px Arial'
    ctx.fillStyle = 'red'
    ctx.fillText('GAME OVER', 1.8, 4)
}

function updateAccount(key, value) {
    let element = document.getElementById(key)
    console.log(key);
    if (element) {
        element.textContent = value
    }
}

let account = new Proxy(accountValues, {
    set: (target, key, value) => {
        target[key] = value
        updateAccount(key, value)
        return true
    }
})