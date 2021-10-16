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
Object.freeze(KEY)

const COLORS = [
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
]

const SHAPES = {
    I: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    O: [
        [0, 2, 2, 0],
        [0, 2, 2, 0],
        [0, 0, 0, 0]
    ],
    T: [
        [0, 0, 0],
        [3, 3, 3],
        [0, 3, 0]
    ],
    L: [
        [0, 0, 4],
        [4, 4, 4],
        [0, 0, 0]
    ],

    J: [
        [5, 0, 0],
        [5, 5, 5],
        [0, 0, 0]
    ],

    Z: [
        [0, 0, 0],
        [6, 6, 0],
        [0, 6, 6]
    ],

    S: [
        [0, 0, 0],
        [0, 7, 7],
        [7, 7, 0]
    ]
}