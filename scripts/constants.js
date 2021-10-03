const COLS = 18
const ROWS = 25
const BLOCK_SIZE = 30

const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
}

const T = [
    [0, 0, 0],
    [2, 2, 2],
    [0, 2, 0]
]

const L = [
    [0, 0, 0],
    [0, 0, 2],
    [2, 2, 2]
]

const z = [
    [0, 0, 0],
    [2, 2, 0],
    [0, 2, 2]
]

const s = [
    [0, 0, 0],
    [0, 2, 2],
    [2, 2, 0]
]

Object.freeze(KEY)