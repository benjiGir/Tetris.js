class Piece {
    constructor(ctx) {
        this.ctx = ctx

        const typeId = this.randomizeTetrominoType()
        console.log(typeId.next().value)
        this.shape = SHAPES[typeId.next().value]
        this.color = COLORS[Math.floor(Math.random() * 7)]

        this.x = 3
        this.y = 0
    }

    * randomizeTetrominoType() {
        let pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z']
        let order = []

        let pool = pieces.concat(pieces, pieces, pieces, pieces)

        const firstPiece = ['I', 'J', 'L', 'T'][Math.floor(Math.random() * 4)]
        yield firstPiece

        let history = ['S', 'Z', 'S', firstPiece]

        while (true) {
            let i
            let piece

            for (let roll = 0; roll < 6; roll++) {
                i = Math.floor(Math.random() * 35)
                piece = pool[i]
                if (history.includes(piece) === false || roll === 5) {
                    break
                }
                if (order.length) pool[i] = order[0]
            }

            if (order.includes(piece)) {
                order.splice(order.indexOf(piece), 1)
            }
            order.push(piece)

            pool[i] = order[0]

            history.shift()
            history[3] = piece

            yield piece
        }
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1)
                }
            })
        })
    }

    move(p) {
        this.x = p.x
        this.y = p.y
        this.shape = p.shape
    }
}