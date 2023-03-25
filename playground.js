const BOARD_STYLE = "display:grid;grid-template-columns:200px200px200px;"

class Game {
  constructor() {
    this.board = []
    for (let x = 0; x < 9; x++) {
      this.board.push({ mine: Math.random() > 0.5, hidden: true, index: x })
    }
  }

  showBoard() {
    console.log('the board is', this.board)
  }

  makeBoard() {
    return `<table>${this.makeRows()}</table>`
  }

  makeTiles() {
    return this.board.map((tile, i) => `<td class="tile" id="tile-${tile.index}-${tile.mine ? '1' : '0'}-${this.hidden ? '1' : 0 }" style="color:${tile.mine ? 'red' : 'green'};padding:10px;margin:2px">${tile.mine}</td>`)
  }

  makeRows(num=3) {
    const tilesPerRow = Math.ceil(this.board.length / num)
    console.log('there are tilesPerRow', tilesPerRow)
    let returnStr = ``
    const allTiles = this.makeTiles()
    for (let i = 0; i < num; i++) {
      const index = num*tilesPerRow
      returnStr += `<tr>${allTiles.slice(index, index+tilesPerRow-1)}</tr>`
    }
    console.log('retrunStr makeRows', returnStr)
    return returnStr
  }

  paintBoard() {
    document.body.innerHTML = this.makeBoard()
  }

}


function handleClick(e) {
  switch(e.target.className) {
    default: 
    console.log('e.target.className is', e.target.className)
    console.log('e.target.id is', e.target.id)
  }
}

g = new Game()
g.paintBoard()

document.addEventListener('click', handleClick)
