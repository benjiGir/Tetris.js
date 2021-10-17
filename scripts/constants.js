const COLS = 10
const ROWS = 21
const BLOCK_SIZE = 30

const LINES_PER_LEVEL = 10

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

const POINTS = {
    SINGLE: 100,
    DOUBLE: 200,
    TRIPLE: 300,
    TETRIS: 800,
    SOFT_DROP: 1,
    HARD_DROP: 2
}
Object.freeze(POINTS)

const LEVEL = {
    0: 800,
    1: 720,
    2: 630,
    3: 550,
    4: 410,
    5: 300
}
Object.freeze(LEVEL)