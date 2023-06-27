// ข้อ1 Big O เป็น O(m(n^2))
const firstTest = () => {
    const board = 8 // n
    const allblack = 4 // m
    const position = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }]
    // const board = 4
    // const allblack = 2
    // const position = [{ row: 1, col: 1 }, { row: 2, col: 2 }]

    let count = 0
    let inLength = true

    for (let a = 0; a < board; a++) { // first n
        for (let b = 0; b < board; b++) { // second n
            for (const pos of position) { // m
                if (pos.row === a || pos.col === b) {
                    inLength = false
                    break;
                }
            }
            if (inLength) count++
            else inLength = true
        }
    }

    console.log(count)
}

// ข้อ2 เขียนให้ big O ต่ำกว่า O(n^2) 
const secondTest = () => {
    const board = 8
    const allblack = 4
    const position = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }]
    // const board = 4
    // const allblack = 2
    // const position = [{ row: 1, col: 1 }, { row: 2, col: 2 }]

    let allfree = board * board

    let rowTemp = []
    let colTemp = []
    position.forEach((pos) => {
        let oldRow = rowTemp.length
        let oldCol = colTemp.length
        const rowFind = rowTemp.findIndex((r) => pos.row === r)
        const colFind = colTemp.findIndex((c) => pos.col === c)
        if (rowFind === -1) {
            allfree -= (board - oldCol)
            rowTemp.push(pos.row)
            oldRow += 1
        }
        if (colFind === -1) {
            allfree -= (board - oldRow)
            colTemp.push(pos.col)
        }
    })

    console.log(allfree)
}

firstTest()
secondTest()